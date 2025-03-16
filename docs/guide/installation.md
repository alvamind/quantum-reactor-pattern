# Installation

Setting up the Quantum Reactor Pattern in your React project is straightforward. Follow these steps to get started with this architecture pattern.

## Prerequisites

- Node.js 14.x or higher
- npm 7.x or higher (or yarn/pnpm)
- React 17.x or higher

## Basic Installation

### 1. Create a new React project (if needed)

If you're starting from scratch, create a new React project:

```bash
npx create-react-app my-quantum-app
# or with TypeScript
npx create-react-app my-quantum-app --template typescript
```

### 2. Install dependencies

```bash
# Navigate to your project
cd my-quantum-app

# Install core dependencies
npm install recoil shadcn-ui

# Install utility libraries
npm install clsx tailwind-merge @types/node
```

### 3. Set up the project structure

Create the following directory structure for your Quantum Reactor Pattern:

```
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   └── pages/
├── state/
│   ├── atoms/
│   ├── selectors/
│   └── events/
├── hooks/
└── utils/
```

You can create this structure with:

```bash
mkdir -p src/components/{atoms,molecules,organisms,templates,pages}
mkdir -p src/state/{atoms,selectors,events}
mkdir -p src/hooks src/utils
```

## Next Steps

After installation, check out the [Directory Structure](/guide/directory-structure) guide to understand how to organize your code, or go to [Core Concepts](/guide/core-concepts) to learn the fundamental principles of the Quantum Reactor Pattern.
