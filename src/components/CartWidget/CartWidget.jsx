import "./CartWidget.css";
import shoppingCart from "../../assets/shoppingCart.jpg"

const CartWidget = () => {

    
    const imgShoppingCart = "https://thumbs.dreamstime.com/b/libros-en-carro-de-compras-56249035.jpg";
    return (
        <div>
            <img className='imgShoppingCart' src={shoppingCart} alt="Imagen Carrito de Compras" />
            <strong>1</strong>
        </div>
    )
}

export default CartWidget