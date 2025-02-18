import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
        const {cart, emptyCart, total, totalQuantity} = useContext(CartContext);

        if( totalQuantity === 0 ) {
            return (
                <>
                    <h2> No hay libros en el carrito! </h2>
                    <Link to="/" className="all-btn"> Ver todo los libros </Link>
                </>
            )
        }
    return (
        <div>
            {
                cart.map(product => <CartItem key={product.item.id} {...product} />)
            }
            <h3 className="detail"> Total: $ {total} </h3>
            <h3 className="detail"> Cantidad Total: {totalQuantity} </h3>
            <button onClick={() => emptyCart()} className="empty-btn" > Vaciar carrito </button>
            <div className="separator"></div>
            <Link to="/checkout" className="end-btn"> Finalizar Compra </Link>
        </div>
    )
}

export default Cart