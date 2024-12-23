import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
        <div style={{textAlign: 'center',
            fontSize: '36px',
            fontWeight: 'bold',
            fontFamily: 'Arial, Helvetica, sansSerif',
            color: 'blue'}}>
            { greeting }
        </div>
    )
}

export default ItemListContainer