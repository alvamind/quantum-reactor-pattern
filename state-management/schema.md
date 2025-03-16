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