# Getting Started with Quantum Reactor Pattern

The Quantum Reactor Pattern provides a comprehensive architectural approach to building React applications that are maintainable, testable, and scalable.

## Prerequisites

- Node.js 14.0+
- npm or yarn
- Familiarity with React and TypeScript

## Create a New Project

The easiest way to get started is using our CLI tool:

```bash
# Using npm
npm create quantum-reactor-app my-app

# Using yarn
yarn create quantum-reactor-app my-app

# Using pnpm
pnpm create quantum-reactor-app my-app
```

This will set up a new project with all the necessary dependencies and the Quantum Reactor Pattern file structure.

## Manual Setup

If you prefer to set up manually or integrate into an existing project:

1. Create a new React project:

```bash
npx create-react-app my-app --template typescript
# or
yarn create react-app my-app --template typescript
```

2. Install the required dependencies:

```bash
npm install recoil tailwindcss shadcn-ui @types/uuid uuid
# or
yarn add recoil tailwindcss shadcn-ui @types/uuid uuid
```

3. Set up the project structure:

```
/src
  /schema          # State definitions
  /quantum         # State management
    /atoms         # Base state atoms
    /selectors     # Derived state
    /events        # Event definitions & handlers
  /components      # Atomic design components
    /atoms         # Basic building blocks
    /molecules     # Simple combinations
    /organisms     # Complex compositions
    /templates     # Layout structures
    /pages         # Full page compositions
  /hooks           # Custom quantum hooks
  /utils           # Pure utility functions
```

## The First Quantum Component

Let's create a simple counter component using the Quantum Reactor Pattern:

1. Create the schema:

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

2. Create the atom:

```typescript
// quantum/atoms/counterAtom.ts
import { atom } from 'recoil';
import { CounterState, initialCounterState } from '../../schema/CounterSchema';

export const counterStateAtom = atom<CounterState>({
  key: 'counterState',
  default: initialCounterState,
});
```

3. Define events:

```typescript
// quantum/events/counterEvents.ts
import { useRecoilCallback } from 'recoil';
import { counterStateAtom } from '../atoms/counterAtom';

export type CounterEvent =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' };

export const useCounterEvents = () => {
  const dispatch = useRecoilCallback(
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

  return dispatch;
};
```

4. Create a custom hook:

```typescript
// hooks/useCounter.ts
import { useRecoilValue } from 'recoil';
import { counterStateAtom } from '../quantum/atoms/counterAtom';
import { useCounterEvents } from '../quantum/events/counterEvents';

export const useCounter = () => {
  const { count, history } = useRecoilValue(counterStateAtom);
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

5. Create a Counter component:

```tsx
// components/molecules/Counter.tsx
import { useCounter } from '../../hooks/useCounter';
import { Button } from '@/components/ui/button'; // shadcn component

export const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg">
      <h2 className="text-2xl font-bold">{count}</h2>
      <div className="flex gap-2">
        <Button onClick={decrement}>-</Button>
        <Button onClick={reset} variant="outline">Reset</Button>
        <Button onClick={increment}>+</Button>
      </div>
    </div>
  );
};
```

6. Use it in your App:

```tsx
// App.tsx
import { RecoilRoot } from 'recoil';
import { Counter } from './components/molecules/Counter';

export default function App() {
  return (
    <RecoilRoot>
      <div className="min-h-screen flex items-center justify-center">
        <Counter />
      </div>
    </RecoilRoot>
  );
}
```

## Next Steps

Now that you've created your first Quantum Reactor component, continue exploring:

- Learn about [Core Concepts](/guide/core-concepts) of the pattern
- Understand the [Directory Structure](/guide/directory-structure) in detail
- Explore [Schema-First Development](/state-management/schema)
- Build more complex components using the [Atomic Design](/components/overview) principles
