# Hooks Reference

This section provides a detailed reference for all the custom hooks used in the Quantum Reactor Pattern.

## useUser

Provides access to user-related state and actions.

### Return Value

```typescript
{
  id: string | null;
  name: string;
  email: string;
  theme: 'light' | 'dark';
  isAuthenticated: boolean;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  toggleTheme: () => void;
  logout: () => void;
}
```

### Properties

*   `id`: The user's ID, or null if not authenticated.
*   `name`: The user's name.
*   `email`: The user's email address.
*   `theme`: The user's preferred theme ('light' or 'dark').
*   `isAuthenticated`: A boolean indicating whether the user is authenticated.

### Actions

*   `setName(name: string)`: Sets the user's name.
*   `setEmail(email: string)`: Sets the user's email address.
*   `toggleTheme()`: Toggles the user's preferred theme between 'light' and 'dark'.
*   `logout()`: Logs the user out.

### Example Usage

```typescript
import { useUser } from '../hooks/useUser';

const UserProfile = () => {
  const { name, email, setName, toggleTheme } = useUser();

  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <button onClick={() => setName('New Name')}>Update Name</button>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
```

## useProducts

Provides access to product-related state and actions.

### Return Value

```typescript
{
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
}
```

### Properties

*   `products`: An array of `Product` objects.
*   `loading`: A boolean indicating whether the products are currently being loaded.
*   `error`: An error message, or null if there is no error.

### Actions

*   `fetchProducts()`: Fetches the products from the server.

### Example Usage

```typescript
import { useProducts } from '../hooks/useProducts';

const ProductList = () => {
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
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};
```

## useCart

Provides access to cart-related state and actions.

### Return Value

```typescript
{
  items: CartItem[];
  total: number;
  loading: boolean;
  error: string | null;
  addItem: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
}
```

### Properties

*   `items`: An array of `CartItem` objects.
*   `total`: The total price of all items in the cart.
*   `loading`: A boolean indicating whether the cart is currently being loaded.
*   `error`: An error message, or null if there is no error.

### Actions

*   `addItem(productId: string, quantity: number)`: Adds an item to the cart.
*   `removeItem(productId: string)`: Removes an item from the cart.
*   `updateQuantity(productId: string, quantity: number)`: Updates the quantity of an item in the cart.

### Example Usage

```typescript
import { useCart } from '../hooks/useCart';

const AddToCartButton = ({ productId }: { productId: string }) => {
  const { addItem } = useCart();

  return (
    <button onClick={() => addItem(productId, 1)}>Add to Cart</button>
  );
};
```

## useAuth

Provides access to authentication-related state and actions.

### Return Value

```typescript
{
  authState: AuthState;
  register: (email: string, password: string, name: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
}
```

### Properties

*   `authState`: The current authentication state.

### Actions

*   `register(email: string, password: string, name: string)`: Registers a new user.
*   `login(email: string, password: string)`: Logs in an existing user.
*   `logout()`: Logs the user out.

### Example Usage

```typescript
import { useAuth } from '../hooks/useAuth';

const LoginForm = () => {
  const { login, authState } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {authState.status === 'error' && <div>{authState.error}</div>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};
```
