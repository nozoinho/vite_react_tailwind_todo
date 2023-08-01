import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";
import React from "react";

const TodoItem = React.forwardRef(
    ({ todo, removeTodo, updateTodo, ...props }, ref) => {
        // primer parametro son los props, segund parametro es la referencia
        const { id, title, completed } = todo;

        return (
            <article
                {...props}
                ref={ref}
                className="flex gap-4 border-b border-b-gray-400"
            >
                {/* se referencia el valor de ref de Draggable hacia el componente hijo TodoItem
      <button className="inline-block h-5 w-5 flex-none rounded-full border-2">
        
      </button>*/
                /*grid tiene la propiedad place-items-center */
                /*flex tiene las propiedades justify-center items-center */
                /*template string `` permite interpolacion ${} para expresar sentencia javascript 
      /*template string solo devuelve un sring */
                /*funcion flecha en onClick porque se pasan parametros*/}
                <button
                    className={`h-5 w-5 flex-none rounded-full border-2 ${
                        completed
                            ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                            : "inline-block"
                    }`}
                    onClick={() => updateTodo(id)}
                >
                    {completed && <IconCheck />}
                </button>
                <p
                    className={`grow text-gray-600 ${
                        completed && "line-through"
                    }`}
                >
                    {title}
                </p>
                <button className="flex-none" onClick={() => removeTodo(id)}>
                    <IconCross />
                </button>
            </article>
        );
    }
);

export default TodoItem;
