import { useEffect, useState } from "react";
function useProducto() {
  const urlProductos = "https://dummyjson.com/products?limit=0";
  const urlCategorias = "https://dummyjson.com/products/categories";

  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  //creamos una lista de 10 numeros aleatorios para obtener productos aleatorios
  let lista = []; //inicializamos el array de lista de numeros aleatorios
  let repetido; //declaramos una variable boolean de numero repetido
  for (let i = 0; i < 10; i++) {
    //inicializamos el bucle que se repetira 10 veces
    while (!lista[i]) {
      repetido = true; //establecemos la variable repetida en true
      while (repetido == true) {
        //iniciamos un bucle que se repetira mientras repetido sea true
        let random = Math.random();
        random = random * 100 + 1;
        random = Math.trunc(random); //creamos un numero aleatorio
        for (let j = 0; j < lista.length; j++) {
          //recorremos la lista con los elementos que tenga
          if (lista[j] == random) {
            //si el elemento de la lista es repetido
            repetido = true;
            break; //cortamos el bucle
          } else {
            repetido = false;
          }
        }
        lista[i] = random; //de lo contrario lo agregamos a la lista
      }
    }
  }

  useEffect(() => {
    // Obtenemos los productos
    fetch(urlProductos)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos.products);
    //    console.log(datos.products);
      })
      .catch((error) => console.log(error));

    // Obtenemos las categorías
    fetch(urlCategorias)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setCategorias(datos); //no es array de objetos sino de strings
  //      console.log(datos);
      })
      .catch((error) => console.log(error));
  }, []);

  const productosAleatorios = [];
  //filtramos los aleatorios para que cada vez que se ingrese muestre 10 productos aleatorios figurando "Promociones"
  productos.forEach((producto) => { //iteramos cada producto dentro de listado obtenido
    lista.forEach((filtro) => { //a su vez ese producto nos fijamos si es uno de los 10 aleatorios
      if (producto.id == filtro) {
        productosAleatorios.push(producto); //lo colocamos en un nuevo array
      }
    });
  });
//  console.log(productosAleatorios);
  return { productos, productosAleatorios, categorias };
}

export default useProducto;
