# AI Rules and Guidelines for Fake Store Project

## Project Overview
This is a Next.js application for a fake e-commerce store using the FakeStore API.

## Technologies Used
- Next.js 16 with App Router
- React 19
- TypeScript
- Material-UI (MUI) v9
- React Query v5
- Axios for API calls
- Jest and @testing-library/react for testing

## SOLID Principles
- **Single Responsibility**: Each component has a single responsibility (e.g., ProductCard displays product info, Header handles navigation).
- **Open/Closed**: Components are open for extension but closed for modification (e.g., using props for customization).
- **Liskov Substitution**: Not directly applicable in React components.
- **Interface Segregation**: Types are minimal and focused (Product interface).
- **Dependency Inversion**: High-level modules don't depend on low-level modules; abstractions are used (API service layer).

## Next.js Rendering Principles
- **SSR**: Product detail pages use Server Components for initial data fetching and SEO.
- **SSG**: Could be used for static product lists, but currently using client-side with React Query for dynamic updates.
- **ISR**: Not implemented, but could be added for product list caching.

## Material-UI Usage
- Consistent theming and components (Cards, Typography, Buttons, etc.).
- Responsive design with sx prop for styling.
- Icons from @mui/icons-material (not used due to installation issues, but recommended).

## React Query v5
- Used for client-side data fetching and caching.
- Query keys for cache management.
- Loading and error states handled.

## Code Organization
- Components in /components
- Services in /service
- Types in root
- Pages in /app
- Tests in /__tests__

## Hooks
- Custom hooks not used extensively, but React Query provides useQuery hook.
- State management with useState for pagination.

## Testing
- Unit tests for components using Jest and React Testing Library.
- Focus on rendering and user interactions.

## Deployment
- Ready for Vercel deployment with Next.js build process.
- Environment variables can be added for API URLs if needed.

## Best Practices
- TypeScript for type safety.
- ESLint for code quality.
- Responsive design.
- Accessibility considerations with MUI components.
- Error handling and loading states.