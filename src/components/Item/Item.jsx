import "./Item.css"
import { Link } from "react-router-dom";
const Item = ({id, name, author, price, img}) => {
    return (
        <div className="cardBook">
            <img src={img} alt={name} />
            <h3 className="title"> Título: {name} </h3>
            <h3 className="author"> Autor: {author} </h3>
            <p className="price"> Precio: ${price} </p>
            <p className="id"> ID: {id} </p>
            <Link className="btn" to={`/item/${id}`}> Leer Sinopsis </Link>                
        </div>
    )
}

export default Item