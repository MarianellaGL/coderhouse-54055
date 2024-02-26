import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0)

  const stock = 10;

  const onAdd = (expr) => {

    if (expr === "+") {
      if (value < stock) {
        setValue(value + 1)
      }
      if (value === stock) {
        setValue(0)
      }
    }
    else {
      if (value <= stock) {
        setValue(value - 1)
      }

    }

  }

  /**
   * Componente con botón y controles para incrementar y decrementar la cantidad de items
   * el nro del contador nunca puede superar el stock disponible
   * de no haber stock no debe tener efecto y por ende no ejecturar el callback onAdd
   * si hay stock clickear el boton y se debe ejecutar onAdd con un numero que indique la cant
   * seleccionada por el usuario 
   * 
   */
  return (<>
    <div className="flex items-center justify-center mt-28">
      <button className="text-4xl" onClick={() => onAdd("+")}>+</button>
      <div>{value}</div>
      <button className="text-4xl mr-7" onClick={() => onAdd("-")} disabled={value === 0}>-</button>
      <button onClick={() => console.log("Agregado al carrito")}> Agregar al carrito</button>
    </div>

  </>);
}

export default Counter;