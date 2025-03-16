# Atoms and Selectors

The Quantum Reactor Pattern uses Recoil's atoms and selectors to manage application state in a way that's both globally accessible and efficiently updated.

## Atoms: The Source of Truth

Atoms are the primary units of state in a Quantum Reactor application. They represent the source of truth for a particular slice of state.

### Creating Atoms

Atoms are created based on the schema definitions:

```typescript
// quantum/atoms/userAtoms.ts
import { atom } from 'recoil';
import { UserState, initialUserState } from '../../schema/UserSchema';

export const userStateAtom = atom<UserState>({
  key: 'userState',
  default: initialUserState,
});
```

The `key` must be unique across your entire application, and the `default` value should match the initial state from your schema.

### Atom Naming Conventions

- Use camelCase for atom variables
- Suffix with "Atom" or "StateAtom"
- Name based on the state domain (e.g., `userStateAtom`, `cartAtom`)

### Organizing Atoms

Group related atoms in domain-specific files:

```
/quantum
  /atoms
    userAtoms.ts      // User-related atoms
    productAtoms.ts   // Product-related atoms
    cartAtoms.ts      // Shopping cart atoms
    uiAtoms.ts        // UI state atoms
```

### Atom Best Practices

#### Granular vs. Coarse-Grained Atoms

You can choose between fine-grained atoms (one atom per field) or coarse-grained atoms (one atom for a logical state group):

```typescript
// Fine-grained approach
export const userNameAtom = atom<string>({
  key: 'userName',
  default: '',
});

export const userEmailAtom = atom<string>({
  key: 'userEmail',
  default: '',
});

// Coarse-grained approach (preferred for Quantum Reactor)
export const userStateAtom = atom<UserState>({
  key: 'userState',
  default: initialUserState,
});
```

For the Quantum Reactor Pattern, we generally prefer the coarse-grained approach, as it:

- Better aligns with the schema-first methodology
- Makes event-driven updates more straightforward
- Reduces atom key management
- Works better for complex nested state

#### Atom Persistence

For persisting atoms (e.g., to localStorage), use Recoil's effects:

```typescript
// Persistent atom example
import { atom } from 'recoil';
import { UserState, initialUserState } from '../../schema/UserSchema';

const localStorageEffect = key => ({setSelf, onSet}) => {
  // Load saved value from storage on initialization
  const savedValue = localStorage.getItem(key);
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }

  // Save to storage on change
  onSet((newValue, _, isReset) => {
    isReset
      ? localStorage.removeItem(key)
      : localStorage.setItem(key, JSON.stringify(newValue));
  });
};

export const userStateAtom = atom<UserState>({
  key: 'userState',
  default: initialUserState,
  effects: [
    localStorageEffect('user_state')
  ]
});
```

## Selectors: Derived State

Selectors compute derived state based on atoms or other selectors. They're perfect for:

- Calculating values based on atom state
- Filtering or transforming data
- Combining data from multiple atoms
- Abstracting complex state derivations

### Creating Selectors

```typescript
// quantum/selectors/userSelectors.ts
import { selector } from 'recoil';
import { userStateAtom } from '../atoms/userAtoms';

// Derive the user's full name
export const userFullNameSelector = selector({
  key: 'userFullName',
  get: ({ get }) => {
    const userState = get(userStateAtom);
    return `${userState.profile.firstName} ${userState.profile.lastName}`.trim();
  },
});

// Derive the user's theme
export const userThemeSelector = selector({
  key: 'userTheme',
  get: ({ get }) => {
    const userState = get(userStateAtom);
    return userState.preferences.theme;
  },
});
```

### Selector Naming Conventions

- Use camelCase for selector variables
- Suffix with "Selector"
- Name based on what is being selected/computed

### Organizing Selectors

Group related selectors in domain-specific files, mirroring the atom structure:

```
/quantum
  /selectors
    userSelectors.ts      // User-related selectors
    productSelectors.ts   // Product-related selectors
    cartSelectors.ts      // Shopping cart selectors
```

### Advanced Selector Patterns

#### Parameterized Selectors

Create selectors that accept parameters using Recoil's `selectorFamily`:

```typescript
// quantum/selectors/productSelectors.ts
import { selectorFamily } from 'recoil';
import { productsStateAtom } from '../atoms/productAtoms';

export const productByIdSelector = selectorFamily({
  key: 'productById',
  get: (productId: string) => ({ get }) => {
    const productsState = get(productsStateAtom);
    return productsState.products.find(product => product.id === productId) || null;
  },
});

// Usage
const product = useRecoilValue(productByIdSelector('product-123'));
```

#### Async Selectors

Fetch data asynchronously within selectors:

```typescript
// quantum/selectors/productSelectors.ts
import { selector } from 'recoil';
import { productFilterAtom } from '../atoms/productAtoms';
import { fetchProducts } from '../../lib/api/products';

export const filteredProductsSelector = selector({
  key: 'filteredProducts',
  get: async ({ get }) => {
    const filter = get(productFilterAtom);

    try {
      const products = await fetchProducts(filter);
      return {
        status: 'success',
        data: products,
        error: null
      };
    } catch (error) {
      return {
        status: 'error',
        data: [],
        error: error.message
      };
    }
  }
});
```

#### Writable Selectors

Create selectors that can be both read and written to:

```typescript
// quantum/selectors/cartSelectors.ts
import { selector } from 'recoil';
import { cartStateAtom } from '../atoms/cartAtoms';

export const cartItemQuantitySelector = selector({
  key: 'cartItemQuantity',
  get: ({ get }) => {
    const cartState = get(cartStateAtom);
    return cartState.items.reduce((total, item) => total + item.quantity, 0);
  },
  // This is a convenience setter that will update the underlying atom
  set: ({ set, get }, newValue) => {
    if (typeof newValue !== 'number' || newValue < 0) return;

    const cartState = get(cartStateAtom);
    if (cartState.items.length === 0) return;

    // If the cart has only one item, adjust its quantity
    if (cartState.items.length === 1) {
      set(cartStateAtom, {
        ...cartState,
        items: [{
          ...cartState.items[0],
          quantity: newValue
        }]
      });
      return;
    }

    // Otherwise, proportionally adjust all item quantities
    const currentTotal = cartState.items.reduce((total, item) => total + item.quantity, 0);
    const ratio = newValue / currentTotal;

    set(cartStateAtom, {
      ...cartState,
      items: cartState.items.map(item => ({
        ...item,
        quantity: Math.max(1, Math.round(item.quantity * ratio))
      }))
    });
  }
});
```

### Combining Selectors with TypeScript

Use TypeScript to ensure type safety with selectors:

```typescript
// quantum/selectors/cartSelectors.ts
import { selector } from 'recoil';
import { cartStateAtom } from '../atoms/cartAtoms';
import { CartItem } from '../../schema/CartSchema';

interface CartSummary {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  itemCount: number;
}

export const cartSummarySelector = selector<CartSummary>({
  key: 'cartSummary',
  get: ({ get }) => {
    const cartState = get(cartStateAtom);

    const subtotal = cartState.items.reduce(
      (sum, item) => sum + (item.price * item.quantity),
      0
    );

    const tax = subtotal * cartState.taxRate;
    const shipping = cartState.shippingCost;

    return {
      subtotal,
      tax,
      shipping,
      total: subtotal + tax + shipping,
      itemCount: cartState.items.reduce((count, item) => count + item.quantity, 0)
    };
  },
});
```

## Using Atoms and Selectors with Event-Driven Updates

In the Quantum Reactor Pattern, direct updates to atoms are generally done through event handlers, not in components:

```typescript
// ❌ Avoid direct atom updates in components
const MyComponent = () => {
  const [userState, setUserState] = useRecoilState(userStateAtom);

  return (
    <button onClick={() => setUserState({
      ...userState,
      preferences: {
        ...userState.preferences,
        theme: userState.preferences.theme === 'light' ? 'dark' : 'light'
      }
    })}>
      Toggle Theme
    </button>
  );
};

// ✅ Use event-driven updates instead
const MyComponent = () => {
  const dispatch = useUserEvents();

  return (
    <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
      Toggle Theme
    </button>
  );
};
```

This approach centralizes state update logic and makes it more testable and maintainable.

## Testing Atoms and Selectors

Test your atoms and selectors to ensure they behave as expected:

```typescript
// __tests__/quantum/selectors/userSelectors.test.ts
import { snapshot_UNSTABLE } from 'recoil';
import { userStateAtom } from '../../../quantum/atoms/userAtoms';
import { userFullNameSelector } from '../../../quantum/selectors/userSelectors';

describe('userSelectors', () => {
  test('userFullNameSelector should derive full name correctly', () => {
    const testSnapshot = snapshot_UNSTABLE(({ set }) => {
      set(userStateAtom, {
        profile: {
          id: '123',
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com',
          avatar: null,
        },
        preferences: {
          theme: 'light',
          emailNotifications: true,
          pushNotifications: false,
        },
        status: 'authenticated',
        error: null,
      });
    });

    expect(testSnapshot.getLoadable(userFullNameSelector).getValue()).toBe('John Doe');
  });
});
```

By carefully designing your atoms and selectors, you create a state management foundation that is both powerful and maintainable, enabling the rest of the Quantum Reactor Pattern to work effectively.
