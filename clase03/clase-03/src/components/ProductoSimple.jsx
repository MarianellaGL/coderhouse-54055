const ProductoSimple = ({ index, item }) => {


  return (<><h1 key={index}>{item.nombre} ${item.precio}</h1></>)
}

export default ProductoSimple