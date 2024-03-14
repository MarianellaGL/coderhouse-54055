import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import categories from '../utils/MocksAsync.json'
import { fakeApiCall } from "../utils/fakeApiCall";

const ItemListContainer = () => {
  const { id } = useParams();
  const [response, setResponse] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fakeApiCall(categories).then(res => { setResponse(res); setLoading(false) })

  }, [])

  if (loading) return <h1>Cargando...</h1>


  const getProductosByCategory = (catId) => {
    if (catId) {
      return response.productos.filter((product) => product.categoria === parseInt(catId))
    }
  }

  const productsPorCategoria = getProductosByCategory(id)

  return (<>
    <div>
      <h1>Categorias</h1>
      <div>
        {response.categorias.map((cat) => {
          return <Link key={cat.id} to={`/category/${cat.id}`}>
            <h2>{cat.nombre}</h2>
          </Link>
        })}
      </div>
    </div>
    {
      productsPorCategoria && (
        productsPorCategoria.map((producto) => {
          console.log(producto)
          return (<Link key={producto.id} to={`/item/${producto.id}`}>
            <h2>{producto.nombre}</h2>
          </Link>)
        })
      )
    }

  </>);
}

export default ItemListContainer;