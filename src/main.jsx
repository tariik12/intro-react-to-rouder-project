import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './components/About/About'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Contact from './components/Contact/Contact';
import Home from './components/Home/Home'
import First from './components/First/First'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />
//   },
//   {
//     path: '/about',
//     element: <About />
//   },
//   {
//     path: '/contact',
//     element: <Contact />
//   }
// ])

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />,
    children:[
      {
        path:'/',
        element:<First></First>
      }
      ,
      {
        path: 'about',
        element:<About ></About>
      },
      {
        path:'contact',
        element: <Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
