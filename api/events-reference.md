# Events Reference

This section provides a detailed reference for all the events used in the Quantum Reactor Pattern.

## User Events

These events are used to manage user-related state.

### SET_NAME

Sets the user's name.

#### Payload

```typescript
string
```

#### Example Usage

```typescript
dispatch({ type: 'SET_NAME', payload: 'John Doe' });
```

### SET_EMAIL

Sets the user's email address.

#### Payload

```typescript
string
```

#### Example Usage

```typescript
dispatch({ type: 'SET_EMAIL', payload: 'john@example.com' });
```

### TOGGLE_THEME

Toggles the user's preferred theme between 'light' and 'dark'.

#### Payload

None

#### Example Usage

```typescript
dispatch({ type: 'TOGGLE_THEME' });
```

### LOGOUT

Logs the user out.

#### Payload

None

#### Example Usage

```typescript
dispatch({ type: 'LOGOUT' });
```

## Product Events

These events are used to manage product-related state.

### FETCH_PRODUCTS_REQUEST

Indicates that a request to fetch products has been initiated.

#### Payload

None

#### Example Usage

```typescript
dispatch({ type: 'FETCH_PRODUCTS_REQUEST' });
```

### FETCH_PRODUCTS_SUCCESS

Indicates that products have been successfully fetched.

#### Payload

```typescript
Product[]
```

#### Example Usage

```typescript
dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: products });
```

### FETCH_PRODUCTS_FAILURE

Indicates that an error occurred while fetching products.

#### Payload

```typescript
string
```

#### Example Usage

```typescript
dispatch({ type: 'FETCH_PRODUCTS_FAILURE', payload: 'Failed to fetch products' });
```

## Cart Events

These events are used to manage cart-related state.

### ADD_TO_CART

Adds an item to the cart.

#### Payload

```typescript
{
  productId: string;
  quantity: number;
}
```

#### Example Usage

```typescript
dispatch({ type: 'ADD_TO_CART', payload: { productId: '123', quantity: 1 } });
```

### REMOVE_FROM_CART

Removes an item from the cart.

#### Payload

```typescript
string
```

#### Example Usage

```typescript
dispatch({ type: 'REMOVE_FROM_CART', payload: '123' });
```

### UPDATE_QUANTITY

Updates the quantity of an item in the cart.

#### Payload

```typescript
{
  productId: string;
  quantity: number;
}
```

#### Example Usage

```typescript
dispatch({ type: 'UPDATE_QUANTITY', payload: { productId: '123', quantity: 2 } });
```

## Auth Events

These events are used to manage authentication-related state.

### REGISTER_REQUEST

Indicates that a registration request has been initiated.

#### Payload

```typescript
{
  email: string;
  password: string;
  name: string;
}
```

#### Example Usage

```typescript
dispatch({ type: 'REGISTER_REQUEST', payload: { email: 'test@example.com', password: 'password', name: 'John Doe' } });
```

### REGISTER_SUCCESS

Indicates that registration was successful.

#### Payload

```typescript
User
```

#### Example Usage

```typescript
dispatch({ type: 'REGISTER_SUCCESS', payload: { id: '123', name: 'John Doe', email: 'test@example.com' } });
```

### REGISTER_FAILURE

Indicates that registration failed.

#### Payload

```typescript
string
```

#### Example Usage

```typescript
dispatch({ type: 'REGISTER_FAILURE', payload: 'Registration failed' });
```

### LOGIN_REQUEST

Indicates that a login request has been initiated.

#### Payload

```typescript
{
  email: string;
  password: string;
}
```

#### Example Usage

```typescript
dispatch({ type: 'LOGIN_REQUEST', payload: { email: 'test@example.com', password: 'password' } });
```

### LOGIN_SUCCESS

Indicates that login was successful.

#### Payload

```typescript
User
```

#### Example Usage

```typescript
dispatch({ type: 'LOGIN_SUCCESS', payload: { id: '123', name: 'John Doe', email: 'test@example.com' } });
```

### LOGIN_FAILURE

Indicates that login failed.

#### Payload

```typescript
string
```

#### Example Usage

```typescript
dispatch({ type: 'LOGIN_FAILURE', payload: 'Login failed' });
```
