import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <Link to="/">
                <h1> Lumin Tienda de Libros </h1>
            </Link>
            
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/categoria/novelas"> Novelas </NavLink>
                        </li>

                        <li>
                            <NavLink to="/categoria/ciencia ficcion"> Ciencia Ficción </NavLink>
                        </li>

                        <li>
                            <NavLink to="/categoria/fantasia"> Fantasía </NavLink>
                        </li>

                        <li>
                            <NavLink to="/categoria/autoayuda"> Autoayuda </NavLink>
                        </li>

                        <li>
                            <NavLink to="/categoria/infantiles"> Infantiles </NavLink>
                        </li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar