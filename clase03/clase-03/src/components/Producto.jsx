import { useEffect } from "react"
import ProductoSimple from "./ProductoSimple"

const Producto = () => {

  const products = [
    { id: 1, nombre: "Camiseta", precio: 20 },
    { id: 2, nombre: "Pantalón", precio: 10 },
    { id: 3, nombre: "zapatos", precio: 40 }

  ]

  function promiseProductos(products) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve(products)
      }, 3000)
    })
  }

  useEffect(() => {
    /*  const functionTest = async () => {
        const productsNew = await promiseProductos(products)
  
        console.log(productsNew)
      }
      functionTest()*/

    promiseProductos(products).then(res => console.log(res))


  }, [])

  //products.map((item, index) => { console.log(item), console.log(index) })


  return (<>
    <div>
      {
        products.map((item, index) => (
          <ProductoSimple item={item} index={index} />
        ))
      }
    </div>

  </>);
}

export default Producto;