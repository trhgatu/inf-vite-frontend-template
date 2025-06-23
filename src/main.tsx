import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { store } from '@/store'
import { Provider } from 'react-redux'
import { AuthGate } from '@/features/auth/components/AuthGate.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AuthGate>
        <App />
      </AuthGate>
    </Provider>
  </StrictMode>,
)
