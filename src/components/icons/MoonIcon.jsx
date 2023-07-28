const MoonIcon = ({ fill = "#FFF", ...props }) => {
  // ...props agrupa el resto de propieades que usen el componente MoonIcon
  // ...props se llama rest operator y es parte del destructuring
  // ...props crea iterable de todas las propiedades
  return (
    //svg es un vector
    <svg
      {...props}
      // aqui "...props" es el spread operator, aqui se desarma el conjunto de propiedades
      // esto implica que toma className desde el componente MoonIcon
      // instanciado en App
      //className="fill-red-500" // className tiene prioridad sobre el prop fill
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
    >
      <path
        //fill="#FFF"
        fillRule="evenodd"
        d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
      />
    </svg>
  );
};

export default MoonIcon;
