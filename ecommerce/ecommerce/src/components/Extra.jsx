import { useState } from "react";

const Extra = () => {
  const [input, setInput] = useState("hola")

  return (<><input value={input} onChange={(e) => { console.log(e.target.value); setInput(e.target.value) }} /></>);
}

export default Extra;