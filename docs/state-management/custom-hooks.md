# Custom Hooks

Custom hooks are a critical part of the Quantum Reactor Pattern, providing a clean interface between components and state management. They help eliminate prop drilling and keep components focused on UI concerns.

## Purpose of Custom Hooks

In the Quantum Reactor Pattern, custom hooks:

1. **Abstract State Access**: Provide a simple interface to access complex state
2. **Encapsulate Event Dispatching**: Package event dispatchers into meaningful actions
3. **Combine Related Functionality**: Group related state and actions together
4. **Prevent Prop Drilling**: Allow any component to access needed state directly
5. **Enhance Reusability**: Share logic across multiple components

## Basic Custom Hook Structure

A typical Quantum Reactor hook combines state access (via Recoil) with event dispatching:

```typescript
// hooks/useUser.ts
import { useRecoilValue } from 'recoil';
import { userStateAtom } from '../quantum/atoms/userAtoms';
import { userThemeSelector } from '../quantum/selectors/userSelectors';
import { useUserEvents } from '../quantum/events/userEvents';

export const useUser = () => {
  // Get state from atoms and selectors
  const userState = useRecoilValue(userStateAtom);
  const theme = useRecoilValue(userThemeSelector);

  // Get event dispatcher
  const dispatch = useUserEvents();

  // Return a clean API that components can use
  return {
    // State values
    id: userState.id,
    name: userState.name,
    email: userState.email,
    theme,
    isAuthenticated: !!userState.id,

    // Actions (events wrapped in meaningful function names)
    setName: (name: string) => dispatch({ type: 'SET_NAME', payload: name }),
    setEmail: (email: string) => dispatch({ type: 'SET_EMAIL', payload: email }),
    toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }),
    logout: () => dispatch({ type: 'LOG_OUT' }),
  };
};
```

## Custom Hook Naming Conventions

- Prefix with `use` to follow React conventions
- Name based on the domain (e.g., `useUser`, `useCart`, `useProducts`)
- Keep names concise but descriptive

## Organizing Custom Hooks

Group related hooks by domain:

```
/hooks
  /user
    useUser.ts          // Core user hook
    useUserProfile.ts   // User profile specific functionality
    useUserSettings.ts  // User settings functionality
  /products
    useProducts.ts      // Products listing
    useProductSearch.ts // Search functionality
    useProductFilter.ts // Filter functionality
  /cart
    useCart.ts          // Shopping cart
    useCheckout.ts      // Checkout process
  /ui
    useToast.ts         // Notifications/toasts
    useModal.ts         // Modal management
    useTheme.ts         // Theme management
```

For simpler applications, a flat structure works well:

```
/hooks
  useUser.ts
  useProducts.ts
  useCart.ts
  useUI.ts
```

## Advanced Hook Patterns

### Composing Hooks

Build complex hooks by composing simpler ones:

```typescript
// hooks/useUserProfile.ts
import { useUser } from './useUser';
import { useUserActivity } from './useUserActivity';

export const useUserProfile = () => {
  const user = useUser();
  const activity = useUserActivity(user.id);

  return {
    ...user,
    activity: activity.recentActivities,
    lastActive: activity.lastActiveTime,
    isActive: activity.isCurrentlyActive,
  };
};
```

### Hooks with Parameters

Create hooks that accept parameters:

```typescript
// hooks/useProduct.ts
import { useRecoilValue } from 'recoil';
import { productByIdSelector } from '../quantum/selectors/productSelectors';
import { useProductEvents } from '../quantum/events/productEvents';

export const useProduct = (productId: string) => {
  // Get product by ID using a parameterized selector
  const product = useRecoilValue(productByIdSelector(productId));
  const dispatch = useProductEvents();

  return {
    // Product data
    product,
    isLoading: !product,

    // Actions
    updateQuantity: (quantity: number) =>
      dispatch({ type: 'UPDATE_PRODUCT_QUANTITY', payload: { id: productId, quantity } }),
    addToCart: () =>
      dispatch({ type: 'ADD_TO_CART', payload: { productId } }),
  };
};
```

### Hooks with Local State

Combine Recoil state with local React state when appropriate:

```typescript
// hooks/useProductForm.ts
import { useState } from 'react';
import { useProductEvents } from '../quantum/events/productEvents';

export const useProductForm = (initialProduct = null) => {
  // Local form state
  const [formState, setFormState] = useState({
    name: initialProduct?.name || '',
    price: initialProduct?.price || '',
    description: initialProduct?.description || '',
    errors: {
      name: '',
      price: '',
      description: '',
    }
  });

  // Global state interaction
  const dispatch = useProductEvents();

  // Form change handlers
  const handleNameChange = (name: string) => {
    setFormState(prev => ({
      ...prev,
      name,
      errors: {
        ...prev.errors,
        name: name.length < 3 ? 'Name must be at least 3 characters' : '',
      }
    }));
  };

  const handlePriceChange = (priceStr: string) => {
    const price = parseFloat(priceStr);
    setFormState(prev => ({
      ...prev,
      price: priceStr,
      errors: {
        ...prev.errors,
        price: isNaN(price) || price <= 0 ? 'Price must be a positive number' : '',
      }
    }));
  };

  // Form submission
  const handleSubmit = () => {
    // Validate all fields
    const nameError = formState.name.length < 3 ? 'Name must be at least 3 characters' : '';
    const price = parseFloat(formState.price);
    const priceError = isNaN(price) || price <= 0 ? 'Price must be a positive number' : '';

    // Update errors
    const errors = {
      name: nameError,
      price: priceError,
      description: '',
    };

    // Check if there are any errors
    if (nameError || priceError) {
      setFormState(prev => ({ ...prev, errors }));
      return;
    }

    // Dispatch event to save product
    dispatch({
      type: initialProduct ? 'UPDATE_PRODUCT' : 'CREATE_PRODUCT',
      payload: {
        id: initialProduct?.id,
        name: formState.name,
        price,
        description: formState.description,
      }
    });
  };

  return {
    // Form state
    formState,

    // Handlers
    handleNameChange,
    handlePriceChange,
    handleDescriptionChange: (description: string) =>
      setFormState(prev => ({ ...prev, description })),
    handleSubmit,

    // Utilities
    isValid: !formState.errors.name && !formState.errors.price && !formState.errors.description,
    resetForm: () => setFormState({
      name: '',
      price: '',
      description: '',
      errors: { name: '', price: '', description: '' }
    }),
  };
};
```

### Async Hooks

Handle asynchronous operations within hooks:

```typescript
// hooks/useUserAuth.ts
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { authStateAtom } from '../quantum/atoms/authAtoms';
import { useAuthEvents } from '../quantum/events/authEvents';

export const useUserAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const authState = useRecoilValue(authStateAtom);
  const dispatch = useAuthEvents();

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      await dispatch({ type: 'LOGIN', payload: { email, password } });
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    setError(null);

    try {
      await dispatch({ type: 'REGISTER', payload: { email, password, name } });
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return {
    user: authState.user,
    isAuthenticated: !!authState.user,
    isLoading,
    error,
    login,
    register,
    logout,
    clearError: () => setError(null),
  };
};
```

### Memoization in Hooks

Use memoization to prevent unnecessary recalculations:

```typescript
// hooks/useFilteredProducts.ts
import { useRecoilValue } from 'recoil';
import { useMemo } from 'react';
import { productsStateAtom } from '../quantum/atoms/productAtoms';
import { filterStateAtom } from '../quantum/atoms/filterAtoms';

export const useFilteredProducts = () => {
  const products = useRecoilValue(productsStateAtom);
  const filter = useRecoilValue(filterStateAtom);

  // Memoize filtered products to avoid recalculation on every render
  const filteredProducts = useMemo(() => {
    if (!filter.active) return products;

    return products.filter(product => {
      // Apply category filter
      if (filter.category && product.category !== filter.category) {
        return false;
      }

      // Apply price range filter
      if (filter.minPrice && product.price < filter.minPrice) {
        return false;
      }
      if (filter.maxPrice && product.price > filter.maxPrice) {
        return false;
      }

      // Apply search term
      if (filter.searchTerm && !product.name.toLowerCase().includes(filter.searchTerm.toLowerCase())) {
        return false;
      }

      return true;
    });
  }, [products, filter]);

  return {
    products: filteredProducts,
    totalCount: products.length,
    filteredCount: filteredProducts.length,
    isFiltered: filter.active,
  };
};
```

## Hook Testing

Test your custom hooks to ensure they work correctly:

```typescript
// __tests__/hooks/useUser.test.tsx
import { renderHook, act } from '@testing-library/react-hooks';
import { RecoilRoot } from 'recoil';
import { useUser } from '../../hooks/useUser';
import { userStateAtom } from '../../quantum/atoms/userAtoms';

describe('useUser hook', () => {
  test('should return user state and actions', () => {
    const wrapper = ({ children }) => (
      <RecoilRoot initializeState={({ set }) => {
        set(userStateAtom, {
          id: '123',
          name: 'Test User',
          email: 'test@example.com',
          preferences: {
            theme: 'light',
            notifications: true,
          },
        });
      }}>
        {children}
      </RecoilRoot>
    );

    const { result } = renderHook(() => useUser(), { wrapper });

    // Check initial state
    expect(result.current.id).toBe('123');
    expect(result.current.name).toBe('Test User');
    expect(result.current.theme).toBe('light');
    expect(result.current.isAuthenticated).toBe(true);

    // Test action
    act(() => {
      result.current.setName('New Name');
    });

    // Check updated state
    expect(result.current.name).toBe('New Name');
  });
});
```

## Using Hooks in Components

With custom hooks, components become very simple:

```tsx
// components/organisms/UserProfileForm.tsx
import { useUser } from '../../hooks/useUser';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';

export const UserProfileForm = () => {
  const { name, email, setName, setEmail } = useUser();

  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <Button type="submit">Save Profile</Button>
    </form>
  );
};
```

## Custom Hook Best Practices

1. **Keep hooks focused**: Each hook should serve a specific purpose
2. **Return only what's needed**: Avoid exposing unnecessary state or functions
3. **Use consistent naming**: Follow a naming pattern for all similar hooks
4. **Document return values**: Add JSDoc comments for complex hooks
5. **Handle errors gracefully**: Add error handling for async operations
6. **Memoize expensive calculations**: Use `useMemo` for computationally intensive operations
7. **Keep hooks pure**: Avoid side effects (except in dedicated async methods)

```typescript
/**
 * Hook for managing shopping cart functionality
 * @returns Object with cart state and methods to modify it
 */
export const useCart = () => {
  // Implementation...

  return {
    /** Current items in the cart */
    items,
    /** Total number of items in cart */
    itemCount,
    /** Total price of all items */
    total,
    /** Whether the cart is empty */
    isEmpty,

    /** Add a product to the cart */
    addItem: (productId: string, quantity = 1) => { /* ... */ },
    /** Remove a product from the cart */
    removeItem: (itemId: string) => { /* ... */ },
    /** Update item quantity */
    updateQuantity: (itemId: string, quantity: number) => { /* ... */ },
    /** Clear all items from cart */
    clearCart: () => { /* ... */ },
  };
};
```

By carefully designing your custom hooks, you create a seamless interface between your state management layer and your UI components, making your code more maintainable and your components simpler and more focused.
