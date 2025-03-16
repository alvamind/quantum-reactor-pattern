# Testing

Testing is an important part of developing robust and maintainable applications. The Quantum Reactor Pattern provides a clear structure that makes testing easier.

## Unit Testing

Unit tests should be written for individual components, hooks, and event handlers.

### Component Testing

Components should be tested to ensure that they render correctly and respond to user interactions.

```typescript
// __tests__/components/Button.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../components/Button';

test('renders a button with the correct text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});

test('calls the onClick handler when clicked', () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>Click me</Button>);
  fireEvent.click(screen.getByText('Click me'));
  expect(onClick).toHaveBeenCalled();
});
```

### Hook Testing

Hooks should be tested to ensure that they return the correct state and dispatch the correct events.

```typescript
// __tests__/hooks/useCart.test.ts
import { renderHook, act } from '@testing-library/react-hooks';
import { useCart } from '../../hooks/useCart';

test('returns the correct cart state', () => {
  const { result } = renderHook(() => useCart());
  expect(result.current.cartState).toBeDefined();
});

test('dispatches the correct event when addToCart is called', () => {
  const { result } = renderHook(() => useCart());
  act(() => {
    result.current.addToCart('123', 1);
  });
  // ... assert that the correct event was dispatched ...
});
```

### Event Handler Testing

Event handlers should be tested to ensure that they update the state correctly.

```typescript
// __tests__/quantum/events/cartEvents.test.ts
import { renderHook, act } from '@testing-library/react-hooks';
import { useCartEvents } from '../../quantum/events/cartEvents';
import { cartStateAtom } from '../../quantum/atoms/cartStateAtom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

test('updates the cart state when ADD_TO_CART event is dispatched', () => {
  const { result } = renderHook(() => useCartEvents());
  const setCartState = useSetRecoilState(cartStateAtom);
  const cartState = useRecoilValue(cartStateAtom);

  act(() => {
    result.current({ type: 'ADD_TO_CART', payload: { productId: '123', quantity: 1 } });
  });

  // ... assert that the cart state was updated correctly ...
});
```

## Integration Testing

Integration tests should be written to ensure that different parts of the application work together correctly.

### Component Integration Testing

Component integration tests should be written to ensure that components interact with each other correctly.

```typescript
// __tests__/components/Cart.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Cart from '../../components/Cart';
import { useCart } from '../../hooks/useCart';

jest.mock('../../hooks/useCart');

test('renders the cart with the correct items', () => {
  (useCart as jest.Mock).mockReturnValue({
    cartState: {
      items: [
        { productId: '123', quantity: 1 },
        { productId: '456', quantity: 2 },
      ],
    },
    addToCart: jest.fn(),
    removeFromCart: jest.fn(),
    updateQuantity: jest.fn(),
  });

  render(<Cart />);
  expect(screen.getByText('Product 123')).toBeInTheDocument();
  expect(screen.getByText('Product 456')).toBeInTheDocument();
});
```

### Hook Integration Testing

Hook integration tests should be written to ensure that hooks interact with each other correctly.

```typescript
// __tests__/hooks/useCartAndUser.test.ts
import { renderHook } from '@testing-library/react-hooks';
import { useCart } from '../../hooks/useCart';
import { useUser } from '../../hooks/useUser';

jest.mock('../../hooks/useCart');
jest.mock('../../hooks/useUser');

test('returns the correct cart and user state', () => {
  (useCart as jest.Mock).mockReturnValue({
    cartState: {
      items: [],
    },
  });
  (useUser as jest.Mock).mockReturnValue({
    userState: {
      isLoggedIn: false,
    },
  });

  const { result } = renderHook(() => {
    const cart = useCart();
    const user = useUser();
    return { cart, user };
  });

  expect(result.current.cart.cartState).toBeDefined();
  expect(result.current.user.userState).toBeDefined();
});
```

## End-to-End Testing

End-to-end tests should be written to ensure that the entire application works correctly.

### Cypress

Cypress is a popular end-to-end testing framework.

```javascript
// cypress/integration/cart.spec.js
describe('Cart', () => {
  it('adds an item to the cart', () => {
    cy.visit('/');
    cy.get('[data-testid="add-to-cart"]').click();
    cy.get('[data-testid="cart-item"]').should('have.length', 1);
  });
});
```

## Best Practices for Testing

*   **Write tests early and often:** Write tests before you write code, or at least as you write code.
*   **Test all code:** Aim for 100% test coverage.
*   **Write clear and concise tests:** Tests should be easy to read and understand.
*   **Use descriptive names:** Use descriptive names for tests and test cases.
*   **Keep tests isolated:** Each test should be independent of other tests.
*   **Use mocks and stubs:** Use mocks and stubs to isolate units of code and control their behavior.
*   **Test edge cases:** Test edge cases and error conditions.
*   **Automate tests:** Automate tests so that they can be run automatically on every commit.
