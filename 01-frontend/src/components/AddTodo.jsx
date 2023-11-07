import { apiClient } from "./service/TodoService";

const AddTodo = ({
  newTodo,
  setNewTodo,
  todos,
  setTodos,
  updateTodo,
  setUpdateTodo,
  updatingTodo,
}) => {
  const handleAddNewTodo = async () => {
    try {
      const response = await apiClient.post("/todos", {
        task: newTodo,
        done: false,
      });

      const newTodoWithId = response.data; // Sunucudan dönen todo nesnesi, ID içerir.
      setTodos([...todos, newTodoWithId]);
      setNewTodo(""); // Yeni todo eklendikten sonra inputu temizle
    } catch (error) {
      console.error("Todo eklenirken bir hata oluştu:", error);
    }
    setNewTodo("");
  };

  function handleCancelUpdate() {
    setUpdateTodo(!updateTodo);
    setNewTodo("");
  }

  async function handleUpdateTodo() {
    const updatedTodos = [...todos];
    const updatingTodoIndex = updatedTodos.findIndex(
      (t) => t.id === updatingTodo.id
    );
    const newTodoContent = {
      id: updatingTodo.id,
      task: newTodo,
      done: false,
    };
    updatedTodos[updatingTodoIndex] = newTodoContent;
    await apiClient
      .put(`todos/${updatingTodo.id}`, newTodoContent)
      .then((response) => {
        setNewTodo("");
        setUpdateTodo(false);
        setTodos(updatedTodos);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
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
