import { useState } from "react";
import CartWidget from "./CartWidget";
import Unicornio from '../../public/Unicorn.svg'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (<nav className="bg-teal-500 py-4">
    <div className=" flex ml-10">
      <NavLink to="/" className="text-white font-bold text-xl flex items-center">
        <img src={Unicornio} alt="" className="w-8 h-8 mr-2" />
      </NavLink>

      <div className="flex items-center flex-grow mx-32">
        <form className="bg-white p-2 w-full rounded-lg">
          <input type="text" className="w-full" />
        </form>
      </div>
      <div className="ml-20 flex items-center justify-end">
        <ul className="flex space-x-4 justify-end mr-10">
          <li>
            <button className="text-white text-xl" onClick={() => setShowCategories(!showCategories)}>Categorías</button>
            {showCategories && (
              <div className="flex flex-col absolute bg-white text-xl mt-2 p-2 rounded-lg">
                <NavLink to="/category/1" className="text-teal-500 hover:underline">Golosinas</NavLink>
                <NavLink to="/category/2" className="text-teal-500 hover:underline">Chocolate</NavLink>
                <NavLink to="/category/3" className="text-teal-500 hover:underline">Caramelos</NavLink>
              </div>
            )}
          </li>
          <li><NavLink to={'/items'} className="text-white text-xl">Productos</NavLink></li>
          <li><NavLink className="text-white text-xl">Contacto</NavLink></li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </div>

    </div>
  </nav>);
}

export default Navbar;