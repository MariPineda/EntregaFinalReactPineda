import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartItem = ({item, quantity}) => {
    const { deleteProduct } = useContext(CartContext);
    return (
        <div>
            <h4 className="detail"> {item.name} </h4>
            <p className="detail"> Cantidad: {quantity} </p>
            <p className="detail"> Precio: {item.price} </p>
            <button onClick={() => deleteProduct(item.id)} className="delete-book-btn"> Eliminar Libro </button>
            <hr />
        </div>
    )
}

export default CartItem


