# CRUSH.md

## Build/Development Commands
- `bun dev` - Start all apps in development mode
- `bun dev:web` - Start only web app on port 3001
- `bun build` - Build all apps
- `bun check-types` - Run TypeScript type checking
- `turbo lint` - Run linting across all apps (if configured)

## Code Style Guidelines

### Imports & TypeScript
- Use `verbatimModuleSyntax` - always import with `import type` for types
- Path aliases: `@/*` maps to `./src/*`
- Strict TypeScript enabled
- ESNext target with ES modules

### React & Components
- Use React 19 with JSX transform
- TanStack Router for file-based routing
- Class Variance Authority (CVA) for component variants
- Radix UI primitives with custom styling
- Tailwind CSS v4 with `@/lib/utils.ts` for `cn()` utility

### Naming Conventions
- PascalCase for components and types
- camelCase for functions and variables
- kebab-case for files and folders
- Use descriptive, semantic names

### Error Handling
- Use Zod for schema validation
- TanStack Query for data fetching and caching
- Sonner for toast notifications

### Project Structure
- Turborepo monorepo with apps in `apps/*`
- Components in `src/components/` with UI primitives in `ui/` subfolder
- Routes in `src/routes/` using file-based routing