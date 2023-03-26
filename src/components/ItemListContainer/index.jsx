import React, {useState, useEffect} from 'react'

import Title from '../Title';
import ItemCount from '../ItemCount';
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, image: "https://images.fravega.com/f500/2383a189cb371f0c7adf58925113cb17.jpg", category: "products", title: "Banco plano"},
  { id: 2, image: "https://behumax.com/wp-content/uploads/2022/04/Multigym-400-blanco-2-600x600.jpg", category: "products", title: "Máquina multifunción" },
  { id: 3, image: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/067/031/products/espalda1-a5369178e469b4aa1315755687545789-640-0.jpg", category: "products", title: "Máquina dorsalera" },
  { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PfhN5Lb5ZaSGv9yyvtxkcG6gc01iWBm6vg&usqp=CAU", category: "products", title: "Caminadora" },
  { id: 5, image: "", title: ""},

];

export const ItemListContainer = () => {
  const [data, setData] = useState([]);
  
  const {categoriaId} = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() =>{
        resolve(products);
      }, 1000);
    });
    if(categoriaId){
      getData.then(res => setData(res.filter(product => product.category === categoriaId)));
    }else{
      getData.then(res => setData(res));
    }
  }, [categoriaId])


 
  return (
    <>
        <Title greeting="The Promise Fitness" />
        <ItemList data={data} />
    </>
  );
}

export default ItemListContainer;