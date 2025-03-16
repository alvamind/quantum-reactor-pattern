# AI Development Instructions for Quantum Reactor Pattern

This guide provides concise instructions for AI assistants to help you develop applications following the Quantum Reactor Pattern.

## Universal Instruction Set

Share this instruction set with AI tools when developing with the Quantum Reactor Pattern:

```js
I'm developing a React application using the Quantum Reactor Pattern. Please follow these guidelines:

1. PROJECT STRUCTURE:
   /src
     /schema         # TypeScript state definitions
     /quantum
       /atoms        # Recoil atoms
       /selectors    # Derived state
       /events       # Event handlers
     /hooks          # Custom state access hooks
     /components
       /atoms        # Basic UI elements
       /molecules    # Simple component combinations
       /organisms    # Complex component compositions
       /templates    # Page layouts
       /pages        # Full pages

2. SCHEMA-FIRST: Define TypeScript schemas before implementation
   Example schema definition:
   
   // schema/TodoSchema.ts
   export type TodoItem = {
     id: string;
     text: string;
     completed: boolean;
   };

   export type TodoState = {
     items: TodoItem[];
     filter: 'all' | 'active' | 'completed';
   };

   export const initialTodoState: TodoState = {
     items: [],
     filter: 'all',
   };

3. ATOMS & SELECTORS: Use Recoil for state management
   - Atoms: camelCase with "Atom" suffix (userStateAtom)
   - Selectors: camelCase with "Selector" suffix (filteredTodosSelector)
   
4. EVENT-DRIVEN UPDATES: All state changes through events
   - Define events as discriminated unions with UPPER_SNAKE_CASE types
   - Implement handlers with useRecoilCallback
   - Make immutable updates

5. CUSTOM HOOKS: Create domain-specific hooks for state access
   - Prefix with "use" (useCart, useUser)
   - Return both state values and action functions
   - Prevent prop drilling

6. ATOMIC DESIGN: Organize components by complexity level
   - Keep components pure and focused on presentation
   - Use TypeScript for props
   - Use shadcn and Tailwind for styling
```

## Example Implementation

Here's a complete mini-example showing all pattern layers:

### 1. Schema Definition

```typescript
// schema/CounterSchema.ts
export type CounterState = {
  count: number;
  history: number[];
};

export const initialCounterState: CounterState = {
  count: 0,
  history: []
};
```

### 2. Atoms and Selectors

```typescript
// quantum/atoms/counterAtom.ts
import { atom } from 'recoil';
import { CounterState, initialCounterState } from '../../schema/CounterSchema';

export const counterStateAtom = atom<CounterState>({
  key: 'counterState',
  default: initialCounterState,
});

// quantum/selectors/counterSelectors.ts
import { selector } from 'recoil';
import { counterStateAtom } from '../atoms/counterAtom';

export const counterHistorySelector = selector({
  key: 'counterHistory',
  get: ({ get }) => get(counterStateAtom).history,
});
```

### 3. Events and Event Handlers

```typescript
// quantum/events/counterEvents.ts
import { useRecoilCallback } from 'recoil';
import { counterStateAtom } from '../atoms/counterAtom';

export type CounterEvent =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' };

export const useCounterEvents = () => {
  return useRecoilCallback(
    ({ set, snapshot }) => async (event: CounterEvent) => {
      const currentState = await snapshot.getPromise(counterStateAtom);
      
      switch (event.type) {
        case 'INCREMENT':
          set(counterStateAtom, {
            count: currentState.count + 1,
            history: [...currentState.history, currentState.count]
          });
          break;
        case 'DECREMENT':
          set(counterStateAtom, {
            count: currentState.count - 1,
            history: [...currentState.history, currentState.count]
          });
          break;
        case 'RESET':
          set(counterStateAtom, {
            count: 0,
            history: [...currentState.history, currentState.count]
          });
          break;
      }
    },
    []
  );
};
```

### 4. Custom Hooks

```typescript
// hooks/useCounter.ts
import { useRecoilValue } from 'recoil';
import { counterStateAtom } from '../quantum/atoms/counterAtom';
import { counterHistorySelector } from '../quantum/selectors/counterSelectors';
import { useCounterEvents } from '../quantum/events/counterEvents';

export const useCounter = () => {
  const { count } = useRecoilValue(counterStateAtom);
  const history = useRecoilValue(counterHistorySelector);
  const dispatch = useCounterEvents();

  return {
    count,
    history,
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' }),
  };
};
```

### 5. Components (Using Atomic Design)

```tsx
// components/atoms/Button.tsx
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Button = ({ onClick, children, variant = 'primary' }: ButtonProps) => {
  const baseClasses = "px-4 py-2 rounded";
  const variantClasses = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-200 text-gray-800",
    outline: "border border-blue-500 text-blue-500"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// components/molecules/Counter.tsx
import { useCounter } from '../../hooks/useCounter';
import { Button } from '../atoms/Button';

export const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();
  
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-2xl font-bold">{count}</span>
      <div className="flex gap-2">
        <Button onClick={decrement}>-</Button>
        <Button onClick={reset} variant="outline">Reset</Button>
        <Button onClick={increment}>+</Button>
      </div>
    </div>
  );
};
```

## Implementation Request Example

When asking an AI to implement a feature, provide specific requirements like this:

```markdown
Using the Quantum Reactor Pattern, please help me implement a [feature] with:

1. Requirements:
   - [List specific requirements]

2. Please provide:
   - Schema definition
   - Atoms/selectors
   - Event handlers
   - Custom hook
   - UI components (following atomic design)

Data model:
[Describe your data model]

Existing related code (if any):
[Share relevant existing code]
```

## Key Pattern Checks

When reviewing AI-generated code, ensure:

- ✓ Schema-first approach with TypeScript typing
- ✓ Event-driven state updates (not direct atom mutations)
- ✓ Custom hooks that combine state and actions
- ✓ Components organized by atomic design principles
- ✓ No prop drilling
- ✓ Proper file organization
