import './ItemCount.css';
import { useState } from 'react';


const ItemCount = ({initial, stock, addFunction}) => {
        const [counter, setCounter] = useState(initial);

        const addCounter = () => {
            if(counter < stock) {
                setCounter(counter+ 1)
            }
        }
        
        const reduceCounter = () => {
            if(counter > initial) {
                setCounter(counter - 1);
            }
        }

    return (
        <div className='counter'>
            <button className='btn-counter' onClick={reduceCounter}> - </button>
            <p className='counter-number'> {counter} </p>
            <button className='btn-counter' onClick={addCounter}> + </button>

            <button className='add-btn' onClick={() => addFunction(counter)}> Agregar al carrito </button>
        </div>
    )
}

export default ItemCount