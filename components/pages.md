# Pages

Pages are specific instances of templates that render content. They are the most concrete components in the atomic design system and represent the final output that users see.

## Examples

### Home Page

A page that displays a welcome message and featured products:

```tsx
// components/pages/HomePage.tsx
import { MainLayout } from '../templates/MainLayout';
import { ProductList } from '../organisms/ProductList';

export function HomePage() {
  return (
    <MainLayout onSearch={() => {}}>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Store</h1>
        <p className="text-gray-600 mb-8">Check out our featured products:</p>
      </div>
      <ProductList />
    </MainLayout>
  );
}
```

### Product Page

A page that displays details for a specific product:

```tsx
// components/pages/ProductPage.tsx
import { useParams } from 'react-router-dom';
import { MainLayout } from '../templates/MainLayout';
import { ProductDetails } from '../organisms/ProductDetails';

export function ProductPage() {
  const { productId } = useParams<{ productId: string }>();

  return (
    <MainLayout onSearch={() => {}}>
      <ProductDetails productId={productId} />
    </MainLayout>
  );
}
```

### Checkout Page

A page that displays the shopping cart and allows users to complete their purchase:

```tsx
// components/pages/CheckoutPage.tsx
import { MainLayout } from '../templates/MainLayout';
import { ShoppingCart } from '../organisms/ShoppingCart';
import { CheckoutForm } from '../organisms/CheckoutForm';

export function CheckoutPage() {
  return (
    <MainLayout onSearch={() => {}}>
      <div className="flex flex-col md:flex-row gap-8">
        <ShoppingCart />
        <CheckoutForm />
      </div>
    </MainLayout>
  );
}
```

## Best Practices

- Pages should be specific instances of templates.
- They should be responsible for fetching and rendering content.
- Pages should be named descriptively to indicate their purpose.
- They should be well-documented with clear route definitions.
- Pages should be tested to ensure they render correctly and display the expected content.
