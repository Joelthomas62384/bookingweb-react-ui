import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from './app/HomePage.jsx'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider.jsx'





const router = createBrowserRouter([
    {
        path: '/',
        element:<App/>,
        children:[
            {
                path: '/',
                element:<HomePage/>
            }
        ]
    }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
   <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
     <RouterProvider router={router} />
     </ThemeProvider>
    </Provider>
  </StrictMode>,
)
