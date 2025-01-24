import "./CartWidget.css";
import shoppingCart from "../../assets/shoppingCart.jpg"

const CartWidget = () => {

    return (
        <div>
            <img className='imgShoppingCart' src={shoppingCart} alt="Imagen Carrito de Compras" />
            <strong>1</strong>
        </div>
    )
}

export default CartWidget