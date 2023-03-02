import React, {useEffect, useState} from 'react';
import ItemDetail from "../ItemDetail";

const product = { id: 1, image: "https://images.fravega.com/f500/2383a189cb371f0c7adf58925113cb17.jpg", title: "Banco plano"};


const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(product);
      }, 3000);
    });
    getData.then(res => setData(res));
  }, [])

  return (
    <ItemDetail data={data} />
  )
}

export default ItemDetailContainer;