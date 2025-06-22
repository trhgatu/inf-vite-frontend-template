import { Outlet } from 'react-router-dom'
import { Sidebar } from '@/components/layout/Sidebar'
import { Header } from '@/components/layout/Header'

export const AdminLayout= () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-4 overflow-y-auto flex-1 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
