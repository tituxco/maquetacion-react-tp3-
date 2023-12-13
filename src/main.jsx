import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categorias from './components/Categorias.jsx'
import Home from './components/Home.jsx';
import "./index.css"
import Productos from './components/Productos.jsx';

const rutas = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error />,
  },
  {
    path: "/productos/:tipo/:busqueda",
    element: <Productos/>, 
  },
  {
    path: "categorias",
    element: <Categorias />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
      
    <RouterProvider router={rutas} /> 
  
)
