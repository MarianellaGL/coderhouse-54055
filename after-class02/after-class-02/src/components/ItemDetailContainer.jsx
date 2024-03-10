/**Al iniciar utilizando un efecto de montaje, debe llamar a un async mock, 
 * utilizando lo visto en la clase anterior con Promise, que en 2 segundos le devuelva un 1 ítem, y lo guarde en un estado prop */

import { useEffect, useState } from "react";
import { getProducts } from "../Mock/AsyncMock";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    getProducts().then(res => {
      setProduct(res)
      setLoading(false)
    })

  }, [])


  if (loading) return <h1> Cargando ....</h1>



  return (<>

    {
      product.map((item => (
        <ul key={item.id}>
          <ItemDetail item={item} />
        </ul>
      )))
    }

  </>);
}

export default ItemDetailContainer;