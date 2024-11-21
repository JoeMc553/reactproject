import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Dashboard from "./routes/Dashboard.jsx"
import Contact from "./routes/Contact.jsx"
import Signup from './routes/Signup.jsx'
import Creategroup from './routes/Creategroup.jsx'
import CreateTask from './routes/CreateTask.jsx'
import Findgroup from './routes/Findgroup.jsx'
import Friends from './routes/Friends.jsx'
import Profile from './routes/Profile.jsx'
import Resources from './routes/Resources.jsx'


const router = createBrowserRouter  ([
  {path: "/reactproject/", element: <App />},
  {path: "/reactproject/dashboard", element: <Dashboard />},
  {path: "/reactproject/contact", element: <Contact />},
  {path: "/reactproject/signup", element: <Signup />},
  
  {path: "/reactproject/creategroup", element: <Creategroup />},
  {path: "/reactproject/createtask", element: <CreateTask />},
  {path: "/reactproject/findgroup", element: <Findgroup />},
  {path: "/reactproject/friends", element: <Friends />},
  {path: "/reactproject/profile", element: <Profile />},
  {path: "/reactproject/resources", element: <Resources />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
