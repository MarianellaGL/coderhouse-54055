import { toast } from "react-toastify";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Extra from "./Extra";

export const ItemDetail = ({ item }) => {
  const { nombre, imagen, precio, isOnDiscount, descripcion, stock } = item;
  const { addToCart, cart } = useContext(CartContext);

  const onAdd = (quantity, item) => {
    addToCart({ quantity: quantity, item })
    toast('Elemento agregado al carrito correctamente')
  }
  console.log(cart)

  return (<>
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4 mx-auto my-20">
      <div className="col-span-1 row-span-3 px-6 py-4">
        <div className="font-bold text-xl mb-2">{nombre}</div>
        <div>
          <img src={imagen} alt={nombre} className="w-[250px] h-[250px]" />

        </div>
        <p className="text-gray-700 text-base">
          Precio: ${precio.toFixed(2)}
        </p>
        <p className="text-gray-700 text-base">
          {isOnDiscount ? "¡En descuento!" : "Precio regular"}
        </p>
        <p className="text-gray-700 text-base">{stock}</p>
        <p className="text-gray-700 text-base">{descripcion}</p>
        <ItemCount stock={stock} initial={0} onAdd={onAdd} item={item} />
        <Extra />
      </div>
    </div>
  </>);

}