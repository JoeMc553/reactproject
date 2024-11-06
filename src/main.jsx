import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Dashboard from "./routes/Dashboard.jsx"
import Contact from "./routes/Contact.jsx"
import Signup from './routes/Signup.jsx'

const router = createBrowserRouter  ([
  {path: "/reactproject/", element: <App />},
  {path: "*", element: <NotFound /> },
  {path: "/dashboard", element: <Dashboard />},
  {path: "/contact", element: <Contact />},
  {path: "/signup", element: <Signup />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
