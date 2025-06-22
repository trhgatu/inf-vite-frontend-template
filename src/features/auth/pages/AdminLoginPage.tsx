import { LoginForm } from '../components/LoginForm'

export const AdminLoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-4">Admin Login</h1>
        <LoginForm />
      </div>
    </div>
  )
}
