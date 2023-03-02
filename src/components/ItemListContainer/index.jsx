import React, {useState, useEffect} from 'react'

import Title from '../Title';
import ItemCount from '../ItemCount';
import ItemList from "../ItemList";

const products = [
  { id: 1, image: "https://images.fravega.com/f500/2383a189cb371f0c7adf58925113cb17.jpg", title: "Banco plano"},
  { id: 2, image: "https://behumax.com/wp-content/uploads/2022/04/Multigym-400-blanco-2-600x600.jpg", title: "Máquina multifunción" },
  { id: 3, image: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/067/031/products/espalda1-a5369178e469b4aa1315755687545789-640-0.jpg", title: "Máquina dorsalera" },
];

export const ItemListContainer = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() =>{
        resolve(products);
      }, 3000);
    });
    getData.then(res => setData(res));
  }, [])

  const onAdd = (quantity) => {
    console.log("Compraste ${quantity} unidades");
  }
 
  return (
    <>
        <Title greeting="The Promise Fitness" />
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        <ItemList data={data} />
    </>
  );
}

export default ItemListContainer;