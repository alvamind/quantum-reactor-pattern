# Complex Application Example

This example demonstrates how to build a more complex application using the Quantum Reactor Pattern. It showcases features like:

- Asynchronous data fetching
- User authentication
- Form handling
- Routing
- Testing

## Application Overview

The complex application is a simplified e-commerce store with the following features:

- Product listing
- Product details
- Shopping cart
- Checkout process
- User authentication (login/register)
- User profile management

## Directory Structure

The application follows the recommended directory structure:

```
/src
  /schema          # State definitions
  /quantum         # State management
  /components      # Atomic design components
  /hooks           # Custom quantum hooks
  /utils           # Pure utility functions
  /lib             # Third-party integrations
  /styles          # Global styles and theme
  /tests           # Test utilities and mocks
  App.tsx          # Root application component
  main.tsx         # Application entry point
```

## Key Components

### 1. Product Listing

- **Schema**: `ProductSchema.ts` defines the structure of a product
- **Atoms**: `productAtoms.ts` contains atoms for product data and loading state
- **Events**: `productEvents.ts` handles fetching products and updating the product list
- **Hook**: `useProducts.ts` provides access to the product list and loading state
- **Component**: `ProductList.tsx` displays the list of products

### 2. Product Details

- **Schema**: `ProductSchema.ts` defines the structure of a product
- **Atoms**: `productAtoms.ts` contains atoms for the selected product and loading state
- **Events**: `productEvents.ts` handles fetching a single product
- **Hook**: `useProduct.ts` provides access to the selected product and loading state
- **Component**: `ProductDetails.tsx` displays the details of a product

### 3. Shopping Cart

- **Schema**: `CartSchema.ts` defines the structure of the shopping cart
- **Atoms**: `cartAtoms.ts` contains atoms for the cart items and total price
- **Events**: `cartEvents.ts` handles adding, removing, and updating cart items
- **Hook**: `useCart.ts` provides access to the cart items and total price
- **Component**: `ShoppingCart.tsx` displays the items in the cart

### 4. User Authentication

- **Schema**: `AuthSchema.ts` defines the structure of the user and authentication state
- **Atoms**: `authAtoms.ts` contains atoms for the user, authentication status, and error messages
- **Events**: `authEvents.ts` handles logging in, registering, and logging out
- **Hook**: `useAuth.ts` provides access to the user, authentication status, and authentication actions
- **Components**: `Login.tsx`, `Register.tsx` display the login and registration forms

### 5. Checkout Process

- **Schema**: `CheckoutSchema.ts` defines the structure of the checkout form
- **Atoms**: `checkoutAtoms.ts` contains atoms for the checkout form data and submission status
- **Events**: `checkoutEvents.ts` handles submitting the checkout form
- **Hook**: `useCheckout.ts` provides access to the checkout form data and submission status
- **Component**: `CheckoutForm.tsx` displays the checkout form

## Code Examples

Due to the complexity of the application, we will only show snippets of the code.

### Product Schema

```typescript
// schema/ProductSchema.ts
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export type ProductState = {
  products: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: string | null;
};

export const initialProductState: ProductState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
};
```

### Use Products Hook

```typescript
// hooks/useProducts.ts
import { useRecoilValue } from 'recoil';
import { productStateAtom } from '../quantum/atoms/productAtoms';
import { useProductEvents } from '../quantum/events/productEvents';

export const useProducts = () => {
  const productState = useRecoilValue(productStateAtom);
  const dispatch = useProductEvents();

  return {
    products: productState.products,
    loading: productState.loading,
    error: productState.error,
    fetchProducts: () => dispatch({ type: 'FETCH_PRODUCTS' }),
  };
};
```

### Product List Component

```tsx
// components/organisms/ProductList.tsx
import { useProducts } from '../../hooks/useProducts';

export const ProductList = () => {
  const { products, loading, error, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};
```

## Testing

The application includes comprehensive tests for all major components and state transitions.

## Benefits of the Quantum Reactor Pattern in this Example

This complex application demonstrates the scalability and maintainability of the Quantum Reactor Pattern. By following the recommended directory structure, using schema-first development, and embracing event-driven state management, the application remains organized and testable even as it grows in complexity.
