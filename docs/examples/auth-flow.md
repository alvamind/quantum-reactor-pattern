# Authentication Flow Example

This example demonstrates how to implement a user authentication flow using the Quantum Reactor Pattern. It covers:

- User registration
- User login
- User logout
- Protected routes
- Session management

## Schema Definition

First, we define the schema for our authentication flow:

```typescript
// schema/AuthSchema.ts
export type User = {
  id: string;
  name: string;
  email: string;
};

export type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
};

export const initialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};
```

## Atoms and Selectors

Next, we set up our atoms and selectors:

```typescript
// quantum/atoms/authAtoms.ts
import { atom } from 'recoil';
import { AuthState, initialAuthState } from '../../schema/AuthSchema';

export const authStateAtom = atom<AuthState>({
  key: 'authState',
  default: initialAuthState,
});

// quantum/selectors/authSelectors.ts
import { selector } from 'recoil';
import { authStateAtom } from '../atoms/authAtoms';

export const isAuthenticatedSelector = selector({
  key: 'isAuthenticated',
  get: ({ get }) => {
    const authState = get(authStateAtom);
    return authState.isAuthenticated;
  },
});

export const userSelector = selector({
  key: 'userSelector',
  get: ({ get }) => {
    const authState = get(authStateAtom);
    return authState.user;
  },
});
```

## Event Definition and Handlers

Next, we define events and event handlers:

```typescript
// quantum/events/authEvents.ts
import { useRecoilCallback } from 'recoil';
import { authStateAtom } from '../atoms/authAtoms';
import { fakeAuth } from '../../lib/api/fakeAuth'; // Replace with your actual API

export type AuthEvent =
  | { type: 'LOGIN_REQUEST' }
  | { type: 'LOGIN_SUCCESS'; payload: { user: User } }
  | { type: 'LOGIN_FAILURE'; payload: { error: string } }
  | { type: 'LOGOUT' }
  | { type: 'REGISTER_REQUEST'; payload: { name: string; email: string; password: string } }
  | { type: 'REGISTER_SUCCESS'; payload: { user: User } }
  | { type: 'REGISTER_FAILURE'; payload: { error: string } };

export const useAuthEvents = () => {
  const dispatch = useRecoilCallback(
    ({ set }) => async (event: AuthEvent) => {
      switch (event.type) {
        case 'LOGIN_REQUEST':
          set(authStateAtom, prevState => ({ ...prevState, loading: true, error: null }));
          break;

        case 'LOGIN_SUCCESS':
          set(authStateAtom, prevState => ({
            ...prevState,
            user: event.payload.user,
            isAuthenticated: true,
            loading: false,
            error: null,
          }));
          break;

        case 'LOGIN_FAILURE':
          set(authStateAtom, prevState => ({
            ...prevState,
            user: null,
            isAuthenticated: false,
            loading: false,
            error: event.payload.error,
          }));
          break;

        case 'LOGOUT':
          set(authStateAtom, initialAuthState);
          break;

        case 'REGISTER_REQUEST':
          set(authStateAtom, prevState => ({ ...prevState, loading: true, error: null }));
          break;

        case 'REGISTER_SUCCESS':
          set(authStateAtom, prevState => ({
            ...prevState,
            user: event.payload.user,
            isAuthenticated: true,
            loading: false,
            error: null,
          }));
          break;

        case 'REGISTER_FAILURE':
          set(authStateAtom, prevState => ({
            ...prevState,
            user: null,
            isAuthenticated: false,
            loading: false,
            error: event.payload.error,
          }));
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
// hooks/useAuth.ts
import { useRecoilValue } from 'recoil';
import { authStateAtom } from '../quantum/atoms/authAtoms';
import { isAuthenticatedSelector, userSelector } from '../quantum/selectors/authSelectors';
import { useAuthEvents } from '../quantum/events/authEvents';
import { fakeAuth } from '../../lib/api/fakeAuth'; // Replace with your actual API

export const useAuth = () => {
  const authState = useRecoilValue(authStateAtom);
  const isAuthenticated = useRecoilValue(isAuthenticatedSelector);
  const user = useRecoilValue(userSelector);
  const dispatch = useAuthEvents();

  const login = async (email: string, password: string) => {
    dispatch({ type: 'LOGIN_REQUEST' });
    try {
      const user = await fakeAuth.login(email, password); // Replace with your actual API call
      dispatch({ type: 'LOGIN_SUCCESS', payload: { user } });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: { error: error.message } });
    }
  };

  const register = async (name: string, email: string, password: string) => {
    dispatch({ type: 'REGISTER_REQUEST', payload: { name, email, password } });
    try {
      const user = await fakeAuth.register(name, email, password); // Replace with your actual API call
      dispatch({ type: 'REGISTER_SUCCESS', payload: { user } });
    } catch (error) {
      dispatch({ type: 'REGISTER_FAILURE', payload: { error: error.message } });
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return {
    user,
    isAuthenticated,
    loading: authState.loading,
    error: authState.error,
    login,
    register,
    logout,
  };
};
```

## Building Components

Now let's build our UI components:

### Login Component

```tsx
// components/Login.tsx
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Loading...' : 'Login'}
      </button>
    </form>
  );
};
```

### Register Component

```tsx
// components/Register.tsx
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, loading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(name, email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Loading...' : 'Register'}
      </button>
    </form>
  );
};
```

### Protected Route Component

```tsx
// components/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
```

## Session Management

For session management, you can use Recoil's atom effects to persist the authentication state to localStorage:

```typescript
// quantum/atoms/authAtoms.ts
import { atom } from 'recoil';
import { AuthState, initialAuthState } from '../../schema/AuthSchema';

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: any) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const authStateAtom = atom<AuthState>({
  key: 'authState',
  default: initialAuthState,
  effects: [localStorageEffect('auth_state')],
});
```

## Testing

The authentication flow should be thoroughly tested to ensure that users can register, login, logout, and access protected routes correctly.

## Benefits of the Quantum Reactor Pattern in this Example

This authentication flow example demonstrates how the Quantum Reactor Pattern can be used to build complex features with a clear separation of concerns and a predictable state management system. By using schema-first development, event-driven state management, and custom hooks, the authentication flow remains organized, testable, and maintainable.
