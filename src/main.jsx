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
    element: <Home/>,//en esta seccion home va a mostrar aleatoriamente 10 productos
    errorElement: <Error />,
  },
  {
    path: "/productos/:tipo/:busqueda",
    element: <Productos/>, //en esta seccion va a mostrar todos lo pedidos de a 5 por pagina y ademas tiene buscador
  },
  {
    path: "categorias",
    element: <Categorias />, //en esta seccion vamos a tener todos los productos divididos por categorias
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
      
    <RouterProvider router={rutas} /> 
  
)
