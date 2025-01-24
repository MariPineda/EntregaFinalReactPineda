import "./ItemList.css";
import Item from '../Item/Item';


const ItemList = ({books}) => {
    return (
        <div className='itemList'>
            {
                books.map(book => <Item key={book.id} {...book}/>)
            }
        </div>
    )
}

export default ItemList

