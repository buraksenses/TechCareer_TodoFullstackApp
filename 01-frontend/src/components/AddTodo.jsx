import { useState } from "react";

const buttonStyle = {
  background: "#24A2B8",
  "border-radius": 5,
  "justify-content": "center",
  width: "99%",
  border: "1px solid #ccc",
  height: "2rem",
  cursor: "pointer",
  color: "white",
};

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
        style={buttonStyle}
      >
        {updateTodo ? "Update Todo" : "Add New Task"}
      </button>
    </div>
  );
};

export default AddTodo;
