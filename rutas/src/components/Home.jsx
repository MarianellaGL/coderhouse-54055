import { NavLink } from "react-router-dom";
import Select from "./Select";
import { useState } from "react";

const Home = () => {
  const [option, setOption] = useState(1);
  const options = [{ value: 1, text: 'blue' }, { value: 2, text: "red" }]


  function optionSelected(value) {
    setOption(value)
  }


  return (

    <>
      <NavLink to='/users'>Users </NavLink>
      <NavLink to='/comments'> Comments </NavLink>

      <Select
        options={options}
        onSelect={optionSelected}
        defaultOption={1}
      ></Select>

      <p>Selecccionado {option}</p>

    </>
  );
}

export default Home;