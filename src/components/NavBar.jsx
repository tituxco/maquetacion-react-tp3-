import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <nav>
      <span>
        <img
          src="../../public/store-icon-flat-design-by-Vexels.svg"
          width={50}
          height={50}          
        ></img>{" "}               
      </span>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/productos/:/:"}>Productos</NavLink>
        </li>
        <li>
          <NavLink to={"/categorias"}>Categorias</NavLink>
        </li>    
      </ul>
    </nav>
  );
}
export default NavBar;
