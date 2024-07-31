import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Services from './Pages/Services.jsx';
import AboutUs from './Pages/AboutUs/AboutUs.jsx';
import Login from './Pages/Login/Login.jsx'
import Events from './Pages/Events/Events.jsx';
import Service from './Pages/Service/Service.jsx';
import Register from './Pages/Register/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "events",
        element: <Events></Events>,
        loader:()=>fetch('/events.json')
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "service/:id",
        element: <Service></Service>,
        loader:()=>fetch('/services.json')
      },
      {
        path: "aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
