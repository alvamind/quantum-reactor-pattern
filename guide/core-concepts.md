# Core Concepts

The Quantum Reactor Pattern is built on several key principles and concepts that work together to create a robust React application architecture.

## 1. Schema-First State Definition

Every piece of application state starts with a schema definition. This provides:

- **Type Safety**: Clear TypeScript interfaces for all state
- **Initial Values**: Default state is defined upfront
- **Documentation**: State structure is self-documenting
- **Validation**: Easy to add validation logic

Example:

```typescript
// schema/UserSchema.ts
export type UserState = {
  id: string | null;
  name: string;
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
};

export const initialUserState: UserState = {
  id: null,
  name: '',
  preferences: {
    theme: 'light',
    notifications: true,
  },
};
```

## 2. Global State with Atoms & Selectors

State is managed using Recoil's atoms and selectors:

- **Atoms**: Represent the source of truth for a piece of state
- **Selectors**: Derive state from atoms or other selectors
- **Global Access**: Any component can access any state when needed
- **Fine-grained Updates**: Components only re-render when their specific state changes

Example:

```typescript
// quantum/atoms/userAtom.ts
import { atom } from 'recoil';
import { UserState, initialUserState } from '../../schema/UserSchema';

export const userStateAtom = atom<UserState>({
  key: 'userState',
  default: initialUserState,
});

// quantum/selectors/userSelectors.ts
import { selector } from 'recoil';
import { userStateAtom } from '../atoms/userAtom';

export const userThemeSelector = selector({
  key: 'userThemeSelector',
  get: ({ get }) => {
    const { preferences } = get(userStateAtom);
    return preferences.theme;
  },
});
```

## 3. Event-Driven State Transitions

State changes happen through well-defined events:

- **Explicit Events**: Every state change is an explicit event
- **Centralized Logic**: State transition logic is centralized and reusable
- **Predictable Updates**: All state updates follow a clear pattern
- **Auditable Changes**: Events can be logged for debugging

Example:

```typescript
// quantum/events/userEvents.ts
import { useRecoilCallback } from 'recoil';
import { userStateAtom } from '../atoms/userAtom';

export type UserEvent =
  | { type: 'SET_NAME', payload: string }
  | { type: 'TOGGLE_THEME' };

export const useUserEvents = () => {
  const dispatch = useRecoilCallback(
    ({ set, snapshot }) => async (event: UserEvent) => {
      const currentState = await snapshot.getPromise(userStateAtom);

      switch (event.type) {
        case 'SET_NAME':
          set(userStateAtom, {
            ...currentState,
            name: event.payload
          });
          break;

        case 'TOGGLE_THEME':
          set(userStateAtom, {
            ...currentState,
            preferences: {
              ...currentState.preferences,
              theme: currentState.preferences.theme === 'light' ? 'dark' : 'light'
            }
          });
          break;
      }
    },
    []
  );

  return dispatch;
};
```

## 4. Custom Hooks for State Access

Custom hooks provide a clean API for components to interact with state:

- **Encapsulated Logic**: Business logic separated from UI components
- **Reusable Access**: Same hook can be used across multiple components
- **Zero Prop Drilling**: Components access state directly, no props needed
- **Consistent Interface**: Standard pattern for all state access

Example:

```typescript
// hooks/useUser.ts
import { useRecoilValue } from 'recoil';
import { userStateAtom } from '../quantum/atoms/userAtom';
import { userThemeSelector } from '../quantum/selectors/userSelectors';
import { useUserEvents } from '../quantum/events/userEvents';

export const useUser = () => {
  const userState = useRecoilValue(userStateAtom);
  const theme = useRecoilValue(userThemeSelector);
  const dispatch = useUserEvents();

  return {
    name: userState.name,
    theme,
    preferences: userState.preferences,
    setName: (name: string) => dispatch({ type: 'SET_NAME', payload: name }),
    toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }),
  };
};
```

## 5. Atomic Design Components

Components are organized following atomic design principles:

- **Atoms**: Basic building blocks (buttons, inputs, labels)
- **Molecules**: Simple combinations of atoms (form fields, cards)
- **Organisms**: Complex compositions (forms, headers, sidebars)
- **Templates**: Page layouts without specific content
- **Pages**: Complete page compositions

Example:

```tsx
// Atom component
const ThemeToggle = () => {
  const { theme, toggleTheme } = useUser();
  return (
    <Button onClick={toggleTheme} variant="ghost">
      {theme === 'light' ? '🌙' : '☀️'}
    </Button>
  );
};

// Molecule component
const UserProfile = () => {
  const { name, setName } = useUser();
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="name">Name</Label>
      <Input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <ThemeToggle />
    </div>
  );
};
```

## 6. Immutable State Updates

All state updates create new state objects:

- **Predictable**: State changes are explicit and traceable
- **Pure Functions**: Update logic is pure and testable
- **Time-Travel Debugging**: State history can be tracked
- **Optimized Rendering**: React can efficiently determine what changed

## 7. Functional Programming Principles

The pattern embraces functional programming concepts:

- **Pure Functions**: No side effects in state transition logic
- **Immutability**: State is never mutated directly
- **Composition**: Complex behavior through function composition
- **Higher-Order Functions**: For code reuse and abstraction

## 8. Zero Prop Drilling

Components access state directly through hooks:

- **Cleaner Components**: No need to pass props through multiple levels
- **Flexible Refactoring**: Components can be moved without rewiring props
- **Performance**: Avoid unnecessary re-renders from prop changes
- **Simplicity**: Component API remains clean regardless of state needs

## How These Concepts Work Together

1. **Define Schema**: Start by defining your state structure and initial values
2. **Create Atoms/Selectors**: Set up Recoil atoms based on your schema
3. **Define Events**: Create events that describe all possible state changes
4. **Build Custom Hooks**: Expose state and event dispatchers through hooks
5. **Create Components**: Build UI components that use the hooks
6. **Compose Application**: Assemble components following atomic design

This approach creates a highly maintainable architecture with clear boundaries, predictable state management, and loosely coupled components that can be tested in isolation.
