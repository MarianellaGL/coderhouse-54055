import { useState } from "react";
import CartWidget from "./CartWidget";
import Unicorn from '../../public/Unicorn.svg';

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);



  return (<nav className="bg-teal-500 py-4">
    <div className=" flex mr-20 ml-10">
      <img src={Unicorn} alt="" className="w-[50px] h-[50px]" />

      <div className="container mx-auto flex justify-between items-center">

        <div className="flex items-center justify-center flex-grow">
          <img src="" alt="" />
          <form className="bg-white p-2 h-[20%] w-full rounded-lg">
            <input type="text" />
          </form>
        </div>
        <div className="ml-20 flex items-center justify-end">
          <ul className="flex space-x-4 justify-end">
            <li>
              <button className="text-white text-xl" href="" onClick={() => setShowCategories(!showCategories)}>Categorías</button>
              {showCategories && (
                <ul className="absolute bg-white text-xl w-[20%]">
                  <li>
                    <button className="hover:underline">
                      Categoría 1

                    </button>
                  </li>
                  <li>
                    <button className="hover:underline">
                      Categoría 2

                    </button>
                  </li>
                  <li>
                    <button className="hover:underline">
                      Categoría 3

                    </button>

                  </li>
                </ul>)}

            </li>
            <li><button className="text-white text-xl">Productos</button></li>
            <li><button className="text-white text-xl">Contacto</button></li>
            <li>

              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>);
}

export default Navbar;