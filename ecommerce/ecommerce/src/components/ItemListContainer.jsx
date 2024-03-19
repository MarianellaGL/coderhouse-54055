import { useEffect, useState } from "react"
import { fakeApiCall } from "../utils/fakeApiCall"
import productos from '../utils/MocksAsync.json';
import { Link, useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { id } = useParams();
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fakeApiCall(productos).then(res => { setResponse(res); setLoading(false); });
  }, []);

  if (loading) return <h1>Cargandoo.....</h1>


  const getProductosByCategoria = (categoriaId) => {
    if (categoriaId) {
      return response.productos.filter(producto => producto.categoria === parseInt(categoriaId));
    }
  };

  if (loading) return <h1>Cargandoo.....</h1>


  const productosPorCategoria = getProductosByCategoria(id);


  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Categorías</h1>
      <div className="grid grid-cols-3 gap-4">
        {response.categorias.map(categoria => (
          <Link key={categoria.id} to={`/category/${categoria.id}`}>
            <div className={`p-4 rounded shadow-md hover:bg-teal-500 ${parseInt(id) === categoria.id ? 'bg-teal-500 text-white' : 'bg-gray-200'}`}>
              <h2 className="text-lg font-semibold">{categoria.nombre}</h2>
            </div>
          </Link>
        ))}
      </div>
      {productosPorCategoria && (
        <><h2 className="text-2xl font-bold mt-10">{productosPorCategoria.length > 0 ? `Productos de la categoría` : 'No hay productos disponibles en esta categoría'}</h2><div className="grid grid-cols-3 gap-4 mt-4">
          {productosPorCategoria.map(producto => (
            <Link key={producto.id} to={`/item/${producto.id}`}>
              <div key={producto.id} className="bg-gray-200 p-4 rounded shadow-md">
                <h3 className="text-lg font-semibold">{producto.nombre}</h3>
              </div>
            </Link>

          ))}
        </div></>)
      }

    </div>
  );
}

export default ItemListContainer;