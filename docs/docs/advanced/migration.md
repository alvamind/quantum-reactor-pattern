# Migration Guide

This guide provides instructions for migrating existing React applications to the Quantum Reactor Pattern.

## Step 1: Define Your State Schema

The first step is to define your application state using TypeScript schemas. This involves:

1. Identifying all the pieces of state in your application
2. Defining TypeScript types or interfaces for each piece of state
3. Creating initial state objects for each schema

For example, if you have a user object in your application, you might define a `UserSchema.ts` file:

```typescript
// schema/UserSchema.ts
export type UserState = {
  id: string | null;
  name: string;
  email: string;
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
};

export const initialUserState: UserState = {
  id: null,
  name: '',
  email: '',
  preferences: {
    theme: 'light',
    notifications: true,
  },
};
```

## Step 2: Set Up Recoil Atoms

Next, you need to set up Recoil atoms for each of your schemas. This involves:

1. Installing the `recoil` library:

```bash
npm install recoil
# or
yarn add recoil
```

2. Creating atom files for each schema:

```typescript
// quantum/atoms/userAtoms.ts
import { atom } from 'recoil';
import { UserState, initialUserState } from '../../schema/UserSchema';

export const userStateAtom = atom<UserState>({
  key: 'userState',
  default: initialUserState,
});
```

## Step 3: Implement Event Handlers

Now you need to implement event handlers for all the state transitions in your application. This involves:

1. Defining event types for each state transition
2. Creating event handlers using `useRecoilCallback`

For example, you might define event handlers for updating the user's name and toggling the theme:

```typescript
// quantum/events/userEvents.ts
import { useRecoilCallback } from 'recoil';
import { userStateAtom } from '../atoms/userAtoms';

export type UserEvent =
  | { type: 'SET_NAME'; payload: string }
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

## Step 4: Create Custom Hooks

Next, you need to create custom hooks for accessing state and dispatching events. This involves:

1. Creating hook files for each domain
2. Using `useRecoilValue` to access state from atoms and selectors
3. Using `useUserEvents` (or similar) to dispatch events

For example, you might create a `useUser` hook:

```typescript
// hooks/useUser.ts
import { useRecoilValue } from 'recoil';
import { userStateAtom } from '../quantum/atoms/userAtoms';
import { useUserEvents } from '../quantum/events/userEvents';

export const useUser = () => {
  const userState = useRecoilValue(userStateAtom);
  const dispatch = useUserEvents();

  return {
    name: userState.name,
    theme: userState.preferences.theme,
    setName: (name: string) => dispatch({ type: 'SET_NAME', payload: name }),
    toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }),
  };
};
```

## Step 5: Update Components

Now you need to update your components to use the custom hooks for accessing state and dispatching events. This involves:

1. Removing any prop drilling for state
2. Replacing direct state mutations with event dispatches
3. Using the custom hooks to access state and dispatch events

For example, you might update a `UserProfile` component:

```tsx
// components/molecules/UserProfile.tsx
import { useUser } from '../../hooks/useUser';

export const UserProfile = () => {
  const { name, setName, theme, toggleTheme } = useUser();

  return (
    <div>
      <h1>{name}</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
```

## Step 6: Organize Components

Finally, you should organize your components following the atomic design methodology. This involves:

1. Identifying atoms, molecules, organisms, templates, and pages
2. Moving components to the appropriate directories
3. Ensuring that components are reusable and composable

## Example Migration

Let's say you have a simple counter component that uses `useState`:

```tsx
// components/Counter.tsx
import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

To migrate this component to the Quantum Reactor Pattern, you would:

1. Define a schema:

```typescript
// schema/CounterSchema.ts
export type CounterState = {
  count: number;
};

export const initialCounterState: CounterState = {
  count: 0,
};
```

2. Set up a Recoil atom:

```typescript
// quantum/atoms/counterAtoms.ts
import { atom } from 'recoil';
import { CounterState, initialCounterState } from '../../schema/CounterSchema';

export const counterStateAtom = atom<CounterState>({
  key: 'counterState',
  default: initialCounterState,
});
```

3. Implement event handlers:

```typescript
// quantum/events/counterEvents.ts
import { useRecoilCallback } from 'recoil';
import { counterStateAtom } from '../atoms/counterAtoms';

export type CounterEvent = { type: 'INCREMENT' };

export const useCounterEvents = () => {
  const dispatch = useRecoilCallback(
    ({ set, snapshot }) => async (event: CounterEvent) => {
      const currentState = await snapshot.getPromise(counterStateAtom);

      switch (event.type) {
        case 'INCREMENT':
          set(counterStateAtom, {
            ...currentState,
            count: currentState.count + 1,
          });
          break;
      }
    },
    []
  );

  return dispatch;
};
```

4. Create a custom hook:

```typescript
// hooks/useCounter.ts
import { useRecoilValue } from 'recoil';
import { counterStateAtom } from '../quantum/atoms/counterAtoms';
import { useCounterEvents } from '../quantum/events/counterEvents';

export const useCounter = () => {
  const counterState = useRecoilValue(counterStateAtom);
  const dispatch = useCounterEvents();

  return {
    count: counterState.count,
    increment: () => dispatch({ type: 'INCREMENT' }),
  };
};
```

5. Update the component:

```tsx
// components/molecules/Counter.tsx
import { useCounter } from '../../hooks/useCounter';

export const Counter = () => {
  const { count, increment } = useCounter();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```

## Best Practices

- Migrate one piece of state at a time
- Test each step thoroughly
- Follow the directory structure and naming conventions
- Use atomic design for component organization
- Embrace event-driven state management

By following these steps, you can successfully migrate your existing React applications to the Quantum Reactor Pattern and take advantage of its many benefits.
