import { getOneBook } from "../../asyncmock";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
        const [book, setBook] = useState(null);

        const { idItem } = useParams();

        useEffect( () => {
            getOneBook(idItem)
                .then(respuesta => setBook(respuesta))
        }, [idItem])
    return (
        <div>
            <ItemDetail {...book} />
        </div>
    )
}

export default ItemDetailContainer