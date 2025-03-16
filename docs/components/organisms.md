# Organisms

Organisms are relatively complex UI sections composed of groups of molecules and/or atoms and other organisms. These components form distinct sections of an interface.

## Examples

### Product List

An organism that displays a list of product cards:

```tsx
// components/organisms/ProductList.tsx
import { useProducts } from '../../hooks/useProducts';
import { Card } from '../atoms/Card';
import { Button } from '../atoms/Button';
import { Skeleton } from '../atoms/Skeleton';
import { ProductCard } from '../molecules/ProductCard';

export function ProductList() {
  const { products, isLoading, error, loadMore, hasMore } = useProducts();

  if (isLoading && products.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="p-4">
            <Skeleton className="h-48 w-full mb-4" />
            <Skeleton className="h-4 w-2/3 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-4" />
            <Skeleton className="h-10 w-full" />
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-destructive mb-2">Failed to load products</h3>
        <p className="text-muted-foreground mb-4">{error}</p>
        <Button onClick={() => window.location.reload()}>
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {hasMore && (
        <div className="text-center">
          <Button onClick={loadMore} variant="outline">
            Load More Products
          </Button>
        </div>
      )}
    </div>
  );
}
```

### Navigation Bar

An organism that displays navigation links and a search bar:

```tsx
// components/organisms/NavigationBar.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../molecules/SearchBar';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

interface NavigationBarProps {
  onSearch: (searchTerm: string) => void;
}

export function NavigationBar({ onSearch }: NavigationBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          My Store
        </Link>

        <SearchBar onSearch={onSearch} />

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/products" className="hover:text-gray-500">
            Products
          </Link>
          <Link to="/cart" className="hover:text-gray-500">
            Cart
          </Link>
          <Button variant="outline">
            <Icon icon="User" size={16} className="mr-2" />
            Sign In
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon icon="Menu" size={24} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-6 py-4">
          <Link to="/products" className="block py-2 hover:text-gray-500">
            Products
          </Link>
          <Link to="/cart" className="block py-2 hover:text-gray-500">
            Cart
          </Link>
          <Button variant="outline" className="w-full">
            <Icon icon="User" size={16} className="mr-2" />
            Sign In
          </Button>
        </div>
      )}
    </nav>
  );
}
```

### User Profile Form

An organism that displays a form for updating user profile information:

```tsx
// components/organisms/UserProfileForm.tsx
import { useState } from 'react';
import { FormField } from '../molecules/FormField';
import { Button } from '../atoms/Button';

interface UserProfileFormProps {
  initialName: string;
  initialEmail: string;
  onSubmit: (name: string, email: string) => void;
}

export function UserProfileForm({ initialName, initialEmail, onSubmit }: UserProfileFormProps) {
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name, email);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField
        label="Name"
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit">Update Profile</Button>
    </form>
  );
}
```

## Best Practices

- Organisms should be self-contained and reusable.
- They should be responsible for managing their own internal state and logic.
- Organisms should be named descriptively to indicate their purpose.
- They should be well-documented with clear prop definitions.
- Organisms should be tested to ensure they render correctly and handle different scenarios.
