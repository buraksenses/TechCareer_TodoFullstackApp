const Todo = ({
  id,
  done,
  setDone,
  task,
  deleteTodo,
  updateTodo,
  setCanUpdate,
  selectedTodo,
  setSelectedTodo,
  todos,
  setUpdatingTodo,
}) => {
  function handleUpdateClick(id) {
    updateTodo(id);
    setCanUpdate(true);
    setUpdatingTodo(todos.find((t) => t.id === id));
  }
  return (
    <div className={selectedTodo.id === id ? `todo-box selected` : `todo-box`}>
      <span
        className={done ? "todo-title-checked" : "todo-title"}
        onClick={() => setSelectedTodo(id)}
      >
        {task}
      </span>
      <input
        type="checkbox"
        onChange={() => {
          setDone(id, !done);
        }}
        checked={done}
      />
      <button onClick={() => handleUpdateClick(id)}>
        <i className="fa-solid fa-pencil" id="edit"></i>
      </button>
      <button onClick={() => deleteTodo(id)}>
        <i className="fa-solid fa-trash" id="delete"></i>
      </button>
    </div>
  );
};
export default Todo;
