//agrupador de componentes

import { useEffect, useState } from "react";

import products from '../utils/MocksAsync.json';
import { Item } from "./Item";

const ItemList = () => {
  const [productsCharged, setProductsCharged] = useState([])

  const fakeApiCall = (products) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }
        , 2000)
    })
  }


  useEffect(() => {

    fakeApiCall(products).then(resp => setProductsCharged(resp))


  }, [])

  console.log(productsCharged.productos)
  return (<>
    <div>
      {
        productsCharged.productos.length > 0 && productsCharged.productos.map((item, index) => {
          return <Item item={item} />
        }

        )
      }
    </div>


  </>);
}

export default ItemList;