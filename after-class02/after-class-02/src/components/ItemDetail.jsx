const ItemDetail = ({ item }) => {
  return (<>
    <li>{item.precio}</li>
    <li>{item.nombreProducto}</li>
    <li>{item.tieneDescuento ? "Con descuento" : "sin descuento"}</li>
    <img src={item.img} alt="producto" style={{ width: "20px" }} />
  </>);
}

export default ItemDetail;