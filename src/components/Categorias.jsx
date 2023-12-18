import React, { useEffect, useState } from "react";
import NavBar from "./NavBar.jsx";
import useProducto from "../hooks/useProducto.jsx";
import "./categorias.css";
import ProductosLista from "./ProductosLista.jsx";

function Categorias() {
  const [categoriaDefecto, setCategoriaDefecto] = useState();
  const [prodFiltra, setProdFiltra] = useState([]);
  let { productos, categorias } = useProducto([]);

  console.log("Categoria Seleccionada: " + categoriaDefecto);

  function FiltrarCategorias(catSel) {
    console.log("Categoria aplicada: " + catSel);
    setCategoriaDefecto(catSel);
    setProdFiltra(
      productos.filter(
        (producto) =>
          //console.log(producto.category  + "---"+catSel)
          producto.category == catSel
      )
    );
    //    console.log(prodFiltra);
  }
  useEffect(() => {
    FiltrarCategorias(categoriaDefecto);
  }, []);

  return (
    <>
      <NavBar />
      <div className="categoriasLista">
        {categorias.map((categoria) => (
          <div key={categoria}>
            <button
              className={categoriaDefecto === categoria ? "active" : ""}
              onClick={() => FiltrarCategorias(categoria)}
            >
              {categoria}
            </button>
          </div>
        ))}
      </div>
      <hr />
      <div className="titulos">
        {categoriaDefecto === undefined
          ? "Seleccione categoría"
          : `Productos de la categoría: ${categoriaDefecto}`}
      </div>

      <ProductosLista productos={prodFiltra}  limpiarPaginado={false}/>
    </>
  );
}
export default Categorias;
