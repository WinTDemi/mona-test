import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './application/globalCSS/index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './application/store/store.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
