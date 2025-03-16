# Directory Structure

The Quantum Reactor Pattern follows a specific directory structure to organize code for maintainability and scalability. This structure separates concerns while keeping related code close together.

## Root Structure

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

## Schema Directory

Contains TypeScript type definitions for all application state and their initial values.

```
/schema
  /user
    UserSchema.ts
    AuthSchema.ts
  /products
    ProductSchema.ts
    CartSchema.ts
  /ui
    UISchema.ts
```

Example file:

```typescript
// schema/user/UserSchema.ts
export type UserState = {
  id: string | null;
  name: string;
  email: string;
  role: 'user' | 'admin';
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
};

export const initialUserState: UserState = {
  id: null,
  name: '',
  email: '',
  role: 'user',
  preferences: {
    theme: 'light',
    notifications: true,
  },
};
```

## Quantum Directory

Houses all state management logic, organized into atoms, selectors, and events.

```
/quantum
  /atoms
    userAtoms.ts
    productAtoms.ts
    cartAtoms.ts
    uiAtoms.ts
  /selectors
    userSelectors.ts
    productSelectors.ts
    cartSelectors.ts
  /events
    userEvents.ts
    productEvents.ts
    cartEvents.ts
    uiEvents.ts
```

## Components Directory

Organized following atomic design principles, from simplest to most complex.

```
/components
  /atoms
    Button.tsx
    Input.tsx
    Label.tsx
    Icon.tsx
  /molecules
    FormField.tsx
    SearchBar.tsx
    ProductCard.tsx
    NavigationLink.tsx
  /organisms
    ProductList.tsx
    NavigationBar.tsx
    UserProfileForm.tsx
    ShoppingCart.tsx
  /templates
    MainLayout.tsx
    DashboardLayout.tsx
    AuthLayout.tsx
  /pages
    HomePage.tsx
    ProductPage.tsx
    CheckoutPage.tsx
    UserProfilePage.tsx
```

## Hooks Directory

Contains custom hooks for accessing state and dispatching events.

```
/hooks
  useUser.ts
  useAuth.ts
  useProducts.ts
  useCart.ts
  useUI.ts
```

Example hook:

```typescript
// hooks/useUser.ts
import { useRecoilValue } from 'recoil';
import { userStateAtom } from '../quantum/atoms/userAtoms';
import { userThemeSelector } from '../quantum/selectors/userSelectors';
import { useUserEvents } from '../quantum/events/userEvents';

export const useUser = () => {
  const userState = useRecoilValue(userStateAtom);
  const theme = useRecoilValue(userThemeSelector);
  const dispatch = useUserEvents();

  return {
    // State values
    name: userState.name,
    email: userState.email,
    role: userState.role,
    theme,

    // Event dispatchers
    setName: (name: string) => dispatch({ type: 'SET_NAME', payload: name }),
    setEmail: (email: string) => dispatch({ type: 'SET_EMAIL', payload: email }),
    toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }),
  };
};
```

## Utils Directory

Contains pure utility functions used throughout the application.

```
/utils
  /formatting
    dateFormatters.ts
    currencyFormatters.ts
  /validation
    inputValidation.ts
    formValidation.ts
  /calculations
    cartCalculations.ts
  /helpers
    arrayHelpers.ts
    objectHelpers.ts
```

## Lib Directory

Houses integrations with third-party libraries and services.

```
/lib
  /api
    client.ts
    endpoints.ts
  /storage
    localStorage.ts
  /analytics
    trackers.ts
```

## Styles Directory

Contains global styles and theme configurations.

```
/styles
  globals.css
  theme.ts
  animations.ts
  mixins.ts
```

## Tests Directory

Contains test utilities, mocks, and test setup files.

```
/tests
  /mocks
    userMocks.ts
    productMocks.ts
  setupTests.ts
  testUtils.tsx
```

## File Naming Conventions

- **Component files**: PascalCase (e.g., `UserProfile.tsx`)
- **Hook files**: camelCase, prefixed with "use" (e.g., `useProducts.ts`)
- **Schema files**: PascalCase with "Schema" suffix (e.g., `UserSchema.ts`)
- **Atom files**: camelCase with "Atoms" suffix (e.g., `userAtoms.ts`)
- **Event files**: camelCase with "Events" suffix (e.g., `cartEvents.ts`)
- **Utility files**: camelCase, descriptive (e.g., `dateFormatters.ts`)

## Import Order Convention

For consistent and maintainable code, follow this import order:

1. External libraries
2. Schema imports
3. Quantum (atoms, selectors, events)
4. Hooks
5. Components
6. Utils
7. Types/interfaces
8. Styles/CSS modules

Example:

```typescript
// External libraries
import React from 'react';
import { useRecoilValue } from 'recoil';

// Schema
import { UserState } from '../schema/user/UserSchema';

// Quantum
import { userStateAtom } from '../quantum/atoms/userAtoms';
import { useUserEvents } from '../quantum/events/userEvents';

// Hooks
import { useUser } from '../hooks/useUser';

// Components
import { Button } from '../components/atoms/Button';

// Utils
import { formatDate } from '../utils/formatting/dateFormatters';

// Styles
import './styles.css';
```

This structured approach to organizing your codebase makes it easier to find files, understand their purpose, and maintain a clean architecture as your application grows.
