# Templates

Templates are page-level layouts that define the structure of a page without specific content. They are composed of organisms, molecules, and atoms.

## Characteristics of Templates

*   **Page-Level Layouts:** Define the overall layout of a page.
*   **Content-Agnostic:** Do not contain specific content.
*   **Reusable:** Can be used for multiple pages with different content.
*   **Composed of Organisms:** Built by arranging organisms into a page structure.

## Examples

### Main Layout

A template that provides a basic layout with a header, and main content area, and a footer:

```tsx
// components/templates/MainLayout.tsx
import { ReactNode } from 'react';
import { NavigationBar } from '../organisms/NavigationBar';
import { Footer } from '../organisms/Footer';

interface MainLayoutProps {
  children: ReactNode;
  onSearch: (searchTerm: string) => void;
}

export function MainLayout({ children, onSearch }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar onSearch={onSearch} />

      <main className="container mx-auto py-8 flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}
```

### Dashboard Layout

A template that provides a layout for a dashboard with a sidebar and main content area:

```tsx
// components/templates/DashboardLayout.tsx
import { ReactNode } from 'react';
import { Sidebar } from '../organisms/Sidebar';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
}

export function DashboardLayout({ children, title }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      <Sidebar className="w-full md:w-64 md:min-h-screen" />

      <div className="flex-1 flex flex-col">
        <Header title={title} />

        <main className="flex-1 p-6">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}
```

### Auth Layout

A template that provides a layout for authentication pages:

```tsx
// components/templates/AuthLayout.tsx
import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        {children}
      </div>
    </div>
  );
}
```

## Best Practices

- Templates should focus on layout and structure, not content.
- They should be reusable across multiple pages.
- Templates should be named descriptively to indicate their purpose (e.g., `MainLayout`, `SidebarLayout`).
- They should be well-documented with clear prop definitions.
- Templates should be tested to ensure they render correctly and provide the expected layout.
```
