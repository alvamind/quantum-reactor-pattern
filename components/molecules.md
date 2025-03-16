# Molecules

Molecules are simple groups of UI elements functioning together as a unit. They are relatively simple combinations of atoms and form the basis for more complex organisms.

## Examples

### Form Field

A combination of a label and an input:

```tsx
// components/molecules/FormField.tsx
import { useId } from 'react';
import { Label } from '../atoms/Label';
import { Input } from '../atoms/Input';
import { cn } from '../../lib/utils';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  className?: string;
}

export function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  className,
}: FormFieldProps) {
  const id = useId();

  return (
    <div className={cn('space-y-2', className)}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={error ? 'border-destructive' : ''}
      />
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  );
}
```

### Search Bar

A combination of an input and a button:

```tsx
// components/molecules/SearchBar.tsx
import { useState } from 'react';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <Input
        type="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mr-2"
      />
      <Button type="submit" variant="secondary">
        <Icon icon="Search" size={16} className="mr-2" />
        Search
      </Button>
    </form>
  );
}
```

### Product Card

A combination of an image, title, and price:

```tsx
// components/molecules/ProductCard.tsx
import { Card, CardContent, CardFooter } from '../atoms/Card';
import { Button } from '../atoms/Button';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  };
  onAddToCart?: (productId: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4">
        <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
        {onAddToCart && (
          <Button onClick={() => onAddToCart(product.id)}>Add to Cart</Button>
        )}
      </CardFooter>
    </Card>
  );
}
```

## Best Practices

- Molecules should be relatively simple and reusable.
- They should not contain any complex business logic or state management.
- Molecules should be named descriptively to indicate their purpose.
- They should be well-documented with clear prop definitions.
- Molecules should be tested to ensure they render correctly and handle different input values.
