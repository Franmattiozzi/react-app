import React from 'react'
import Title from '../Title';
import ItemCount from '../ItemCount';

export const ItemListContainer = () => {
  return (
    <>
        <Title greeting='The Promise Fitness' />
        <ItemCount />
    </>
  )
}

export default ItemListContainer;