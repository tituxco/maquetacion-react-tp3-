import React, { useState } from "react";
import "./productosLista.css";

function Paginacion({ listaProductos, productosPorPagina }) {
  const [paginaActual, setPaginaActual] = useState(1);

  const indiceInicio = (paginaActual - 1) * productosPorPagina;
  const indiceFin = paginaActual * productosPorPagina;
  const productosPagina = listaProductos.slice(indiceInicio, indiceFin);

  const totalPaginas = Math.ceil(listaProductos.length / productosPorPagina);

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina > 0 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  return (
    <>
      {totalPaginas > 1 ? (//mostramos la paginacion solamente cuando hay mas de una pagina
        <div className="navBar">
          <a onClick={() => cambiarPagina(paginaActual - 1)}>Anterior</a>
          <span>{`${paginaActual} / ${totalPaginas}`}</span>
          <a onClick={() => cambiarPagina(paginaActual + 1)}>Siguiente</a>
        </div>
      ) : null}
      <div className="productosTarjeta">
        {/* Mostrar elementos de la página actual */}
        {productosPagina.map((producto) => (
          <div key={producto.id} className="producto">
            <div className="productoImg">
              <img src={producto.thumbnail}></img>{" "}
            </div>
            <h4>{producto.title}</h4>
            <p>{producto.description}</p>
            <br />
            <div className="productoPrecios">
              <h3>Precio: ${producto.price}</h3>
              <h3>Stock: {producto.stock}</h3>
            </div>
            <div>
              <button>Comprar</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function ProductosLista({ productos }) {
  return (
    <div>
      <Paginacion listaProductos={productos} productosPorPagina={5} />
    </div>
  );
}
export default ProductosLista;
