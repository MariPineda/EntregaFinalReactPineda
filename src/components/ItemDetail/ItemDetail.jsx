import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const ItemDetail = ({id, name, author, price, img, synopsis, stock}) => {
    const [addQuantity, setAddQuantity] = useState(0);
    const { addToCart } = useContext(CartContext);
    const quantityDriver = (quantity) => {
        setAddQuantity(quantity);
        const item = {id, name, price};
        addToCart(item, quantity);
    }
    return (
        <div className="containerItem">
            <h2> Título: {name} </h2>
            <h3> Autor: {author} </h3>
            <h3> Precio: ${price} </h3>
            <h3> ID: {id} </h3>
            <h3> Stock: {stock} </h3>
            <img src={img} alt={name} />
            <p> <strong>Sinopsis:</strong> {synopsis}</p>
            {
                addQuantity > 0 ? (<Link to="/cart" className="end-btn"> Finalizar Compra </Link>) : (<ItemCount initial={1} stock={stock} addFunction={quantityDriver}/>)
            }
            
        </div>
    )
}

export default ItemDetail