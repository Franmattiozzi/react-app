import './itemCount.css';

import React from 'react'

const ItemCount = () => {
  return (
    <div className='counter'>
        <button>-</button>
        <span>1</span>
        <button>+</button>
        <div>
            <button>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount;