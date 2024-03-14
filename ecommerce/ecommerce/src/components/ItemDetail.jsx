import ItemCount from "./ItemCount";

export const ItemDetail = ({ item }) => {


  const handleAdd = () => {
    console.log('agregar al carrito')
  }

  return (<>
    <div className="mx-auto my-auto">
      {item.nombre}
      {item.precio}
      <ItemCount stock={item.stock} initial={0} onAdd={handleAdd} />
    </div>
  </>);

}