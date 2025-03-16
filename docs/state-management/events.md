# Event-Driven State Management

The Quantum Reactor Pattern uses an event-driven approach to state management, where state transitions happen through well-defined events rather than direct state mutations.

## What Are Events?

Events are objects that describe state changes. Each event:

- Has a specific `type` that identifies what kind of change should occur
- May include a `payload` containing data needed for the change
- Is processed by event handlers that update state atoms accordingly

This approach provides several benefits:

- **Predictable State Changes**: All state updates follow a clear pattern
- **Separation of Concerns**: UI components trigger events, event handlers update state
- **Testability**: Events and their handlers can be tested in isolation
- **Auditability**: Event history can be logged for debugging
- **Centralized Logic**: Update logic is centralized, not spread across components

## Defining Events

Events are typically defined using TypeScript discriminated unions:

```typescript
// quantum/events/userEvents.ts
export type UserEvent =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'TOGGLE_THEME' }
  | { type: 'TOGGLE_NOTIFICATION_PREFERENCE'; payload: { type: 'email' | 'push' } }
  | { type: 'LOG_OUT' };
```

## Creating Event Handlers

Event handlers are created using Recoil's `useRecoilCallback` hook:

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
            profile: {
              ...currentState.profile,
              name: event.payload
            }
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

## Organizing Event Handlers

Organize event handlers by domain, mirroring atom organization:

```
/quantum
  /events
    userEvents.ts      // User-related events
    productEvents.ts   // Product-related events
    cartEvents.ts      // Shopping cart events
    uiEvents.ts        // UI state events
```

## Event Naming Conventions

- Use UPPER_SNAKE_CASE for event types
- Use clear, action-oriented names (e.g., `ADD_TO_CART`, not `CART_UPDATED`)
- Be specific about what is changing

## Using Events in Components

Components never directly manipulate state. Instead, they dispatch events:

```tsx
// components/molecules/UserNameInput.tsx
import { useUser } from '../../hooks/useUser';

export const UserNameInput = () => {
  const { name, setName } = useUser();

  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
```

The `setName` function comes from a custom hook that wraps the event dispatcher:

```typescript
// hooks/useUser.ts
import { useRecoilValue } from 'recoil';
import { userStateAtom } from '../quantum/atoms/userAtoms';
import { useUserEvents } from '../quantum/events/userEvents';

export const useUser = () => {
  const userState = useRecoilValue(userStateAtom);
  const dispatch = useUserEvents();

  return {
    name: userState.profile.name,
    email: userState.profile.email,
    theme: userState.preferences.theme,

    setName: (name: string) => dispatch({ type: 'SET_NAME', payload: name }),
    setEmail: (email: string) => dispatch({ type: 'SET_EMAIL', payload: email }),
    toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }),
  };
};
```

## Advanced Event Patterns

### Event Middleware

You can add middleware to your event handling for cross-cutting concerns like logging:

```typescript
// quantum/events/middleware/loggerMiddleware.ts
import { UserEvent } from '../userEvents';
import { ProductEvent } from '../productEvents';
import { CartEvent } from '../cartEvents';

type AppEvent = UserEvent | ProductEvent | CartEvent;

export const createLoggerMiddleware = (dispatch: (event: AppEvent) => void) => {
  return (event: AppEvent) => {
    console.log('Event dispatched:', event);
    dispatch(event);
  };
};

// Usage in a custom hook
export const useEventDispatch = () => {
  const userDispatch = useUserEvents();
  const productDispatch = useProductEvents();
  const cartDispatch = useCartEvents();

  // Combined dispatcher with logging
  const dispatch = useCallback((event: AppEvent) => {
    console.log('Event dispatched:', event);

    if (isUserEvent(event)) userDispatch(event);
    else if (isProductEvent(event)) productDispatch(event);
    else if (isCartEvent(event)) cartDispatch(event);
  }, [userDispatch, productDispatch, cartDispatch]);

  return dispatch;
};
```

### Asynchronous Events

Handle asynchronous operations within event handlers:

```typescript
// quantum/events/userEvents.ts
export type UserEvent =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'FETCH_USER_PROFILE'; payload: string }
  | { type: 'USER_PROFILE_LOADED'; payload: UserProfile }
  | { type: 'USER_PROFILE_ERROR'; payload: string };

export const useUserEvents = () => {
  const dispatch = useRecoilCallback(
    ({ set, snapshot }) => async (event: UserEvent) => {
      const currentState = await snapshot.getPromise(userStateAtom);

      switch (event.type) {
        case 'SET_NAME':
          set(userStateAtom, {
            ...currentState,
            profile: {
              ...currentState.profile,
              name: event.payload
            }
          });
          break;

        case 'FETCH_USER_PROFILE':
          set(userStateAtom, {
            ...currentState,
            status: 'loading',
            error: null
          });

          try {
            const userProfile = await fetchUserProfile(event.payload);
            dispatch({ type: 'USER_PROFILE_LOADED', payload: userProfile });
          } catch (error) {
            dispatch({ type: 'USER_PROFILE_ERROR', payload: error.message });
          }
          break;

        case 'USER_PROFILE_LOADED':
          set(userStateAtom, {
            profile: event.payload,
            status: 'authenticated',
            error: null,
            preferences: currentState.preferences
          });
          break;

        case 'USER_PROFILE_ERROR':
          set(userStateAtom, {
            ...currentState,
            status: 'error',
            error: event.payload
          });
          break;
      }
    },
    []
  );

  return dispatch;
};
```

### Event Composition

Events can trigger other events for more complex flows:

```typescript
case 'CHECKOUT_COMPLETE':
  // Update cart state
  set(cartStateAtom, {
    ...currentCartState,
    items: [],
    status: 'idle',
  });

  // Add order to order history
  const orderDispatch = orderEventsRef.current;
  orderDispatch({
    type: 'ADD_ORDER',
    payload: {
      orderId: event.payload.orderId,
      items: currentCartState.items,
      total: event.payload.total,
      date: new Date().toISOString(),
    }
  });

  // Show notification
  const uiDispatch = uiEventsRef.current;
  uiDispatch({
    type: 'SHOW_NOTIFICATION',
    payload: {
      type: 'success',
      message: `Order #${event.payload.orderId} placed successfully!`,
      duration: 5000,
    }
  });
  break;
```

### Event Validation

Validate events before processing them:

```typescript
// quantum/events/validation/validateUserEvent.ts
import { z } from 'zod';
import { UserEvent } from '../userEvents';

// Zod schemas for each event type
const setNameSchema = z.object({
  type: z.literal('SET_NAME'),
  payload: z.string().min(1).max(100),
});

const toggleThemeSchema = z.object({
  type: z.literal('TOGGLE_THEME'),
});

// Combined schema for all event types
const userEventSchema = z.discriminatedUnion('type', [
  setNameSchema,
  toggleThemeSchema,
]);

export const validateUserEvent = (event: UserEvent): UserEvent => {
  return userEventSchema.parse(event);
};

// Usage in event handler
export const useUserEvents = () => {
  const dispatch = useRecoilCallback(
    ({ set, snapshot }) => async (event: UserEvent) => {
      try {
        // Validate event before processing
        const validatedEvent = validateUserEvent(event);

        const currentState = await snapshot.getPromise(userStateAtom);

        switch (validatedEvent.type) {
          // Handle events...
        }
      } catch (error) {
        console.error('Invalid event:', event, error);
      }
    },
    []
  );

  return dispatch;
};
```

## Testing Events

Test your event handlers to ensure they update state correctly:

```typescript
// __tests__/quantum/events/userEvents.test.ts
import { renderHook, act } from '@testing-library/react-hooks';
import { RecoilRoot, snapshot_UNSTABLE } from 'recoil';
import { useUserEvents } from '../../../quantum/events/userEvents';
import { userStateAtom } from '../../../quantum/atoms/userAtoms';

describe('userEvents', () => {
  test('SET_NAME event should update user name', async () => {
    // Set up initial state
    const initialSnapshot = snapshot_UNSTABLE(({ set }) => {
      set(userStateAtom, {
        profile: {
          name: 'Initial Name',
          email: 'test@example.com',
        },
        preferences: {
          theme: 'light',
        },
        status: 'authenticated',
        error: null,
      });
    });

    // Render the hook
    const { result } = renderHook(() => useUserEvents(), {
      wrapper: ({ children }) => (
        <RecoilRoot initializeState={({ set }) => {
          set(userStateAtom, initialSnapshot.getLoadable(userStateAtom).getValue());
        }}>
          {children}
        </RecoilRoot>
      ),
    });

    // Dispatch the event
    act(() => {
      result.current({ type: 'SET_NAME', payload: 'New Name' });
    });

    // Check that state was updated correctly
    const newSnapshot = snapshot_UNSTABLE();
    const newState = newSnapshot.getLoadable(userStateAtom).getValue();

    expect(newState.profile.name).toBe('New Name');
    expect(newState.profile.email).toBe('test@example.com'); // Unchanged
    expect(newState.preferences.theme).toBe('light'); // Unchanged
  });
});
```

By embracing event-driven state management, the Quantum Reactor Pattern creates a clean separation between UI components and state logic, making your application more predictable, testable, and maintainable.
