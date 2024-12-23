import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
    return (
        <header>
            <h1> Lumin Tienda de Libros </h1>
            <nav>
                <ul>
                    <li>Novelas</li>
                    <li>Ciencia Ficción</li>
                    <li>Fantasía</li>
                    <li>Autoayuda</li>
                    <li>Infantiles</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar