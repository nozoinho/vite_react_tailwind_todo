const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
  return (
    <section className="flex justify-between rounded-b-md bg-white py-4 px-4 dark:bg-gray-800 transition-all duration-1000">
      <span className="text-gray-400">{computedItemsLeft} items left</span>
      <button onClick={clearCompleted} className="text-gray-400">
        {/* funcion clearCompleted se pasa sin función flecha porque no tiene propiedades */}
        Clear Completed
      </button>
    </section>
  );
};

export default TodoComputed;
