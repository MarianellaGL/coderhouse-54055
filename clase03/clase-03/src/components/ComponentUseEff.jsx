import { useState, useEffect } from "react";

const ComponentUseEff = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {

    console.log("hola")


    return () => {
      console.log("chau")
    }

  }, [])



  return (<>
    <div>
      <p>{`el valor de count es ${count}`}</p>
      <button onClick={() => setCount(count + 1)}>count</button>
    </div>
  </>);
}

export default ComponentUseEff;