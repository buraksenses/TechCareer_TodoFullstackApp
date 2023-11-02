const Todo = ({
  id,
  isDone,
  setIsDone,
  task,
  deleteTodo,
  updateTodo,
  setCanUpdate,
  setUpdatingTodo,
  selectedTodo,
  setSelectedTodo,
}) => {
  function handleUpdateClick(id) {
    updateTodo(id);
    setCanUpdate(true);
    setUpdatingTodo(id);
  }
  return (
    <div
      className={selectedTodo.id === id ? `todo-box selected` : `todo-box`}
      onClick={() => setSelectedTodo(id)}
    >
      <span className={isDone ? "todo-title-checked" : "todo-title"}>
        {task}
      </span>
      <input
        type="checkbox"
        onChange={() => {
          setIsDone(id);
        }}
        checked={isDone}
      />
      <button onClick={() => handleUpdateClick(id)}>
        <i class="fa-solid fa-pencil" id="edit"></i>
      </button>
      <button onClick={() => deleteTodo(id)}>
        <i class="fa-solid fa-trash" id="delete"></i>
      </button>
    </div>
  );
};
export default Todo;
