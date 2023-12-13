import useProducto from "../hooks/useProducto.jsx";
import NavBar from "./NavBar.jsx";
import ProductosLista from "./ProductosLista.jsx";

function Home() {    
    const { productosAleatorios} = useProducto([]);
    
    return (
      <>
        <NavBar />
        <div className="titulos">Nuestra seleccion de productos</div>
        <ProductosLista productos={productosAleatorios}/>                    
      </>
    );
}
export default Home;
