import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Home';
import Errorpage from './Errorpage';
import About from './About/About';
import Contact from './Contact/Contact';
import Offer from './Navbar/Offer/Offer';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Register from './Register/Register';
import Login from './Login/Login';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },{
        path:'/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element:<Contact></Contact>
      },
      {
        path:'/offer',
        element: <PrivateRoute> <Offer></Offer> </PrivateRoute>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/login',
        element: <Login></Login>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
