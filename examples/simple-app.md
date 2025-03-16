# Simple Application Example

This example demonstrates a basic counter application built with the Quantum Reactor Pattern. It showcases the fundamental concepts of the pattern in a minimal implementation.

## Application Overview

The counter application allows users to:
- View the current count
- Increment the count
- Decrement the count
- Reset the count to zero

## Directory Structure

```
/src
  /schema          # State definitions
    CounterSchema.ts
  /quantum         # State management
    /atoms
      counterAtoms.ts
    /events
      counterEvents.ts
  /components      # UI components
    /atoms
      Button.tsx
    /molecules
      Counter.tsx
    /organisms
      CounterControl.tsx
    /templates
      MainLayout.tsx
    /pages
      CounterPage.tsx
  /hooks           # Custom hooks
    useCounter.ts
  main.tsx         # Entry point
```

## Implementation

### 1. Schema

First, we define the schema for our counter state:

```typescript
// schema/CounterSchema.ts
export type CounterState = {
  count: number;
};

export const initialCounterState: CounterState = {
  count: 0,
};
```

### 2. Atoms

Next, we create the counter atom using Recoil:

```typescript
// quantum/atoms/counterAtoms.ts
import { atom } from 'recoil';
import { CounterState, initialCounterState } from '../../schema/CounterSchema';

export const counterStateAtom = atom<CounterState>({
  key: 'counterState',
  default: initialCounterState,
});
```

### 3. Events

Then, we define the events for updating the counter state:

```typescript
// quantum/events/counterEvents.ts
import { useRecoilCallback } from 'recoil';
import { counterStateAtom } from '../atoms/counterAtoms';

// Define event types
type CounterEvent = 
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' };

export const useCounterEvents = () => {
  return useRecoilCallback(({ set, snapshot }) => (event: CounterEvent) => {
    const currentState = snapshot.getLoadable(counterStateAtom).getValue();

    switch (event.type) {
      case 'INCREMENT':
        set(counterStateAtom, { ...currentState, count: currentState.count + 1 });
        break;
      case 'DECREMENT':
        set(counterStateAtom, { ...currentState, count: currentState.count - 1 });
        break;
      case 'RESET':
        set(counterStateAtom, { ...currentState, count: 0 });
        break;
      default:
        break;
    }
  }, []);
};
```

### 4. Custom Hook

We create a custom hook to access the counter state and events:

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
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' }),
  };
};
```

### 5. UI Components

Finally, we create the UI components using our atomic design approach:

```tsx
// components/molecules/Counter.tsx
import { useCounter } from '../../hooks/useCounter';
import { Button } from '../atoms/Button';

export function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-4xl font-bold">{count}</div>
      <div className="flex space-x-2">
        <Button onClick={decrement}>-</Button>
        <Button onClick={reset}>Reset</Button>
        <Button onClick={increment}>+</Button>
      </div>
    </div>
  );
}
```

## Complete Example

You can view the complete code for this example in our GitHub repository:
[Simple Counter Example](https://github.com/yourusername/quantum-reactor-pattern/tree/main/examples/counter)

## Key Benefits Demonstrated

This simple example demonstrates several key benefits of the Quantum Reactor Pattern:

1. **Clear Separation of Concerns**: State schema, state management, and UI components are all separated.
2. **Event-Driven Architecture**: All state changes occur through explicit events.
3. **No Prop Drilling**: Components access state directly through custom hooks.
4. **Atomic Design**: UI is built using a clear component hierarchy.
5. **Maintainability**: Each part of the application has a single responsibility.
