import { rejects } from "assert"

const mock = [{

   "id": 1,
    "nombreProducto": "Producto de ejemplo",
    "precio": 10.99,
    "tieneDescuento": true,
},{
  "id": 2,
    "nombreProducto": "Producto de ejemplo",
    "precio": 10.99,
    "tieneDescuento": true
},{
  "id": 3,
    "nombreProducto": "Producto de ejemplo",
    "precio": 10.99,
    "tieneDescuento": false
},{
  "id": 4,
    "nombreProducto": "Producto de ejemplo",
    "precio": 10.99,
    "tieneDescuento": false
}

]


export const getProductosResolved = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() =>{
          resolve(mock)
      }, 2000)
  })
}