import { DragDropContext } from "@hello-pangea/dnd";

import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";
import { useEffect } from "react";

/*const initialStateTodos = [
  {
    id: 1,
    title: "Complete online Javascript bluuweb Curse",
    completed: true,
  },
  {
    id: 2,
    title: "Go to the gym",
    completed: false,
  },
  {
    id: 3,
    title: "10 minutes meditation",
    completed: false,
  },
  {
    id: 4,
    title: "Pick up groceries",
    completed: true,
  },
  {
    id: 5,
    title: "Complete todo app on Frontend Mentor",
    completed: false,
  },
];*/

// todos los elementos que se colocan fuera de App tienen el objetivo de no volverse a crear por cada renderizado

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    //console.log(todos);
  }, [todos]);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter);

  const filterTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    //console.log(result);
    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droppableID === destination.droppableID
    )
      return;

    setTodos((prevTodos) =>
      reorder(prevTodos, source.index, destination.index)
    );
  };

  return (
    <div
      className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')]
      md:bg-[url('./assets/images/bg-desktop-light.jpg')]
      dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] 
      md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] 
      bg-contain
      bg-no-repeat
      dark:bg-gray-900
      transition-all duration-1000"
    >
      <Header />

      <main className="container mx-auto mt-8 px-4 md:max-w-xl">
        <TodoCreate createTodo={createTodo} />

        {/* TodoList (TodoItem) TodoUpdate & TodoDelete */}

        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList
            /* todos={todos} */
            todos={filterTodos()}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        </DragDropContext>

        {/* TodoComputed // cálculos */}
        <TodoComputed
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        />

        {/* TodoFilter */}
        <TodoFilter changeFilter={changeFilter} filter={filter} />
      </main>

      <footer className="text-center mt-8 dark:text-gray-400 transition-all duration-1000">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;
