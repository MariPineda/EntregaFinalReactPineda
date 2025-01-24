import "./ItemDetail.css";

const ItemDetail = ({id, name, author, price, img, synopsis}) => {
    return (
        <div className="containerItem">
            <h2> Título: {name} </h2>
            <h3> Autor: {author} </h3>
            <h3> Precio: ${price} </h3>
            <h3> ID: {id} </h3>
            <img src={img} alt={name} />
            <p> <strong>Sinopsis:</strong> {synopsis}</p>
            
        </div>
    )
}

export default ItemDetail