const AddTodo = ({
  newTodo,
  setNewTodo,
  todoList,
  setTodos,
  updateTodo,
  setUpdateTodo,
  updatingTodo,
  id,
  setId,
}) => {
  function handleAddNewTodo() {
    todoList.push({
      id: id,
      task: newTodo.toString(),
      isDone: false,
    });
    setTodos(todoList);
    setNewTodo("");
    setId(id + 1);
  }

  function handleCancelUpdate() {
    setUpdateTodo(!updateTodo);
    setNewTodo("");
  }

  function handleUpdateTodo() {
    updatingTodo.task = newTodo;
    setNewTodo("");
  }
  return (
    <div className="add-todo-container">
      <div className="add-todo-input-container">
        <input
          type="text"
          required
          autoFocus
          placeholder={updateTodo ? "Update Todo" : "New Todo"}
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />
        {updateTodo && (
          <button
            className="add-todo-cancel-update"
            onClick={() => handleCancelUpdate()}
          >
            Cancel Edit
          </button>
        )}
      </div>

      <button
        onClick={() => (updateTodo ? handleUpdateTodo() : handleAddNewTodo())}
        id="add-todo-button"
      >
        {updateTodo ? "Update Todo" : "Add New Task"}
      </button>
    </div>
  );
};

export default AddTodo;
