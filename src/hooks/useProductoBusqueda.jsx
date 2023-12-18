import { useEffect, useState } from "react";
function useProductoBusqueda(tipo, busqueda) {
  let urlProductos = "";
  //console.log("tipo:-" + tipo + "- busqueda:-" + busqueda + "-");
  switch (tipo) {
    case "categorias":
      urlProductos = "https://dummyjson.com/products/category/" + busqueda; //FILTRADO DE PRODUCTOS POR CATEGORIA
      break;
    case "id":
      urlProductos = "https://dummyjson.com/products/" + busqueda;//POR SI QUEREMOS VER UN PRODUCTO ESPECIFICO
      break;
    case "buscar":
      if (
        busqueda != ""
          ? (urlProductos =
              "https://dummyjson.com/products/search?q=" + busqueda)
          : (urlProductos = "https://dummyjson.com/products?limit=0")
      )
        //si no hay parametro de busqueda (string vacio) cambio el url, 
        //porque la query vacia solo me trae 30 elementos, puede ser un error en la api
        console.log(urlProductos);
      break;
    default:
      urlProductos = "https://dummyjson.com/products?limit=0";
  }

  const [productosBusqueda, setProductos] = useState([]);

  useEffect(() => {
    fetch(urlProductos)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos.products);
      })
      .catch((error) => console.log(error));
  }, [urlProductos]);
  return { productosBusqueda };
}

export default useProductoBusqueda;
