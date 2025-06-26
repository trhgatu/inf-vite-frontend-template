# ⚡ trhgatu-inf-vite-frontend-template

<p align="center">
  <b>A modular, admin-first Vite + React + TypeScript template with modern folder structure, state management, auth flow, and CI/CD.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vite-5.0-purple?style=flat-square&logo=vite" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=flat-square&logo=typescript" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-ready-764abc?style=flat-square&logo=redux" />
</p>

---

## 🧠 Tech Stack

- **Vite 5** – Lightning-fast dev server
- **React 18** – Functional component architecture
- **TypeScript** – Safer, typed JS
- **Redux Toolkit** – Global state handling
- **Zod** – Schema validation
- **Axios Instance** – Centralized API config
- **CI/CD** – GitHub Actions enabled

---

## 📁 Folder Structure

```
trhgatu-inf-vite-frontend-template/
├── src/
│   ├── features/         # Modular business logic (auth, users, dashboard, errors)
│   ├── layouts/          # Shared layouts (admin, auth)
│   ├── routes/           # App routing + guards
│   ├── components/       # Reusable layout elements
│   ├── hooks/            # Custom hooks
│   ├── services/         # Axios instance
│   ├── store/            # Redux slices
│   └── types/            # Global types
├── .github/workflows/ci.yml # GitHub Actions
├── vite.config.ts        # Vite config
├── .env.example          # Env template
└── tsconfig.json + eslint + prettier
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/trhgatu/trhgatu-inf-vite-frontend-template.git
cd trhgatu-inf-vite-frontend-template
npm install
npm run dev
```

---

## 🔐 Auth Flow

- Login page at `/admin/login`
- `AuthGate` + `ProtectedRoute` for route protection
- Restore auth state on refresh
- Form validation with Zod

---

## 🧪 CI/CD – GitHub Actions

Runs on push/pull to `main` branch:

- ✅ Install deps
- ✅ Lint
- ✅ Format
- ✅ Build Vite app

---

## 🧼 Code Style

- ESLint + Prettier configured

```bash
npm run lint
npm run format
```

---

## 📜 License

[MIT](./LICENSE)

---

## 🧙 Author

Built with ❤️ by [Infinity (trhgatu)](https://github.com/trhgatu)  
“Every layout, every route, every pixel – a reflection of the warrior within.”
