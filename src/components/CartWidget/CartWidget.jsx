import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";
import shoppingCart from "../../assets/shoppingCart.jpg"

const CartWidget = () => {
        const { totalQuantity } = useContext(CartContext);
    return (
        <div>
            <Link to="/cart">
                <img className='imgShoppingCart' src={shoppingCart} alt="Imagen Carrito de Compras" />
                {
                    totalQuantity > 0 && <strong> {totalQuantity} </strong>
                }
            </Link>
        </div>
    )
}

export default CartWidget