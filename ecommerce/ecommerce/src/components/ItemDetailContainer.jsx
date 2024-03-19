//agrupador de componentes

import { memo, useEffect, useState } from "react";

import productos from '../utils/MocksAsync.json';
import { ItemDetail } from "./ItemDetail";
import { fakeApiCall } from "../utils/fakeApiCall";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fakeApiCall(productos).then(res => {
      if (id) {
        const item = res.productos.find(item => item.id === parseInt(id));
        setProduct(item)
      } else {
        setProducts(res.productos)
      }
      setLoading(false)

    })

  }, [id]);


  if (loading) return <h1 className={`text-black ${loading ? "text-4xl mx-auto" : ""}`}>Cargando...</h1>;

  return (
    <div>
      {product && <ItemDetail item={product} />}
      {products && products.map((item, index) => <ItemDetail key={index} item={item} />)}
    </div>
  );
};


export default ItemDetailContainer;