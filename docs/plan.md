# Planning the Quantum Reactor Pattern Documentation with VitePress

Let me plan a comprehensive documentation site for the Quantum Reactor Pattern using VitePress.

## Documentation Plan

- [x] Define the documentation structure
- [x] Create outline for all major sections
- [x] Plan code examples and explanations
- [x] Design architecture diagrams
- [x] Plan interactive demos (if applicable)
- [x] Organize navigation and sidebar

## VitePress Documentation Structure

```
/docs
  /public
    /images
      quantum-reactor-diagram.png
      state-flow-diagram.png
      component-hierarchy.png
  /src
    /.vitepress
      /config.js         # VitePress configuration
      /theme             # Custom theme components (if needed)
    /guide
      /getting-started.md
      /core-concepts.md
      /installation.md
      /directory-structure.md
    /components
      /overview.md
      /atoms.md
      /molecules.md
      /organisms.md
      /templates.md
      /pages.md
    /state-management
      /schema.md
      /atoms-and-selectors.md
      /events.md
      /custom-hooks.md
    /advanced
      /testing.md
      /performance.md
      /migration.md
      /comparison.md
    /examples
      /simple-app.md
      /complex-app.md
      /auth-flow.md
    /api
      /hooks-reference.md
      /events-reference.md
    /index.md            # Home page
```

Now I'll create the VitePress configuration and home page to get started:

## VitePress Configuration

```js
// docs/.vitepress/config.js
export default {
  title: 'Quantum Reactor Pattern',
  description: 'A React Architecture Design Pattern combining atomic design, Recoil, shadcn, and event-driven architecture',
  themeConfig: {
    logo: '/images/quantum-reactor-logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/overview' },
      { text: 'State', link: '/state-management/schema' },
      { text: 'Advanced', link: '/advanced/testing' },
      { text: 'Examples', link: '/examples/simple-app' },
      { text: 'API', link: '/api/hooks-reference' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Core Concepts', link: '/guide/core-concepts' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Directory Structure', link: '/guide/directory-structure' },
          ]
        }
      ],
      '/components/': [
        {
          text: 'Components',
          items: [
            { text: 'Overview', link: '/components/overview' },
            { text: 'Atoms', link: '/components/atoms' },
            { text: 'Molecules', link: '/components/molecules' },
            { text: 'Organisms', link: '/components/organisms' },
            { text: 'Templates', link: '/components/templates' },
            { text: 'Pages', link: '/components/pages' },
          ]
        }
      ],
      '/state-management/': [
        {
          text: 'State Management',
          items: [
            { text: 'Schema', link: '/state-management/schema' },
            { text: 'Atoms & Selectors', link: '/state-management/atoms-and-selectors' },
            { text: 'Events', link: '/state-management/events' },
            { text: 'Custom Hooks', link: '/state-management/custom-hooks' },
          ]
        }
      ],
      '/advanced/': [
        {
          text: 'Advanced Topics',
          items: [
            { text: 'Testing', link: '/advanced/testing' },
            { text: 'Performance', link: '/advanced/performance' },
            { text: 'Migration Guide', link: '/advanced/migration' },
            { text: 'Comparing to Other Patterns', link: '/advanced/comparison' },
          ]
        }
      ],
      '/examples/': [
        {
          text: 'Example Applications',
          items: [
            { text: 'Simple App', link: '/examples/simple-app' },
            { text: 'Complex App', link: '/examples/complex-app' },
            { text: 'Authentication Flow', link: '/examples/auth-flow' },
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Hooks Reference', link: '/api/hooks-reference' },
            { text: 'Events Reference', link: '/api/events-reference' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/quantum-reactor-pattern' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present'
    }
  }
}
```

## Home Page Content

```markdown
---
layout: home
hero:
  name: Quantum Reactor Pattern
  text: A Modern React Architecture
  tagline: Combine atomic design, Recoil state management, shadcn, and event-driven architecture for scalable React applications
  image:
    src: /images/quantum-reactor-logo.svg
    alt: Quantum Reactor Pattern
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/yourusername/quantum-reactor-pattern

features:
  - icon: 🧪
    title: Schema-First Development
    details: Define your application state structure upfront for better predictability and consistency

  - icon: ⚛️
    title: Atomic Component Design
    details: Build complex UIs from simple, reusable atomic components

  - icon: 🔄
    title: Event-Driven Architecture
    details: Manage state changes through explicit, well-defined events for better testability

  - icon: 🎯
    title: Zero Prop Drilling
    details: Access state and dispatch events directly from custom hooks, eliminating prop drilling

  - icon: 🧩
    title: Composable & Testable
    details: Highly modular architecture optimized for composition and unit testing

  - icon: 🎨
    title: Modern Styling
    details: Integrated with shadcn and Tailwind CSS for a consistent, maintainable design system
---

## What is the Quantum Reactor Pattern?

The Quantum Reactor Pattern combines the best practices from atomic design, Recoil state management, shadcn components, Tailwind CSS, schema-first design, and event-driven architecture to create a highly maintainable, testable, and scalable React application architecture.

```

## Getting Started Page Content

```markdown
# Getting Started with Quantum Reactor Pattern

The Quantum Reactor Pattern provides a comprehensive architectural approach to building React applications that are maintainable, testable, and scalable.

## Prerequisites

- Node.js 14.0+
- npm or yarn
- Familiarity with React and TypeScript

## Create a New Project

The easiest way to get started is using our CLI tool:

```bash
# Using npm
npm create quantum-reactor-app my-app

# Using yarn
yarn create quantum-reactor-app my-app

# Using pnpm
pnpm create quantum-reactor-app my-app
```

This will set up a new project with all the necessary dependencies and the Quantum Reactor Pattern file structure.

## Manual Setup

If you prefer to set up manually or integrate into an existing project:

1. Create a new React project:

```bash
npx create-react-app my-app --template typescript
# or
yarn create react-app my-app --template typescript
```

2. Install the required dependencies:

```bash
npm install recoil tailwindcss shadcn-ui @types/uuid uuid
# or
yarn add recoil tailwindcss shadcn-ui @types/uuid uuid
```

3. Set up the project structure:

```
/src
  /schema          # State definitions
  /quantum         # State management
    /atoms         # Base state atoms
    /selectors     # Derived state
    /events        # Event definitions & handlers
  /components      # Atomic design components
    /atoms         # Basic building blocks
    /molecules     # Simple combinations
    /organisms     # Complex compositions
    /templates     # Layout structures
    /pages         # Full page compositions
  /hooks           # Custom quantum hooks
  /utils           # Pure utility functions
```

## The First Quantum Component

Let's create a simple counter component using the Quantum Reactor Pattern:

1. Create the schema:

```typescript
// schema/CounterSchema.ts
export type CounterState = {
  count: number;
  history: number[];
};

export const initialCounterState: CounterState = {
  count: 0,
  history: []
};
```

2. Create the atom:

```typescript
// quantum/atoms/counterAtom.ts
import { atom } from 'recoil';
import { CounterState, initialCounterState } from '../../schema/CounterSchema';

export const counterStateAtom = atom<CounterState>({
  key: 'counterState',
  default: initialCounterState,
});
```

3. Define events:

```typescript
// quantum/events/counterEvents.ts
import { useRecoilCallback } from 'recoil';
import { counterStateAtom } from '../atoms/counterAtom';

export type CounterEvent =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' };

export const useCounterEvents = () => {
  const dispatch = useRecoilCallback(
    ({ set, snapshot }) => async (event: CounterEvent) => {
      const currentState = await snapshot.getPromise(counterStateAtom);

      switch (event.type) {
        case 'INCREMENT':
          set(counterStateAtom, {
            count: currentState.count + 1,
            history: [...currentState.history, currentState.count]
          });
          break;

        case 'DECREMENT':
          set(counterStateAtom, {
            count: currentState.count - 1,
            history: [...currentState.history, currentState.count]
          });
          break;

        case 'RESET':
          set(counterStateAtom, {
            count: 0,
            history: [...currentState.history, currentState.count]
          });
          break;
      }
    },
    []
  );

  return dispatch;
};
```

4. Create a custom hook:

```typescript
// hooks/useCounter.ts
import { useRecoilValue } from 'recoil';
import { counterStateAtom } from '../quantum/atoms/counterAtom';
import { useCounterEvents } from '../quantum/events/counterEvents';

export const useCounter = () => {
  const { count, history } = useRecoilValue(counterStateAtom);
  const dispatch = useCounterEvents();

  return {
    count,
    history,
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' }),
  };
};
```

5. Create a Counter component:

```tsx
// components/molecules/Counter.tsx
import { useCounter } from '../../hooks/useCounter';
import { Button } from '@/components/ui/button'; // shadcn component

export const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg">
      <h2 className="text-2xl font-bold">{count}</h2>
      <div className="flex gap-2">
        <Button onClick={decrement}>-</Button>
        <Button onClick={reset} variant="outline">Reset</Button>
        <Button onClick={increment}>+</Button>
      </div>
    </div>
  );
};
```

6. Use it in your App:

```tsx
// App.tsx
import { RecoilRoot } from 'recoil';
import { Counter } from './components/molecules/Counter';

export default function App() {
  return (
    <RecoilRoot>
      <div className="min-h-screen flex items-center justify-center">
        <Counter />
      </div>
    </RecoilRoot>
  );
}
```

## Next Steps

Now that you've created your first Quantum Reactor component, continue exploring:

- Learn about [Core Concepts](/guide/core-concepts) of the pattern
- Understand the [Directory Structure](/guide/directory-structure) in detail
- Explore [Schema-First Development](/state-management/schema)
- Build more complex components using the [Atomic Design](/components/overview) principles
```

## Core Concepts Page Content

```markdown
# Core Concepts

The Quantum Reactor Pattern is built on several key principles and concepts that work together to create a robust React application architecture.

## 1. Schema-First State Definition

Every piece of application state starts with a schema definition. This provides:

- **Type Safety**: Clear TypeScript interfaces for all state
- **Initial Values**: Default state is defined upfront
- **Documentation**: State structure is self-documenting
- **Validation**: Easy to add validation logic

Example:

```typescript
// schema/UserSchema.ts
export type UserState = {
  id: string | null;
  name: string;
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
};

export const initialUserState: UserState = {
  id: null,
  name: '',
  preferences: {
    theme: 'light',
    notifications: true,
  },
};
```

## 2. Global State with Atoms & Selectors

State is managed using Recoil's atoms and selectors:

- **Atoms**: Represent the source of truth for a piece of state
- **Selectors**: Derive state from atoms or other selectors
- **Global Access**: Any component can access any state when needed
- **Fine-grained Updates**: Components only re-render when their specific state changes

Example:

```typescript
// quantum/atoms/userAtom.ts
import { atom } from 'recoil';
import { UserState, initialUserState } from '../../schema/UserSchema';

export const userStateAtom = atom<UserState>({
  key: 'userState',
  default: initialUserState,
});

// quantum/selectors/userSelectors.ts
import { selector } from 'recoil';
import { userStateAtom } from '../atoms/userAtom';

export const userThemeSelector = selector({
  key: 'userThemeSelector',
  get: ({ get }) => {
    const { preferences } = get(userStateAtom);
    return preferences.theme;
  },
});
```

## 3. Event-Driven State Transitions

State changes happen through well-defined events:

- **Explicit Events**: Every state change is an explicit event
- **Centralized Logic**: State transition logic is centralized and reusable
- **Predictable Updates**: All state updates follow a clear pattern
- **Auditable Changes**: Events can be logged for debugging

Example:

```typescript
// quantum/events/userEvents.ts
import { useRecoilCallback } from 'recoil';
import { userStateAtom } from '../atoms/userAtom';

export type UserEvent =
  | { type: 'SET_NAME', payload: string }
  | { type: 'TOGGLE_THEME' };

export const useUserEvents = () => {
  const dispatch = useRecoilCallback(
    ({ set, snapshot }) => async (event: UserEvent) => {
      const currentState = await snapshot.getPromise(userStateAtom);

      switch (event.type) {
        case 'SET_NAME':
          set(userStateAtom, {
            ...currentState,
            name: event.payload
          });
          break;

        case 'TOGGLE_THEME':
          set(userStateAtom, {
            ...currentState,
            preferences: {
              ...currentState.preferences,
              theme: currentState.preferences.theme === 'light' ? 'dark' : 'light'
            }
          });
          break;
      }
    },
    []
  );

  return dispatch;
};
```

## 4. Custom Hooks for State Access

Custom hooks provide a clean API for components to interact with state:

- **Encapsulated Logic**: Business logic separated from UI components
- **Reusable Access**: Same hook can be used across multiple components
- **Zero Prop Drilling**: Components access state directly, no props needed
- **Consistent Interface**: Standard pattern for all state access

Example:

```typescript
// hooks/useUser.ts
import { useRecoilValue } from 'recoil';
import { userStateAtom } from '../quantum/atoms/userAtom';
import { userThemeSelector } from '../quantum/selectors/userSelectors';
import { useUserEvents } from '../quantum/events/userEvents';

export const useUser = () => {
  const userState = useRecoilValue(userStateAtom);
  const theme = useRecoilValue(userThemeSelector);
  const dispatch = useUserEvents();

  return {
    name: userState.name,
    theme,
    preferences: userState.preferences,
    setName: (name: string) => dispatch({ type: 'SET_NAME', payload: name }),
    toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }),
  };
};
```

## 5. Atomic Design Components

Components are organized following atomic design principles:

- **Atoms**: Basic building blocks (buttons, inputs, labels)
- **Molecules**: Simple combinations of atoms (form fields, cards)
- **Organisms**: Complex compositions (forms, headers, sidebars)
- **Templates**: Page layouts without specific content
- **Pages**: Complete page compositions

Example:

```tsx
// Atom component
const ThemeToggle = () => {
  const { theme, toggleTheme } = useUser();
  return (
    <Button onClick={toggleTheme} variant="ghost">
      {theme === 'light' ? '🌙' : '☀️'}
    </Button>
  );
};

// Molecule component
const UserProfile = () => {
  const { name, setName } = useUser();
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="name">Name</Label>
      <Input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <ThemeToggle />
    </div>
  );
};
```

## 6. Immutable State Updates

All state updates create new state objects:

- **Predictable**: State changes are explicit and traceable
- **Pure Functions**: Update logic is pure and testable
- **Time-Travel Debugging**: State history can be tracked
- **Optimized Rendering**: React can efficiently determine what changed

## 7. Functional Programming Principles

The pattern embraces functional programming concepts:

- **Pure Functions**: No side effects in state transition logic
- **Immutability**: State is never mutated directly
- **Composition**: Complex behavior through function composition
- **Higher-Order Functions**: For code reuse and abstraction

## 8. Zero Prop Drilling

Components access state directly through hooks:

- **Cleaner Components**: No need to pass props through multiple levels
- **Flexible Refactoring**: Components can be moved without rewiring props
- **Performance**: Avoid unnecessary re-renders from prop changes
- **Simplicity**: Component API remains clean regardless of state needs

## How These Concepts Work Together

1. **Define Schema**: Start by defining your state structure and initial values
2. **Create Atoms/Selectors**: Set up Recoil atoms based on your schema
3. **Define Events**: Create events that describe all possible state changes
4. **Build Custom Hooks**: Expose state and event dispatchers through hooks
5. **Create Components**: Build UI components that use the hooks
6. **Compose Application**: Assemble components following atomic design

This approach creates a highly maintainable architecture with clear boundaries, predictable state management, and loosely coupled components that can be tested in isolation.
```

## Directory Structure Page Content

```markdown
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
```

## Schema Management Page Content

```markdown
# Schema-First State Management

The Quantum Reactor Pattern uses a schema-first approach to define application state. This provides a solid foundation for type safety, state initialization, and documentation.

## What is a Schema?

In the Quantum Reactor Pattern, a schema is a TypeScript type definition plus initial values for a slice of application state. It serves as:

1. **Type Contract**: Defines the shape and types of your state
2. **Documentation**: Self-documents what data is stored and its structure
3. **Initial Values**: Provides default values for state initialization
4. **Single Source of Truth**: The authoritative definition of state structure

## Creating a Schema

A schema consists of two main parts:

1. A TypeScript type or interface definition
2. An initial state object conforming to that type

### Basic Schema Example

```typescript
// schema/TodoSchema.ts
export type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
};

export type TodoState = {
  items: TodoItem[];
  filter: 'all' | 'active' | 'completed';
  loading: boolean;
  error: string | null;
};

export const initialTodoState: TodoState = {
  items: [],
  filter: 'all',
  loading: false,
  error: null,
};
```

### Schema with Nested Data

```typescript
// schema/UserSchema.ts
export type Address = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

export type UserState = {
  profile: {
    id: string | null;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string | null;
  };
  address: Address | null;
  preferences: {
    theme: 'light' | 'dark';
    emailNotifications: boolean;
    pushNotifications: boolean;
  };
  status: 'idle' | 'loading' | 'authenticated' | 'error';
  error: string | null;
};

export const initialUserState: UserState = {
  profile: {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    avatar: null,
  },
  address: null,
  preferences: {
    theme: 'light',
    emailNotifications: true,
    pushNotifications: false,
  },
  status: 'idle',
  error: null,
};
```

## Schema Best Practices

### Use Specific Types

Avoid using `any` or overly generic types. Be as specific as possible:

```typescript
// ❌ Avoid
type Settings = {
  options: any;
};

// ✅ Better
type Settings = {
  options: {
    theme: 'light' | 'dark';
    fontSize: 'small' | 'medium' | 'large';
    notifications: boolean;
  };
};
```

### Define Union Types for States

Use union types to represent different states:

```typescript
export type AuthState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'authenticated', user: User }
  | { status: 'error', error: string };
```

### Create Reusable Sub-Types

Extract common structures into reusable types:

```typescript
// Common types that can be reused
export type Timestamp = {
  createdAt: number;
  updatedAt: number | null;
};

export type Auditable = Timestamp & {
  createdBy: string | null;
  updatedBy: string | null;
};

// Using the reusable types
export type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
} & Timestamp;
```

### Document Complex Fields

Add comments to explain non-obvious fields:

```typescript
export type ProductState = {
  items: Product[];
  // ISO currency code (e.g., 'USD', 'EUR')
  currency: string;
  // Tax rate as decimal (e.g., 0.07 for 7%)
  taxRate: number;
};
```

### Organize Related Schemas

Group related schemas in subdirectories:

```
/schema
  /user
    UserSchema.ts    // User profile
    AuthSchema.ts    // Authentication state
  /products
    ProductSchema.ts // Product catalog
    CartSchema.ts    // Shopping cart
```

## Using Schemas with Recoil Atoms

Once defined, schemas are used to create Recoil atoms:

```typescript
// quantum/atoms/todoAtoms.ts
import { atom } from 'recoil';
import { TodoState, initialTodoState } from '../../schema/TodoSchema';

export const todoStateAtom = atom<TodoState>({
  key: 'todoState',
  default: initialTodoState,
});
```

## Schema Validation

For runtime validation of schema data (e.g., from APIs), consider using libraries like Zod or Yup:

```typescript
// schema/TodoSchema.ts with Zod validation
import { z } from 'zod';

// Define schema with Zod
export const todoItemSchema = z.object({
  id: z.string(),
  text: z.string().min(1),
  completed: z.boolean(),
  createdAt: z.number(),
});

export const todoStateSchema = z.object({
  items: z.array(todoItemSchema),
  filter: z.enum(['all', 'active', 'completed']),
  loading: z.boolean(),
  error: z.string().nullable(),
});

// TypeScript types derived from Zod schema
export type TodoItem = z.infer<typeof todoItemSchema>;
export type TodoState = z.infer<typeof todoStateSchema>;

// Initial state
export const initialTodoState: TodoState = {
  items: [],
  filter: 'all',
  loading: false,
  error: null,
};

// Validation helper
export const validateTodoState = (data: unknown): TodoState => {
  return todoStateSchema.parse(data);
};
```

## Schema Evolution

As your application grows, schemas will need to evolve. Here are strategies for managing schema changes:

### Adding New Optional Fields

Add new fields as optional to maintain backward compatibility:

```typescript
// Before
export type UserState = {
  id: string;
  name: string;
};

// After - adding optional field
export type UserState = {
  id: string;
  name: string;
  avatar?: string; // New optional field
};
```

### Schema Versioning

For major changes, consider versioning your schemas:

```typescript
// schema/user/UserSchemaV1.ts (original)
export type UserStateV1 = {
  id: string;
  name: string;
};

// schema/user/UserSchemaV2.ts (new version)
export type UserStateV2 = {
  id: string;
  firstName: string; // Changed from "name"
  lastName: string;  // New field
  email: string;     // New field
};

// Migration helper
export const migrateFromV1ToV2 = (v1: UserStateV1): UserStateV2 => {
  return {
    id: v1.id,
    firstName: v1.name,
    lastName: '',
    email: '',
  };
};
```

## Schema-First Development Workflow

1. **Define Schemas First**: Start development by defining your state schemas
2. **Create Atoms**: Use schemas to create Recoil atoms
3. **Define Events**: Create events for state transitions
4. **Implement Components**: Build UI components that use the state

This approach enforces thinking about your data model before implementation, leading to more robust application architecture.

## Advanced Schema Patterns

### Normalized Schema for Relational Data

For relational data, normalize your schema to avoid duplication:

```typescript
export type EntityMap<T> = {
  [id: string]: T;
};

export type NormalizedTodoState = {
  todos: EntityMap<TodoItem>;
  lists: EntityMap<TodoList>;
  listOrder: string[]; // IDs of lists in order
  todosByList: {
    [listId: string]: string[]; // IDs of todos in each list
  };
};
```

### Schema for Asynchronous Data

Pattern for handling async data consistently:

```typescript
export type AsyncData<T> = {
  status: 'idle' | 'loading' | 'success' | 'error';
  data: T | null;
  error: string | null;
  lastUpdated: number | null;
};

export const createInitialAsyncData = <T>(): AsyncData<T> => ({
  status: 'idle',
  data: null,
  error: null,
  lastUpdated: null,
});

// Example usage
export type ProductsState = {
  products: AsyncData<Product[]>;
  selectedProduct: AsyncData<Product>;
};

export const initialProductsState: ProductsState = {
  products: createInitialAsyncData<Product[]>(),
  selectedProduct: createInitialAsyncData<Product>(),
};
```

## Schema Testing

Test your schemas to ensure they work as expected:

```typescript
// __tests__/schema/TodoSchema.test.ts
import { initialTodoState, validateTodoState } from '../../schema/TodoSchema';

describe('TodoSchema', () => {
  test('initialTodoState should be valid', () => {
    expect(() => validateTodoState(initialTodoState)).not.toThrow();
  });

  test('should reject invalid data', () => {
    const invalidData = {
      items: [{ id: 123, text: '' }], // id should be string, text too short
      filter: 'invalid',              // not in enum
      loading: 'yes',                 // not boolean
    };

    expect(() => validateTodoState(invalidData)).toThrow();
  });
});
```

By following these schema-first practices, you create a solid foundation for your application state that promotes type safety, data consistency, and clearer communication between team members.
```

## Atoms and Selectors Page Content

```markdown
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
```

## Events Page Content

```markdown
# Event-Driven State Management

The Quantum Reactor Pattern uses an event-driven approach to state management, where state transitions happen through well-defined events rather than direct state mutations.

## What Are Events?

Events are objects that describe state changes. Each event:

- Has a specific `type` that identifies what kind of change should occur
- May include a `payload` containing data needed for the change
- Is processed by event handlers that update state atoms accordingly

This approach provides several benefits:

- **Predictable State Changes**: All state updates follow a clear pattern
- **Separation of Concerns**: UI components trigger events, event handlers update state
- **Testability**: Events and their handlers can be tested in isolation
- **Auditability**: Event history can be logged for debugging
- **Centralized Logic**: Update logic is centralized, not spread across components

## Defining Events

Events are typically defined using TypeScript discriminated unions:

```typescript
// quantum/events/userEvents.ts
export type UserEvent =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'TOGGLE_THEME' }
  | { type: 'TOGGLE_NOTIFICATION_PREFERENCE'; payload: { type: 'email' | 'push' } }
  | { type: 'LOG_OUT' };
```

## Creating Event Handlers

Event handlers are created using Recoil's `useRecoilCallback` hook:

```typescript
// quantum/events/userEvents.ts
import { useRecoilCallback } from 'recoil';
import { userStateAtom } from '../atoms/userAtoms';

export type UserEvent =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'TOGGLE_THEME' };

export const useUserEvents = () => {
  const dispatch = useRecoilCallback(
    ({ set, snapshot }) => async (event: UserEvent) => {
      const currentState = await snapshot.getPromise(userStateAtom);

      switch (event.type) {
        case 'SET_NAME':
          set(userStateAtom, {
            ...currentState,
            profile: {
              ...currentState.profile,
              name: event.payload
            }
          });
          break;

        case 'TOGGLE_THEME':
          set(userStateAtom, {
            ...currentState,
            preferences: {
              ...currentState.preferences,
              theme: currentState.preferences.theme === 'light' ? 'dark' : 'light'
            }
          });
          break;
      }
    },
    []
  );

  return dispatch;
};
```

## Organizing Event Handlers

Organize event handlers by domain, mirroring atom organization:

```
/quantum
  /events
    userEvents.ts      // User-related events
    productEvents.ts   // Product-related events
    cartEvents.ts      // Shopping cart events
    uiEvents.ts        // UI state events
```

## Event Naming Conventions

- Use UPPER_SNAKE_CASE for event types
- Use clear, action-oriented names (e.g., `ADD_TO_CART`, not `CART_UPDATED`)
- Be specific about what is changing

## Using Events in Components

Components never directly manipulate state. Instead, they dispatch events:

```tsx
// components/molecules/UserNameInput.tsx
import { useUser } from '../../hooks/useUser';

export const UserNameInput = () => {
  const { name, setName } = useUser();

  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
```

The `setName` function comes from a custom hook that wraps the event dispatcher:

```typescript
// hooks/useUser.ts
import { useRecoilValue } from 'recoil';
import { userStateAtom } from '../quantum/atoms/userAtoms';
import { useUserEvents } from '../quantum/events/userEvents';

export const useUser = () => {
  const userState = useRecoilValue(userStateAtom);
  const dispatch = useUserEvents();

  return {
    name: userState.profile.name,
    email: userState.profile.email,
    theme: userState.preferences.theme,

    setName: (name: string) => dispatch({ type: 'SET_NAME', payload: name }),
    setEmail: (email: string) => dispatch({ type: 'SET_EMAIL', payload: email }),
    toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }),
  };
};
```

## Advanced Event Patterns

### Event Middleware

You can add middleware to your event handling for cross-cutting concerns like logging:

```typescript
// quantum/events/middleware/loggerMiddleware.ts
import { UserEvent } from '../userEvents';
import { ProductEvent } from '../productEvents';
import { CartEvent } from '../cartEvents';

type AppEvent = UserEvent | ProductEvent | CartEvent;

export const createLoggerMiddleware = (dispatch: (event: AppEvent) => void) => {
  return (event: AppEvent) => {
    console.log('Event dispatched:', event);
    dispatch(event);
  };
};

// Usage in a custom hook
export const useEventDispatch = () => {
  const userDispatch = useUserEvents();
  const productDispatch = useProductEvents();
  const cartDispatch = useCartEvents();

  // Combined dispatcher with logging
  const dispatch = useCallback((event: AppEvent) => {
    console.log('Event dispatched:', event);

    if (isUserEvent(event)) userDispatch(event);
    else if (isProductEvent(event)) productDispatch(event);
    else if (isCartEvent(event)) cartDispatch(event);
  }, [userDispatch, productDispatch, cartDispatch]);

  return dispatch;
};
```

### Asynchronous Events

Handle asynchronous operations within event handlers:

```typescript
// quantum/events/userEvents.ts
export type UserEvent =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'FETCH_USER_PROFILE'; payload: string }
  | { type: 'USER_PROFILE_LOADED'; payload: UserProfile }
  | { type: 'USER_PROFILE_ERROR'; payload: string };

export const useUserEvents = () => {
  const dispatch = useRecoilCallback(
    ({ set, snapshot }) => async (event: UserEvent) => {
      const currentState = await snapshot.getPromise(userStateAtom);

      switch (event.type) {
        case 'SET_NAME':
          set(userStateAtom, {
            ...currentState,
            profile: {
              ...currentState.profile,
              name: event.payload
            }
          });
          break;

        case 'FETCH_USER_PROFILE':
          set(userStateAtom, {
            ...currentState,
            status: 'loading',
            error: null
          });

          try {
            const userProfile = await fetchUserProfile(event.payload);
            dispatch({ type: 'USER_PROFILE_LOADED', payload: userProfile });
          } catch (error) {
            dispatch({ type: 'USER_PROFILE_ERROR', payload: error.message });
          }
          break;

        case 'USER_PROFILE_LOADED':
          set(userStateAtom, {
            profile: event.payload,
            status: 'authenticated',
            error: null,
            preferences: currentState.preferences
          });
          break;

        case 'USER_PROFILE_ERROR':
          set(userStateAtom, {
            ...currentState,
            status: 'error',
            error: event.payload
          });
          break;
      }
    },
    []
  );

  return dispatch;
};
```

### Event Composition

Events can trigger other events for more complex flows:

```typescript
case 'CHECKOUT_COMPLETE':
  // Update cart state
  set(cartStateAtom, {
    ...currentCartState,
    items: [],
    status: 'idle',
  });

  // Add order to order history
  const orderDispatch = orderEventsRef.current;
  orderDispatch({
    type: 'ADD_ORDER',
    payload: {
      orderId: event.payload.orderId,
      items: currentCartState.items,
      total: event.payload.total,
      date: new Date().toISOString(),
    }
  });

  // Show notification
  const uiDispatch = uiEventsRef.current;
  uiDispatch({
    type: 'SHOW_NOTIFICATION',
    payload: {
      type: 'success',
      message: `Order #${event.payload.orderId} placed successfully!`,
      duration: 5000,
    }
  });
  break;
```

### Event Validation

Validate events before processing them:

```typescript
// quantum/events/validation/validateUserEvent.ts
import { z } from 'zod';
import { UserEvent } from '../userEvents';

// Zod schemas for each event type
const setNameSchema = z.object({
  type: z.literal('SET_NAME'),
  payload: z.string().min(1).max(100),
});

const toggleThemeSchema = z.object({
  type: z.literal('TOGGLE_THEME'),
});

// Combined schema for all event types
const userEventSchema = z.discriminatedUnion('type', [
  setNameSchema,
  toggleThemeSchema,
]);

export const validateUserEvent = (event: UserEvent): UserEvent => {
  return userEventSchema.parse(event);
};

// Usage in event handler
export const useUserEvents = () => {
  const dispatch = useRecoilCallback(
    ({ set, snapshot }) => async (event: UserEvent) => {
      try {
        // Validate event before processing
        const validatedEvent = validateUserEvent(event);

        const currentState = await snapshot.getPromise(userStateAtom);

        switch (validatedEvent.type) {
          // Handle events...
        }
      } catch (error) {
        console.error('Invalid event:', event, error);
      }
    },
    []
  );

  return dispatch;
};
```

## Testing Events

Test your event handlers to ensure they update state correctly:

```typescript
// __tests__/quantum/events/userEvents.test.ts
import { renderHook, act } from '@testing-library/react-hooks';
import { RecoilRoot, snapshot_UNSTABLE } from 'recoil';
import { useUserEvents } from '../../../quantum/events/userEvents';
import { userStateAtom } from '../../../quantum/atoms/userAtoms';

describe('userEvents', () => {
  test('SET_NAME event should update user name', async () => {
    // Set up initial state
    const initialSnapshot = snapshot_UNSTABLE(({ set }) => {
      set(userStateAtom, {
        profile: {
          name: 'Initial Name',
          email: 'test@example.com',
        },
        preferences: {
          theme: 'light',
        },
        status: 'authenticated',
        error: null,
      });
    });

    // Render the hook
    const { result } = renderHook(() => useUserEvents(), {
      wrapper: ({ children }) => (
        <RecoilRoot initializeState={({ set }) => {
          set(userStateAtom, initialSnapshot.getLoadable(userStateAtom).getValue());
        }}>
          {children}
        </RecoilRoot>
      ),
    });

    // Dispatch the event
    act(() => {
      result.current({ type: 'SET_NAME', payload: 'New Name' });
    });

    // Check that state was updated correctly
    const newSnapshot = snapshot_UNSTABLE();
    const newState = newSnapshot.getLoadable(userStateAtom).getValue();

    expect(newState.profile.name).toBe('New Name');
    expect(newState.profile.email).toBe('test@example.com'); // Unchanged
    expect(newState.preferences.theme).toBe('light'); // Unchanged
  });
});
```

By embracing event-driven state management, the Quantum Reactor Pattern creates a clean separation between UI components and state logic, making your application more predictable, testable, and maintainable.
```

## Custom Hooks Page Content

```markdown
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
```

## Component Overview Page Content

```markdown
# Atomic Design Components

The Quantum Reactor Pattern adopts atomic design methodology for organizing components, complementing the event-driven state management approach to create a coherent and scalable architecture.

## What is Atomic Design?

Atomic design, created by Brad Frost, is a methodology for creating design systems by breaking down interfaces into five distinct levels:

1. **Atoms**: Basic building blocks (buttons, inputs, labels)
2. **Molecules**: Simple combinations of atoms (form fields, cards)
3. **Organisms**: Complex UI sections (forms, headers, product listings)
4. **Templates**: Page layouts without specific content
5. **Pages**: Complete page implementations with content

## Benefits of Atomic Design in Quantum Reactor

- **Consistency**: Reusable components ensure a consistent UI
- **Scalability**: Easy to maintain as application grows
- **Composition**: Complex UIs built from simple building blocks
- **Testing**: Each component level can be tested in isolation
- **Documentation**: Natural way to organize component documentation

## Component Organization

In the Quantum Reactor Pattern, components are organized by their atomic design level:

```
/components
  /atoms
    Button.tsx
    Input.tsx
    Label.tsx
    Icon.tsx
    Badge.tsx
  /molecules
    FormField.tsx
    SearchBar.tsx
    ProductCard.tsx
    AlertMessage.tsx
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

## Components with shadcn and Tailwind

The Quantum Reactor Pattern leverages shadcn and Tailwind CSS for consistent, maintainable styling:

```tsx
// components/atoms/Button.tsx
import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
```

## Component Integration with State

Components access state through custom hooks, never via prop drilling:

```tsx
// components/organisms/UserDashboard.tsx
import { useUser } from '../../hooks/useUser';
import { Card } from '../atoms/Card';
import { Avatar } from '../atoms/Avatar';
import { Button } from '../atoms/Button';
import { UserStats } from '../molecules/UserStats';

export const UserDashboard = () => {
  const {
    name,
    email,
    theme,
    avatarUrl,
    isAuthenticated,
    toggleTheme,
    logout
  } = useUser();

 if (!isAuthenticated) {
    return <div>Please log in to view your dashboard</div>;
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar src={avatarUrl} fallback={name.charAt(0)} />
            <div>
              <h2 className="text-xl font-bold">{name}</h2>
              <p className="text-muted-foreground">{email}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" onClick={toggleTheme}>
              {theme === 'light' ? '🌙' : '☀️'}
            </Button>
            <Button variant="ghost" onClick={logout}>
              Log Out
            </Button>
          </div>
        </div>
      </Card>

      <UserStats />
    </div>
  );
};
```

## Component Levels in Detail

### Atoms

Atoms are the smallest possible components, the building blocks of all other components:

```tsx
// components/atoms/Badge.tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground',
        secondary: 'border-transparent bg-secondary text-secondary-foreground',
        destructive: 'border-transparent bg-destructive text-destructive-foreground',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
```

### Molecules

Molecules combine atoms to create more complex, functional UI components:

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

### Organisms

Organisms are complex UI components composed of molecules and/or atoms:

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

### Templates

Templates define the layout structure for pages:

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

### Pages

Pages combine all the previous elements to create full application pages:

```tsx
// components/pages/ProductDetailPage.tsx
import { useParams } from 'react-router-dom';
import { useProduct } from '../../hooks/useProduct';
import { useCart } from '../../hooks/useCart';
import { MainLayout } from '../templates/MainLayout';
import { ProductGallery } from '../organisms/ProductGallery';
import { ProductInfo } from '../organisms/ProductInfo';
import { RelatedProducts } from '../organisms/RelatedProducts';
import { Button } from '../atoms/Button';
import { Skeleton } from '../atoms/Skeleton';

export function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const { product, isLoading, error } = useProduct(productId);
  const { addItem, isItemInCart } = useCart();

  if (isLoading) {
    return (
      <MainLayout>
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Skeleton className="h-96 rounded-lg" />
            <div className="space-y-6">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (error || !product) {
    return (
      <MainLayout>
        <div className="container mx-auto py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">
            Sorry, the product you're looking for doesn't exist or has been removed.
          </p>
          <Button as="a" href="/products">
            Browse Products
          </Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ProductGallery images={product.images} />

          <ProductInfo
            product={product}
            actions={
              <Button
                onClick={() => addItem(product.id)}
                disabled={isItemInCart(product.id)}
                size="lg"
                className="w-full"
              >
                {isItemInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
              </Button>
            }
          />
        </div>

        <div className="mt-24">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <RelatedProducts productId={product.id} categoryId={product.category.id} />
        </div>
      </div>
    </MainLayout>
  );
}
```

## Component Testing

Test components at each level appropriately:

```tsx
// __tests__/components/molecules/FormField.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { FormField } from '../../../components/molecules/FormField';

describe('FormField', () => {
  test('renders with label and input', () => {
    const handleChange = jest.fn();

    render(
      <FormField
        label="Email"
        name="email"
        value="test@example.com"
        onChange={handleChange}
      />
    );

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByDisplayValue('test@example.com')).toBeInTheDocument();
  });

  test('shows error message when provided', () => {
    render(
      <FormField
        label="Email"
        name="email"
        value="test"
        onChange={() => {}}
        error="Please enter a valid email"
      />
    );

    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument();
  });

  test('calls onChange when input changes', () => {
    const handleChange = jest.fn();

    render(
      <FormField
        label="Name"
        name="name"
        value=""
        onChange={handleChange}
      />
    );

    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'John Doe' }
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
```

## Best Practices for Components

1. **Component Composition**: Build complex components by composing simpler ones
2. **State Access via Hooks**: Components access state through hooks, not props
3. **Avoid Prop Drilling**: Never pass state down through multiple component levels
4. **Keep Components Pure**: Components should be pure and focus only on rendering
5. **Consistent Styling**: Use Tailwind's utilities and shadcn components consistently
6. **Accessibility**: Ensure all components are accessible with proper ARIA attributes
7. **Responsive Design**: Make components adapt to different screen sizes
8. **Documentation**: Document component props with JSDoc comments
9. **Testing**: Test components in isolation with appropriate test cases

```tsx
/**
 * A card component for displaying product information
 * @param product - The product data to display
 * @param onAddToCart - Optional function to call when add to cart is clicked
 * @param className - Additional classes to apply to the component
 */
export function ProductCard({
  product,
  onAddToCart,
  className
}: ProductCardProps) {
  // Component implementation
}
```

By organizing components using atomic design principles, you create a scalable, maintainable UI architecture that complements the event-driven state management of the Quantum Reactor Pattern.
```

## Testing Page Content

```markdown
# Testing Quantum Reactor Applications

The Quantum Reactor Pattern is designed with testability in mind. Each architectural layer can be tested in isolation, creating a comprehensive test suite that ensures application reliability.

## Testing Approach

The testing strategy for Quantum Reactor applications follows these principles:

1. **Unit Testing**: Test individual functions, hooks, and components in isolation
2. **Integration Testing**: Test interactions between connected parts
3. **Schema-First Validation**: Verify schema structures and initial states
4. **Event-Driven Testing**: Test event handlers and state transitions
5. **Component Testing**: Test UI components with simulated user interactions

## Testing Tools

For a complete testing setup, you'll need:

- **Jest**: JavaScript testing framework
- **React Testing Library**: Component testing utilities
- **@testing-library/react-hooks**: Hook testing utilities
- **@testing-library/user-event**: Simulated user interactions
- **msw**: Mock Service Worker for API mocking

## Directory Structure

Organize tests to mirror your source code structure:

```
/src
  /components
    /atoms
      Button.tsx
    /molecules
      FormField.tsx
  /quantum
    /atoms
      userAtoms.ts
    /events
      userEvents.ts
  /hooks
    useUser.ts

/tests
  /components
    /atoms
      Button.test.tsx
    /molecules
      FormField.test.tsx
  /quantum
    /atoms
      userAtoms.test.ts
    /events
      userEvents.test.ts
  /hooks
    useUser.test.ts
  /integration
    userFlow.test.tsx
```

Alternatively, you can co-locate tests with source files:

```
/src
  /components
    /atoms
      Button.tsx
      Button.test.tsx
    /molecules
      FormField.tsx
      FormField.test.tsx
```

## Testing Schema and Atoms

Test your schemas to ensure they're well-formed and your atoms are correctly initialized:

```typescript
// tests/quantum/atoms/userAtoms.test.ts
import { snapshot_UNSTABLE } from 'recoil';
import { userStateAtom } from '../../../quantum/atoms/userAtoms';
import { initialUserState } from '../../../schema/UserSchema';

describe('userStateAtom', () => {
  test('should initialize with the correct default state', () => {
    const initialSnapshot = snapshot_UNSTABLE();
    const atomValue = initialSnapshot.getLoadable(userStateAtom).getValue();

    expect(atomValue).toEqual(initialUserState);
  });
});
```

## Testing Event Handlers

Test that event handlers update state correctly:

```typescript
// tests/quantum/events/userEvents.test.ts
import { renderHook, act } from '@testing-library/react-hooks';
import { RecoilRoot, snapshot_UNSTABLE } from 'recoil';
import { useUserEvents } from '../../../quantum/events/userEvents';
import { userStateAtom } from '../../../quantum/atoms/userAtoms';

describe('userEvents', () => {
  test('SET_NAME event should update user name', async () => {
    // Setup a wrapper with RecoilRoot
    const wrapper = ({ children }) => <RecoilRoot>{children}</RecoilRoot>;

    // Render the hook
    const { result } = renderHook(() => useUserEvents(), { wrapper });

    // Initial state
    const initialSnapshot = snapshot_UNSTABLE();
    const initialState = initialSnapshot.getLoadable(userStateAtom).getValue();
    expect(initialState.name).toBe('');

    // Dispatch the SET_NAME event
    act(() => {
      result.current({ type: 'SET_NAME', payload: 'John Doe' });
    });

    // Create a new snapshot to check the updated state
    const updatedSnapshot = snapshot_UNSTABLE();
    const updatedState = updatedSnapshot.getLoadable(userStateAtom).getValue();

    // Verify the name was updated
    expect(updatedState.name).toBe('John Doe');
    // Verify other state properties weren't modified
    expect(updatedState.id).toBe(initialState.id);
    expect(updatedState.email).toBe(initialState.email);
  });

  test('TOGGLE_THEME event should switch between light and dark themes', async () => {
    // Setup a wrapper with RecoilRoot and initial state
    const wrapper = ({ children }) => (
      <RecoilRoot initializeState={({ set }) => {
        set(userStateAtom, {
          ...initialState,
          preferences: {
            ...initialState.preferences,
            theme: 'light',
          }
        });
      }}>
        {children}
      </RecoilRoot>
    );

    // Render the hook
    const { result } = renderHook(() => useUserEvents(), { wrapper });

    // Dispatch the TOGGLE_THEME event
    act(() => {
      result.current({ type: 'TOGGLE_THEME' });
    });

    // Check the theme was toggled to dark
    let updatedSnapshot = snapshot_UNSTABLE();
    let updatedState = updatedSnapshot.getLoadable(userStateAtom).getValue();
    expect(updatedState.preferences.theme).toBe('dark');

    // Toggle again
    act(() => {
      result.current({ type: 'TOGGLE_THEME' });
    });

    // Check the theme was toggled back to light
    updatedSnapshot = snapshot_UNSTABLE();
    updatedState = updatedSnapshot.getLoadable(userStateAtom).getValue();
    expect(updatedState.preferences.theme).toBe('light');
  });
});
```

## Testing Custom Hooks

Test custom hooks to ensure they correctly integrate atoms, selectors, and events:

```typescript
// tests/hooks/useUser.test.tsx
import { renderHook, act } from '@testing-library/react-hooks';
import { RecoilRoot } from 'recoil';
import { useUser } from '../../hooks/useUser';
import { userStateAtom } from '../../quantum/atoms/userAtoms';

describe('useUser hook', () => {
  test('should provide user state and actions', () => {
    // Setup initial state
    const wrapper = ({ children }) => (
      <RecoilRoot initializeState={({ set }) => {
        set(userStateAtom, {
          id: '123',
          name: 'Initial Name',
          email: 'user@example.com',
          preferences: {
            theme: 'light',
            notifications: true,
          },
        });
      }}>
        {children}
      </RecoilRoot>
    );

    // Render the hook
    const { result } = renderHook(() => useUser(), { wrapper });

    // Check initial values
    expect(result.current.id).toBe('123');
    expect(result.current.name).toBe('Initial Name');
    expect(result.current.theme).toBe('light');

    // Execute actions
    act(() => {
      result.current.setName('New Name');
    });

    // Check updated values
    expect(result.current.name).toBe('New Name');

    act(() => {
      result.current.toggleTheme();
    });

    // Check theme was toggled
    expect(result.current.theme).toBe('dark');
  });

  test('isAuthenticated should be false when user has no ID', () => {
    const wrapper = ({ children }) => (
      <RecoilRoot initializeState={({ set }) => {
        set(userStateAtom, {
          id: null,
          name: '',
          email: '',
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

    expect(result.current.isAuthenticated).toBe(false);
  });
});
```

## Testing Components

Test UI components to ensure they render correctly and respond to user interactions:

```tsx
// tests/components/molecules/UserProfile.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { UserProfile } from '../../../components/molecules/UserProfile';
import { userStateAtom } from '../../../quantum/atoms/userAtoms';

// Mock the custom hook (optional approach)
jest.mock('../../../hooks/useUser', () => ({
  useUser: () => ({
    name: 'Test User',
    email: 'test@example.com',
    theme: 'light',
    setName: jest.fn(),
    toggleTheme: jest.fn(),
  }),
}));

describe('UserProfile', () => {
  test('renders user information', () => {
    render(
      <RecoilRoot>
        <UserProfile />
      </RecoilRoot>
    );

    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
  });

  test('renders with actual Recoil state', () => {
    render(
      <RecoilRoot initializeState={({ set }) => {
        set(userStateAtom, {
          id: '123',
          name: 'John Doe',
          email: 'john@example.com',
          preferences: {
            theme: 'dark',
            notifications: true,
          },
        });
      }}>
        <UserProfile />
      </RecoilRoot>
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  test('toggle theme button works', () => {
    // Unmock the hook for this test
    jest.unmock('../../../hooks/useUser');

    const mockToggleTheme = jest.fn();

    // Mock implementation for this specific test
    jest.mock('../../../hooks/useUser', () => ({
      useUser: () => ({
        name: 'Test User',
        email: 'test@example.com',
        theme: 'light',
        toggleTheme: mockToggleTheme,
      }),
    }));

    render(
      <RecoilRoot>
        <UserProfile />
      </RecoilRoot>
    );

    fireEvent.click(screen.getByRole('button', { name: /toggle theme/i }));

    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });
});
```

## Integration Testing

Test how multiple parts of your application work together:

```tsx
// tests/integration/userSettingsFlow.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RecoilRoot } from 'recoil';
import { UserSettingsPage } from '../../components/pages/UserSettingsPage';
import { userStateAtom } from '../../quantum/atoms/userAtoms';

// Mock API responses
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.put('/api/user/settings', (req, res, ctx) => {
    return res(
      ctx.json({ success: true })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('User Settings Flow', () => {
  test('user can update settings and see confirmation', async () => {
    render(
      <RecoilRoot initializeState={({ set }) => {
        set(userStateAtom, {
          id: '123',
          name: 'Original Name',
          email: 'user@example.com',
          preferences: {
            theme: 'light',
            notifications: true,
          },
        });
      }}>
        <UserSettingsPage />
      </RecoilRoot>
    );

    // Check initial state is rendered
    expect(screen.getByDisplayValue('Original Name')).toBeInTheDocument();

    // Update name field
    const nameInput = screen.getByLabelText(/name/i);
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, 'New User Name');

    // Toggle notifications off
    const notificationsSwitch = screen.getByRole('switch', { name: /notifications/i });
    await userEvent.click(notificationsSwitch);

    // Submit the form
    const submitButton = screen.getByRole('button', { name: /save changes/i });
    await userEvent.click(submitButton);

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(/settings saved successfully/i)).toBeInTheDocument();
    });

    // Verify the state was updated
    expect(screen.getByDisplayValue('New User Name')).toBeInTheDocument();
    expect(notificationsSwitch).not.toBeChecked();
  });

  test('displays error when API fails', async () => {
    // Override the mock to return an error
    server.use(
      rest.put('/api/user/settings', (req, res, ctx) => {
        return res(
          ctx.status(500),
          ctx.json({ error: 'Server error' })
        );
      })
    );

    render(
      <RecoilRoot>
        <UserSettingsPage />
      </RecoilRoot>
    );

    // Fill out and submit the form
    const nameInput = screen.getByLabelText(/name/i);
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, 'New Name');

    const submitButton = screen.getByRole('button', { name: /save changes/i });
    await userEvent.click(submitButton);

    // Check error message is shown
    await waitFor(() => {
      expect(screen.getByText(/failed to save settings/i)).toBeInTheDocument();
    });
  });
});
```

## Testing Selectors

Test that selectors correctly derive state:

```typescript
// tests/quantum/selectors/userSelectors.test.ts
import { snapshot_UNSTABLE } from 'recoil';
import { userStateAtom } from '../../../quantum/atoms/userAtoms';
import {
  userFullNameSelector,
  userThemeSelector,
  isUserAuthenticatedSelector
} from '../../../quantum/selectors/userSelectors';

describe('userSelectors', () => {
  test('userFullNameSelector combines first and last name', () => {
    const testSnapshot = snapshot_UNSTABLE(({ set }) => {
      set(userStateAtom, {
        id: '123',
        profile: {
          firstName: 'John',
          lastName: 'Doe',
        },
        // ... other properties
      });
    });

    const fullName = testSnapshot.getLoadable(userFullNameSelector).getValue();
    expect(fullName).toBe('John Doe');
  });

  test('userThemeSelector returns the current theme', () => {
    const testSnapshot = snapshot_UNSTABLE(({ set }) => {
      set(userStateAtom, {
        // ... other properties
        preferences: {
          theme: 'dark',
          notifications: true,
        },
      });
    });

    const theme = testSnapshot.getLoadable(userThemeSelector).getValue();
    expect(theme).toBe('dark');
  });

  test('isUserAuthenticatedSelector returns true when user has ID', () => {
    const authenticatedSnapshot = snapshot_UNSTABLE(({ set }) => {
      set(userStateAtom, {
        id: '123',
        // ... other properties
      });
    });

    const isAuthenticated = authenticatedSnapshot.getLoadable(isUserAuthenticatedSelector).getValue();
    expect(isAuthenticated).toBe(true);

    const unauthenticatedSnapshot = snapshot_UNSTABLE(({ set }) => {
      set(userStateAtom, {
        id: null,
        // ... other properties
      });
    });

    const isNotAuthenticated = unauthenticatedSnapshot.getLoadable(isUserAuthenticatedSelector).getValue();
    expect(isNotAuthenticated).toBe(false);
  });
});
```

## Test Utilities

Create reusable test utilities to make testing easier:

```typescript
// tests/testUtils.tsx
import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { RecoilRoot, MutableSnapshot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../components/ThemeProvider';

// Recoil state initializer type
type InitializeState = (mutableSnapshot: MutableSnapshot) => void;

interface RenderWithProvidersOptions {
  initializeState?: InitializeState;
  route?: string;
}

export function renderWithProviders(
  ui: ReactNode,
  { initializeState, route = '/' }: RenderWithProvidersOptions = {}
) {
  // Set up window.location for the test
  window.history.pushState({}, 'Test page', route);

  return render(
    <RecoilRoot initializeState={initializeState}>
      <BrowserRouter>
        <ThemeProvider>
          {ui}
        </ThemeProvider>
      </BrowserRouter>
    </RecoilRoot>
  );
}

// Mock hook factory
export function createMockHook<T>(defaultValue: T) {
  let value = defaultValue;

  const useHook = () => value;

  // Helper to set mock value for tests
  const setHookValue = (newValue: T) => {
    value = newValue;
  };

  return { useHook, setHookValue };
}
```

Usage example:

```typescript
// tests/components/organisms/ProductList.test.tsx
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../testUtils';
import { ProductList } from '../../../components/organisms/ProductList';
import { productsStateAtom } from '../../../quantum/atoms/productAtoms';

describe('ProductList', () => {
  test('renders products from Recoil state', () => {
    renderWithProviders(<ProductList />, {
      initializeState: ({ set }) => {
        set(productsStateAtom, {
          items: [
            { id: '1', name: 'Product 1', price: 9.99 },
            { id: '2', name: 'Product 2', price: 19.99 },
          ],
          status: 'loaded',
          error: null,
        });
      },
    });

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
    expect(screen.getByText('$9.99')).toBeInTheDocument();
    expect(screen.getByText('$19.99')).toBeInTheDocument();
  });

  test('shows loading state', () => {
    renderWithProviders(<ProductList />, {
      initializeState: ({ set }) => {
        set(productsStateAtom, {
          items: [],
          status: 'loading',
          error: null,
        });
      },
    });

    expect(screen.getByText('Loading products...')).toBeInTheDocument();
  });

  test('shows error state', () => {
    renderWithProviders(<ProductList />, {
      initializeState: ({ set }) => {
        set(productsStateAtom, {
          items: [],
          status: 'error',
          error: 'Failed to load products',
        });
      },
    });

    expect(screen.getByText('Failed to load products')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument();
  });
});
```

## Testing with Mocked Hooks

For some components, it might be easier to test with mocked hooks:

```typescript
// tests/components/organisms/UserDashboard.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserDashboard } from '../../../components/organisms/UserDashboard';

// Mock the hook
jest.mock('../../../hooks/useUser', () => ({
  useUser: () => ({
    name: 'John Doe',
    email: 'john@example.com',
    theme: 'light',
    isAuthenticated: true,
    toggleTheme: jest.fn(),
    logout: jest.fn(),
  }),
}));

describe('UserDashboard', () => {
  test('renders user information', () => {
    render(<UserDashboard />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  test('logout button calls logout function', async () => {
    // Reset mocks
    jest.resetModules();

    // Create a mock function for logout
    const mockLogout = jest.fn();

    // Mock the hook with our mock function
    jest.mock('../../../hooks/useUser', () => ({
      useUser: () => ({
        name: 'John Doe',
        email: 'john@example.com',
        theme: 'light',
        isAuthenticated: true,
        toggleTheme: jest.fn(),
        logout: mockLogout,
      }),
    }));

    render(<UserDashboard />);

    // Click logout button
    await userEvent.click(screen.getByRole('button', { name: /log out/i }));

    // Verify logout was called
    expect(mockLogout).toHaveBeenCalledTimes(1);
  });
});
```

## Testing Async Operations

Test asynchronous operations like API calls:

```typescript
// tests/quantum/events/productEvents.test.ts
import { renderHook, act } from '@testing-library/react-hooks';
import { RecoilRoot, snapshot_UNSTABLE } from 'recoil';
import { useProductEvents } from '../../../quantum/events/productEvents';
import { productsStateAtom } from '../../../quantum/atoms/productAtoms';

// Mock API
jest.mock('../../../api/products', () => ({
  fetchProducts: jest.fn(() => Promise.resolve([
    { id: '1', name: 'Product 1', price: 9.99 },
    { id: '2', name: 'Product 2', price: 19.99 },
  ])),
}));

describe('productEvents', () => {
  test('FETCH_PRODUCTS event should load products and update state', async () => {
    const wrapper = ({ children }) => <RecoilRoot>{children}</RecoilRoot>;

    const { result, waitForNextUpdate } = renderHook(() => useProductEvents(), { wrapper });

    // Initial state
    const initialSnapshot = snapshot_UNSTABLE();
    const initialState = initialSnapshot.getLoadable(productsStateAtom).getValue();
    expect(initialState.items).toEqual([]);
    expect(initialState.status).toBe('idle');

    // Dispatch the fetch event
    act(() => {
      result.current({ type: 'FETCH_PRODUCTS' });
    });

    // Wait for async operation to complete
    await waitForNextUpdate();

    // Check updated state
    const updatedSnapshot = snapshot_UNSTABLE();
    const updatedState = updatedSnapshot.getLoadable(productsStateAtom).getValue();

    expect(updatedState.status).toBe('loaded');
    expect(updatedState.items).toHaveLength(2);
    expect(updatedState.items[0].name).toBe('Product 1');
    expect(updatedState.items[1].name).toBe('Product 2');
  });

  test('FETCH_PRODUCTS handles API errors', async () => {
    // Override the mock to throw an error
    jest.mock('../../../api/products', () => ({
      fetchProducts: jest.fn(() => Promise.reject(new Error('API error'))),
    }));

    const wrapper = ({ children }) => <RecoilRoot>{children}</RecoilRoot>;

    const { result, waitForNextUpdate } = renderHook(() => useProductEvents(), { wrapper });

    // Dispatch the fetch event
    act(() => {
      result.current({ type: 'FETCH_PRODUCTS' });
    });

    // Wait for async operation to complete
    await waitForNextUpdate();

    // Check error state
    const errorSnapshot = snapshot_UNSTABLE();
    const errorState = errorSnapshot.getLoadable(productsStateAtom).getValue();

    expect(errorState.status).toBe('error');
    expect(errorState.error).toBe('API error');
  });
});
```

## Test Coverage

Configure Jest to collect test coverage:

```json
// package.json (excerpt)
{
  "jest": {
    "collectCoverageFrom": [
      "src/**/*.{ts,tsx}",
      "!src/**/*.d.ts",
      "!src/index.tsx",
      "!src/serviceWorker.ts"
    ],
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": 80
      }
    }
  }
}
```

Run coverage reports:

```bash
npm test -- --coverage
# or
yarn test --coverage
```

## Testing Best Practices

1. **Test Business Logic Thoroughly**: Focus on the event handlers and state transitions
2. **Don't Test Implementation Details**: Test behavior, not implementation
3. **Use Realistic Test Data**: Create mock data that closely resembles real data
4. **Isolate Tests**: Each test should be independent of others
5. **Use Test Utilities**: Create helper functions for common testing patterns
6. **Test Edge Cases**: Include tests for error states, empty states, and boundary conditions
7. **Keep Tests Fast**: Avoid unnecessary complexity that slows down tests
8. **Snapshot Tests with Caution**: Use for stable UI components, but don't over-rely on them

## Continuous Integration

Set up continuous integration to run tests on every commit:

```yaml
# .github/workflows/test.yml
name: Test

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Run type check
        run: npm run typecheck

      - name: Run linting
        run: npm run lint
```

## End-to-End Testing (Optional)

For complete testing coverage, consider adding end-to-end tests with Cypress:

```typescript
// cypress/integration/auth.spec.ts
describe('Authentication Flow', () => {
  it('allows a user to log in', () => {
    // Visit the login page
    cy.visit('/login');

    // Fill out the login form
    cy.findByLabelText(/email/i).type('user@example.com');
    cy.findByLabelText(/password/i).type('password123');

    // Submit the form
    cy.findByRole('button', { name: /sign in/i }).click();

    // Verify redirect to dashboard
    cy.url().should('include', '/dashboard');

    // Verify user is logged in
    cy.findByText(/welcome back/i).should('be.visible');
  });

  it('shows error message for invalid credentials', () => {
    // Visit the login page
    cy.visit('/login');

    // Fill out the login form with invalid credentials
    cy.findByLabelText(/email/i).type('user@example.com');
    cy.findByLabelText(/password/i).type('wrongpassword');

    // Submit the form
    cy.findByRole('button', { name: /sign in/i }).click();

    // Verify error message
    cy.findByText(/invalid email or password/i).should('be.visible');

    // Verify still on login page
    cy.url().should('include', '/login');
  });
});
```

By following these testing strategies, you can ensure that your Quantum Reactor application is robust, reliable, and easy to maintain as it grows in complexity.
```

## Simple App Example Page Content

```markdown
# Simple Todo App Example

This example shows how to implement a simple todo application using the Quantum Reactor Pattern. It demonstrates the core concepts of schema-first development, event-driven state management, and zero prop drilling.

## Schema Definition

First, we define the schema for our todo application:

```typescript
// schema/TodoSchema.ts
export type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
};

export type TodoState = {
  items: TodoItem[];
  filter: 'all' | 'active' | 'completed';
  loading: boolean;
  error: string | null;
};

export const initialTodoState: TodoState = {
  items: [],
  filter: 'all',
  loading: false,
  error: null,
};
```

## Atoms and Selectors

Next, we set up our atoms and selectors:

```typescript
// quantum/atoms/todoAtoms.ts
import { atom } from 'recoil';
import { TodoState, initialTodoState } from '../../schema/TodoSchema';

export const todoStateAtom = atom<TodoState>({
  key: 'todoState',
  default: initialTodoState,
});

// quantum/selectors/todoSelectors.ts
import { selector } from 'recoil';
import { todoStateAtom } from '../atoms/todoAtoms';

export const filteredTodosSelector = selector({
  key: 'filteredTodos',
  get: ({ get }) => {
    const todoState = get(todoStateAtom);
    const { items, filter } = todoState;

    switch (filter) {
      case 'active':
        return items.filter(item => !item.completed);
      case 'completed':
        return items.filter(item => item.completed);
      default:
        return items;
    }
  },
});

export const todoStatsSelector = selector({
  key: 'todoStats',
  get: ({ get }) => {
    const todoState = get(todoStateAtom);
    const { items } = todoState;

    const total = items.length;
    const completed = items.filter(item => item.completed).length;
    const uncompleted = total - completed;

    return {
      total,
      completed,
      uncompleted,
      percentComplete: total === 0 ? 0 : Math.round((completed / total) * 100),
    };
  },
});
```

## Event Definition and Handlers

Next, we define events and event handlers:

```typescript
// quantum/events/todoEvents.ts
import { useRecoilCallback } from 'recoil';
import { todoStateAtom } from '../atoms/todoAtoms';
import { v4 as uuidv4 } from 'uuid';

export type TodoEvent =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: string }
  | { type: 'REMOVE_TODO'; payload: string }
  | { type: 'CLEAR_COMPLETED' }
  | { type: 'SET_FILTER'; payload: 'all' | 'active' | 'completed' };

export const useTodoEvents = () => {
  const dispatch = useRecoilCallback(
    ({ set, snapshot }) => async (event: TodoEvent) => {
      const currentState = await snapshot.getPromise(todoStateAtom);

      switch (event.type) {
        case 'ADD_TODO':
          if (!event.payload.trim()) return; // Don't add empty todos

          set(todoStateAtom, {
            ...currentState,
            items: [
              ...currentState.items,
              {
                id: uuidv4(),
                text: event.payload,
                completed: false,
                createdAt: Date.now(),
              },
            ],
          });
          break;

        case 'TOGGLE_TODO':
          set(todoStateAtom, {
            ...currentState,
            items: currentState.items.map(item =>
              item.id === event.payload
                ? { ...item, completed: !item.completed }
                : item
            ),
          });
          break;

        case 'REMOVE_TODO':
          set(todoStateAtom, {
            ...currentState,
            items: currentState.items.filter(item => item.id !== event.payload),
          });
          break;

        case 'CLEAR_COMPLETED':
          set(todoStateAtom, {
            ...currentState,
            items: currentState.items.filter(item => !item.completed),
          });
          break;

        case 'SET_FILTER':
          set(todoStateAtom, {
            ...currentState,
            filter: event.payload,
          });
          break;
      }
    },
    []
  );

  return dispatch;
};
```

## Custom Hook

Now we create a custom hook to use in our components:

```typescript
// hooks/useTodo.ts
import { useRecoilValue } from 'recoil';
import { todoStateAtom } from '../quantum/atoms/todoAtoms';
import { filteredTodosSelector, todoStatsSelector } from '../quantum/selectors/todoSelectors';
import { useTodoEvents } from '../quantum/events/todoEvents';

export const useTodo = () => {
  const todoState = useRecoilValue(todoStateAtom);
  const filteredTodos = useRecoilValue(filteredTodosSelector);
  const stats = useRecoilValue(todoStatsSelector);
  const dispatch = useTodoEvents();

  return {
    todos: filteredTodos,
    filter: todoState.filter,
    stats,
    addTodo: (text: string) => dispatch({ type: 'ADD_TODO', payload: text }),
    toggleTodo: (id: string) => dispatch({ type: 'TOGGLE_TODO', payload: id }),
    removeTodo: (id: string) => dispatch({ type: 'REMOVE_TODO', payload: id }),
    clearCompleted: () => dispatch({ type: 'CLEAR_COMPLETED' }),
    setFilter: (filter: 'all' | 'active' | 'completed') =>
      dispatch({ type: 'SET_FILTER', payload: filter }),
  };
};
```

## Building Components

Now let's build our UI components following the atomic design methodology:

### Atoms

```tsx
// components/atoms/TodoItem.tsx
import { cn } from '../../lib/utils';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

export function TodoItem({ id, text, completed, onToggle, onRemove }: TodoItemProps) {
  return (
    <div className="flex items-center gap-2 p-3 border-b">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
        className="h-4 w-4 rounded border-gray-300"
      />
      <span className={cn("flex-1", completed && "line-through text-gray-400")}>
        {text}
      </span>
      <button
        onClick={() => onRemove(id)}
        className="text-red-500 hover:text-red-700"
      >
        ×
      </button>
    </div>
  );
}

// components/atoms/TodoInput.tsx
import { useState } from 'react';

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

export function TodoInput({ onAddTodo }: TodoInputProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 p-2 border rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}

// components/atoms/FilterButton.tsx
import { cn } from '../../lib/utils';

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export function FilterButton({ label, active, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-1 rounded",
        active
          ? "bg-blue-500 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      )}
    >
      {label}
    </button>
  );
}
```

### Molecules

```tsx
// components/molecules/TodoFilters.tsx
import { FilterButton } from '../atoms/FilterButton';

interface TodoFiltersProps {
  filter: 'all' | 'active' | 'completed';
  onFilterChange: (filter: 'all' | 'active' | 'completed') => void;
  onClearCompleted: () => void;
  hasCompleted: boolean;
}

export function TodoFilters({
  filter,
  onFilterChange,
  onClearCompleted,
  hasCompleted
}: TodoFiltersProps) {
  return (
    <div className="flex justify-between items-center mt-4">
      <div className="space-x-2">
        <FilterButton
          label="All"
          active={filter === 'all'}
          onClick={() => onFilterChange('all')}
        />
        <FilterButton
          label="Active"
          active={filter === 'active'}
          onClick={() => onFilterChange('active')}
        />
        <FilterButton
          label="Completed"
          active={filter === 'completed'}
          onClick={() => onFilterChange('completed')}
        />
      </div>

      {hasCompleted && (
        <button
          onClick={onClearCompleted}
          className="text-gray-500 hover:text-gray-700"
        >
          Clear completed
        </button>
      )}
    </div>
  );
}

// components/molecules/TodoList.tsx
import { TodoItem } from '../atoms/TodoItem';
import type { TodoItem as TodoItemType } from '../../schema/TodoSchema';

interface TodoListProps {
  todos: TodoItemType[];
  onToggleTodo: (id: string) => void;
  onRemoveTodo: (id: string) => void;
}

export function TodoList({ todos, onToggleTodo, onRemoveTodo }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="text-center p-4 text-gray-500">
        No todos to display
      </div>
    );
  }

  return (
    <div className="border rounded overflow-hidden">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onToggle={onToggleTodo}
          onRemove={onRemoveTodo}
        />
      ))}
    </div>
  );
}

// components/molecules/TodoStats.tsx
interface TodoStatsProps {
  total: number;
  completed: number;
  uncompleted: number;
  percentComplete: number;
}

export function TodoStats({
  total,
  completed,
  uncompleted,
  percentComplete
}: TodoStatsProps) {
  return (
    <div className="mt-4 text-sm text-gray-600">
      <div className="flex justify-between mb-2">
        <span>Total: {total}</span>
        <span>Completed: {completed}</span>
        <span>Active: {uncompleted}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${percentComplete}%` }}
        ></div>
      </div>
    </div>
  );
}
```

### Organisms

```tsx
// components/organisms/TodoApp.tsx
import { useTodo } from '../../hooks/useTodo';
import { TodoInput } from '../atoms/TodoInput';
import { TodoList } from '../molecules/TodoList';
import { TodoFilters } from '../molecules/TodoFilters';
import { TodoStats } from '../molecules/TodoStats';

export function TodoApp() {
  const {
    todos,
    filter,
    stats,
    addTodo,
    toggleTodo,
    removeTodo,
    clearCompleted,
    setFilter
  } = useTodo();

  return (
    <div className="max-w-lg mx-auto my-8 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Todo App</h1>

      <TodoInput onAddTodo={addTodo} />

      <TodoList
        todos={todos}
        onToggleTodo={toggleTodo}
        onRemoveTodo={removeTodo}
      />

      <TodoFilters
        filter={filter}
        onFilterChange={setFilter}
        onClearCompleted={clearCompleted}
        hasCompleted={stats.completed > 0}
      />

      <TodoStats
        total={stats.total}
        completed={stats.completed}
        uncompleted={stats.uncompleted}
        percentComplete={stats.percentComplete}
      />
    </div>
  );
}
```

## Main App Component

Finally, we put it all together in our main App component:

```tsx
// App.tsx
import { RecoilRoot } from 'recoil';
import { TodoApp } from './components/organisms/TodoApp';

export default function App() {
  return (
    <RecoilRoot>
      <div className="min-h-screen bg-gray-100 py-8">
        <TodoApp />
      </div>
    </RecoilRoot>
  );
}
```

## Persistence (Optional)

To add persistence, we can use Recoil's atom effects:

```typescript
// quantum/atoms/todoAtoms.ts
import { atom } from 'recoil';
import { TodoState, initialTodoState } from '../../schema/TodoSchema';

const localStorageEffect = key => ({setSelf, onSet}) => {
  const savedValue = localStorage.getItem(key);
  if (savedValue != null) {
    try {
      setSelf(JSON.parse(savedValue));
    } catch (e) {
      console.error('Failed to parse stored value', e);
    }
  }

  onSet((newValue, _, isReset) => {
    isReset
      ? localStorage.removeItem(key)
      : localStorage.setItem(key, JSON.stringify(newValue));
  });
};

export const todoStateAtom = atom<TodoState>({
  key: 'todoState',
  default: initialTodoState,
  effects: [
    localStorageEffect('todo_state')
  ]
});
```

## Testing

Let's add some tests to ensure everything works correctly:

```typescript
// __tests__/components/organisms/TodoApp.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { TodoApp } from '../../../components/organisms/TodoApp';

describe('TodoApp', () => {
  test('allows adding, completing, and removing todos', () => {
    render(
      <RecoilRoot>
        <TodoApp />
      </RecoilRoot>
    );

    // Initially no todos
    expect(screen.getByText('No todos to display')).toBeInTheDocument();

    // Add a todo
    fireEvent.change(screen.getByPlaceholderText('What needs to be done?'), {
      target: { value: 'Test todo item' }
    });
    fireEvent.click(screen.getByText('Add'));

    // Todo should be visible
    expect(screen.getByText('Test todo item')).toBeInTheDocument();

    // Stats should update
    expect(screen.getByText('Total: 1')).toBeInTheDocument();
    expect(screen.getByText('Active: 1')).toBeInTheDocument();

    // Toggle todo completion
    fireEvent.click(screen.getByRole('checkbox'));

    // Stats should update again
    expect(screen.getByText('Completed: 1')).toBeInTheDocument();
    expect(screen.getByText('Active: 0')).toBeInTheDocument();

    // Remove the todo
    fireEvent.click(screen.getByText('×'));

    // Should show empty state again
    expect(screen.getByText('No todos to display')).toBeInTheDocument();
  });

  test('allows filtering todos', async () => {
    render(
      <RecoilRoot>
        <TodoApp />
      </RecoilRoot>
    );

    // Add two todos
    fireEvent.change(screen.getByPlaceholderText('What needs to be done?'), {
      target: { value: 'Active todo' }
    });
    fireEvent.click(screen.getByText('Add'));

    fireEvent.change(screen.getByPlaceholderText('What needs to be done?'), {
      target: { value: 'Completed todo' }
    });
    fireEvent.click(screen.getByText('Add'));

    // Complete the second todo
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[1]);

    // Both todos should be visible
    expect(screen.getByText('Active todo')).toBeInTheDocument();
    expect(screen.getByText('Completed todo')).toBeInTheDocument();

    // Filter to show only active todos
    fireEvent.click(screen.getByText('Active'));

    // Only active todo should be visible
    expect(screen.getByText('Active todo')).toBeInTheDocument();
    expect(screen.queryByText('Completed todo')).not.toBeInTheDocument();

    // Filter to show only completed todos
    fireEvent.click(screen.getByText('Completed'));

    // Only completed todo should be visible
    expect(screen.queryByText('Active todo')).not.toBeInTheDocument();
    expect(screen.getByText('Completed todo')).toBeInTheDocument();

    // Clear completed todos
    fireEvent.click(screen.getByText('Clear completed'));

    // No todos should be visible
    expect(screen.getByText('No todos to display')).toBeInTheDocument();
  });
});
```

## Benefits of the Quantum Reactor Pattern in this Example

This simple todo app demonstrates several key benefits of the Quantum Reactor Pattern:

1. **Schema-First Development**: The entire application state is defined upfront in `TodoSchema.ts`
2. **Centralized State Logic**: All state transitions happen through event handlers in `todoEvents.ts`
3. **Zero Prop Drilling**: Components access state via the `useTodo` hook, with no props passed down for state
4. **Separation of Concerns**: UI components focus purely on presentation, while state logic lives in quantum
5. **Testability**: Each layer can be tested in isolation
6. **Scalability**: The pattern scales well as the application grows
7. **Composition**: Complex UI built from simple atomic components

By following the Quantum Reactor Pattern, even this simple todo app becomes more maintainable, testable, and extensible than traditional React patterns.
```

That completes the comprehensive VitePress documentation for the Quantum Reactor Pattern. The documentation includes:

1. A well-structured navigation system with sidebar categories
2. Detailed explanations of core concepts
3. Code examples for all major components
4. Testing strategies
5. Best practices
6. A complete example application

The documentation is designed to guide developers through understanding and implementing the Quantum Reactor Pattern in their React applications.
