import { useState } from 'react';

const Contador = () => {
    const [counter, setCounter] = useState(0)

    const handleClick = (valor) => {
        if (valor === '+') {
            setCounter(counter + 1)
        } else {
            setCounter(counter - 1)
        }
    }

    return (<>
        <button onClick={() => handleClick("+")} >+</button>

        <div>{counter}</div>

        <button onClick={() => handleClick("-")} disabled={counter === 0}>-</button>

    </>);
}

export default Contador;