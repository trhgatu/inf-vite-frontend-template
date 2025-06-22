import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        {/* This is where the child routes will be rendered */}
        <Outlet />
      </div>
    </div>
  )
}