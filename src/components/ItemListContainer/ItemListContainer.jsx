import "./ItemListContainer.css";
import { useState, useEffect } from 'react';
import { getBooks, getBooksByCategory } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = (greeting) => {

    const [books, setBooks] = useState([]);

    const {idCategory} = useParams();

    useEffect(() => {
        const functionBooks = idCategory ? getBooksByCategory : getBooks;
        functionBooks(idCategory)
            .then(respuesta => setBooks(respuesta))

    }, [idCategory])

    return (

        <div>
            <h2> Estos son nuestros libros disponibles </h2>
            <div className="containerList">
                <ItemList  books={books}/>
            </div>   
        </div>

    )
    
}

export default ItemListContainer