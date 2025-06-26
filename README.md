# ⚡ trhgatu-inf-vite-frontend-template

<div align="center">

![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764abc?style=for-the-badge&logo=redux&logoColor=white)

**A lightning-fast, production-ready Vite 5 template with React 18, TypeScript, Redux Toolkit, admin-first architecture, and automated CI/CD pipeline.**

[🚀 Quick Start](#-quick-start) • [📖 Documentation](#-features) • [🤝 Contributing](#-contributing) • [💬 Support](#-support)

</div>

---

## ✨ Features

<table>
<tr>
<td>

**⚡ Performance**
- Vite 5 lightning-fast HMR
- React 18 concurrent features
- Optimized build pipeline
- Tree-shaking enabled

</td>
<td>

**🏗️ Architecture**
- Admin-first design
- Feature-based organization
- Modular folder structure
- Route protection system

</td>
</tr>
<tr>
<td>

**🔐 Authentication**
- Complete auth flow
- Protected routes
- Auth state persistence
- Form validation with Zod

</td>
<td>

**🛠️ Developer Experience**
- TypeScript for type safety
- ESLint + Prettier
- GitHub Actions CI/CD
- Hot module replacement

</td>
</tr>
</table>

---

## 🧠 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Build Tool** | Vite 5 |
| **Framework** | React 18 |
| **Language** | TypeScript |
| **State Management** | Redux Toolkit, RTK Query |
| **HTTP Client** | Axios |
| **Validation** | Zod |
| **Routing** | React Router DOM |
| **Testing** | Vitest, React Testing Library |
| **Linting** | ESLint, Prettier |
| **CI/CD** | GitHub Actions |

---

## 📁 Project Structure

```
trhgatu-inf-vite-frontend-template/
├── 📁 src/
│   ├── 📁 features/               # Feature modules
│   │   ├── 📁 auth/               # Authentication feature
│   │   │   ├── 📄 hooks.ts        # Auth hooks
│   │   │   ├── 📄 services.ts     # Auth API services
│   │   │   ├── 📄 schemas.ts      # Validation schemas
│   │   │   └── 📄 types.ts        # Auth types
│   │   ├── 📁 dashboard/          # Dashboard feature
│   │   ├── 📁 users/              # User management
│   │   └── 📁 errors/             # Error handling
│   ├── 📁 layouts/                # Layout components
│   │   ├── 📄 AdminLayout.tsx     # Admin panel layout
│   │   └── 📄 AuthLayout.tsx      # Authentication layout
│   ├── 📁 routes/                 # Routing configuration
│   │   ├── 📄 AppRouter.tsx       # Main router
│   │   ├── 📄 ProtectedRoute.tsx  # Route protection
│   │   └── 📄 AuthGate.tsx        # Auth gate component
│   ├── 📁 components/             # Reusable components
│   │   ├── 📁 shared/             # Shared UI components
│   │   └── 📁 forms/              # Form components
│   ├── 📁 hooks/                  # Custom hooks
│   │   └── 📄 useAuth.ts          # Authentication hook
│   ├── 📁 services/               # API services
│   │   ├── 📄 api.ts              # Axios configuration
│   │   └── 📄 endpoints.ts        # API endpoints
│   ├── 📁 store/                  # Redux store
│   │   ├── 📄 index.ts            # Store configuration
│   │   ├── 📄 provider.tsx        # Redux provider
│   │   └── 📁 slices/             # Redux slices
│   │       ├── 📄 authSlice.ts    # Auth state slice
│   │       └── 📄 appSlice.ts     # App state slice
│   ├── 📁 types/                  # TypeScript definitions
│   │   ├── 📄 api.ts              # API types
│   │   └── 📄 common.ts           # Common types
│   ├── 📁 utils/                  # Utility functions
│   │   └── 📄 helpers.ts          # Helper functions
│   ├── 📄 App.tsx                 # Main App component
│   └── 📄 main.tsx                # Application entry point
├── 📁 .github/workflows/          # GitHub Actions
│   └── 📄 ci.yml                  # CI/CD pipeline
├── 📄 vite.config.ts              # Vite configuration
├── 📄 tsconfig.json               # TypeScript configuration
├── 📄 .eslintrc.json              # ESLint configuration
├── 📄 .prettierrc                 # Prettier configuration
├── 📄 .env.example                # Environment variables template
└── 📄 package.json                # Dependencies & scripts
```

---

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/trhgatu/trhgatu-inf-vite-frontend-template.git
   cd trhgatu-inf-vite-frontend-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:5173](http://localhost:5173) to see your application.

---

## 🔐 Authentication System

The template includes a comprehensive authentication system designed for admin panels:

- **Admin Login**: `/admin/login` with form validation
- **Route Protection**: `ProtectedRoute` and `AuthGate` components
- **State Persistence**: Auth state survives page refreshes
- **Type Safety**: Full TypeScript support
- **Validation**: Zod schema validation

### Usage Example

```typescript
import { useAuth } from '@/hooks/useAuth';

function AdminDashboard() {
  const { user, isAuthenticated, login, logout } = useAuth();
  
  if (!isAuthenticated) {
    return <div>Redirecting to login...</div>;
  }
  
  return (
    <div>
      <h1>Welcome to Admin Panel, {user?.name}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

### Auth Flow

```typescript
// Login process
const handleLogin = async (credentials: LoginCredentials) => {
  try {
    const response = await authService.login(credentials);
    dispatch(setAuth(response.data));
    navigate('/admin/dashboard');
  } catch (error) {
    // Handle error
  }
};
```

---

## 🏗️ Architecture Overview

### Feature-Based Organization

Each feature is self-contained with its own:
- **Components**: Feature-specific UI components
- **Hooks**: Custom hooks for business logic
- **Services**: API calls and data fetching
- **Types**: TypeScript interfaces
- **Schemas**: Validation schemas

### Layout System

- **AdminLayout**: Main admin panel layout with sidebar navigation
- **AuthLayout**: Clean layout for login/register pages
- **Responsive**: Mobile-first design approach

---

## ⚡ Performance Optimizations

### Vite 5 Features
- **Lightning Fast HMR**: Sub-second hot module replacement
- **Optimized Build**: Tree-shaking and code splitting
- **ES Modules**: Native ESM support
- **Plugin Ecosystem**: Rich plugin ecosystem

### React 18 Features
- **Concurrent Features**: Improved user experience
- **Automatic Batching**: Better performance
- **Suspense**: Better loading states

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run type-check` | Run TypeScript compiler |
| `npm run test` | Run tests with Vitest |

---

## 🧪 CI/CD Pipeline

Automated workflow with GitHub Actions (`.github/workflows/ci.yml`):

```yaml
✅ Code Quality Checks
  ├── ESLint validation
  ├── Prettier formatting
  ├── TypeScript compilation
  └── Unit tests with Vitest

✅ Build & Deploy
  ├── Production build
  ├── Build artifact caching
  └── Deployment (when configured)
```

The pipeline runs on:
- Push to `main` branch
- Pull requests to `main`
- Manual workflow dispatch

---

## 📦 Key Dependencies

### Core
- **vite**: ^5.0.0
- **react**: ^18.0.0
- **react-dom**: ^18.0.0
- **typescript**: ^5.0.0

### Routing & State
- **react-router-dom**: ^6.8.0
- **@reduxjs/toolkit**: ^1.9.0
- **react-redux**: ^8.1.0

### Validation & HTTP
- **zod**: ^3.22.0
- **axios**: ^1.5.0

### Development & Testing
- **vitest**: ^0.34.0
- **@testing-library/react**: ^13.4.0
- **eslint**: ^8.50.0
- **prettier**: ^3.0.0

---

## 🎯 Customization

### Adding New Features

1. **Create Feature Directory**
   ```bash
   mkdir src/features/my-feature
   cd src/features/my-feature
   ```

2. **Add Feature Files**
   ```
   my-feature/
   ├── components/
   ├── hooks/
   ├── services/
   ├── types.ts
   └── index.ts
   ```

3. **Create Redux Slice**
   ```typescript
   // src/store/slices/myFeatureSlice.ts
   import { createSlice } from '@reduxjs/toolkit';
   
   export const myFeatureSlice = createSlice({
     name: 'myFeature',
     initialState: {},
     reducers: {}
   });
   ```

### Environment Configuration

Create `.env.local` for local development:

```env
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=Admin Panel
VITE_APP_VERSION=1.0.0
```

### Styling Customization

The template uses CSS modules and styled-components patterns:

```typescript
// Component styling
const StyledButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }
`;
```

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "preview"]
```

### Other Platforms
- **Railway**: One-click deployment
- **AWS S3**: Static hosting with CloudFront
- **GitHub Pages**: Free static hosting

---

## 🧪 Testing Strategy

### Unit Testing with Vitest
```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  it('renders login form correctly', () => {
    render(<LoginForm />);
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });
});
```

### Integration Testing
```typescript
import { renderWithProviders } from '@/utils/test-utils';
import { AuthProvider } from '@/features/auth';

describe('Auth Integration', () => {
  it('handles login flow correctly', async () => {
    // Test implementation
  });
});
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. **Fork the repository**
2. **Create your feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Code Standards

- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation when needed

---

## 📚 Learning Resources

### Vite Resources
- [Vite Official Guide](https://vitejs.dev/guide/)
- [Vite Plugin Ecosystem](https://vitejs.dev/plugins/)

### React & TypeScript
- [React 18 Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### State Management
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [RTK Query Guide](https://redux-toolkit.js.org/rtk-query/overview)

---

## 🐛 Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process on port 5173
npx kill-port 5173
```

**Module resolution errors**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build failures**
```bash
# Check TypeScript errors
npm run type-check
```

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💬 Support

- 📧 **Email**: [trhgatu@example.com](mailto:trhgatu@example.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/trhgatu/trhgatu-inf-vite-frontend-template/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/trhgatu/trhgatu-inf-vite-frontend-template/discussions)
- 📖 **Wiki**: [Project Wiki](https://github.com/trhgatu/trhgatu-inf-vite-frontend-template/wiki)

---

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) team for the blazing fast build tool
- [React](https://react.dev/) team for the amazing framework
- [Redux Toolkit](https://redux-toolkit.js.org/) for simplified state management
- [TypeScript](https://www.typescriptlang.org/) for making JavaScript better

---

<div align="center">

**Built with ⚡ by [Infinity (trhgatu)](https://github.com/trhgatu)**

*"Every layout, every route, every pixel – a reflection of the warrior within."*

⭐ **Star this repo if you found it helpful!**

</div>
