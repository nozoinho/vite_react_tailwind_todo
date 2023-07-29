import { useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";
import { useEffect } from "react";
import { useRef } from "react";

const initialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode); // false es por defecto modo light

  // useRef accede a elementos que controla React

  //const refHeader = useRef(null); // parte en null porque cuando esta leyendo javascript aun no esta creado el Header y debe inicializarse con algun valor por defecto

  useEffect(() => {
    //permite disparar acciones a partir de cambios de estado del hook UseState
    //console.log("darkMode");
    if (darkMode) {
      document.documentElement.classList.add("dark"); // coloca class="dark" al html
      localStorage.setItem("theme", "dark"); // localStorage.theme="dark" es lo mismo,
      // tecnicamente modifica el nombre de la propiedad
      //refHeader.current.classList.add("bg-gray-900"); // se asemeja al .getdocumentBy("id") ó document.getelement
    } else {
      document.documentElement.classList.remove("dark"); // retira class="dark" al html
      localStorage.setItem("theme", "light");
      //refHeader.current.classList.remove("bg-blue-500");
    }
  }, [darkMode]);

  return (
    <header className="container mx-auto px-4 pt-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white ">
          Todo
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <IconSun /> : <IconMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
