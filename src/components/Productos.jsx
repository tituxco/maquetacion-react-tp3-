import useProductoBusqueda from "../hooks/useProductoBusqueda.jsx";
import NavBar from "./NavBar.jsx";
import ProductosLista from "./ProductosLista.jsx";
import { useEffect, useState } from "react";

function Productos() {
  const tipo = "buscar";
  const [buscar, setBuscar] = useState("");

  
  const { productosBusqueda } = useProductoBusqueda(tipo, buscar);
  //console.log("productos iniciales " + buscar);
  //console.log(productosBusqueda);

  const handleChange = (event) => {
    setBuscar(event.target.value);   
  };

  return (
    <>
      <NavBar />
      <input className="busquedaProducto"
        type="text"
        placeholder="Buscar producto"
        value={buscar}
        onChange={handleChange}
      />

      <div className="titulos">Todos nuestros productos</div>
      <ProductosLista productos={productosBusqueda}  limpiarPaginado={true}/>
    </>
  );
}
export default Productos;
