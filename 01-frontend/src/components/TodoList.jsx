import Todo from "./Todo";

const TodoList = ({
  todoList,
  todos,
  setTodos,
  setNewTodo,
  setUpdateTodo,
  setUpdatingTodo,
}) => {
  function handleGetDoneTodos() {
    setTodos(() => todoList.filter((todo) => todo.isDone));
  }

  function handleGetUndoneTodos() {
    setTodos(() => todoList.filter((todo) => !todo.isDone));
  }

  function handleGetAllTodos() {
    setTodos(todoList);
  }

  function handleDeleteTodo(id) {
    setTodos(() => todoList.filter((todo) => id !== todo.id));
    todoList = todoList.filter((todo) => todo.id !== id);
  }

  function handleUpdateTodo(id) {
    setNewTodo(todoList.find((todo) => todo.id === id).task);
    setUpdateTodo(false);
  }

  function handleSetUpdatingTodo(id) {
    setUpdatingTodo(todoList.find((todo) => todo.id === id));
  }
  return (
    <div>
      <b>TODO LIST</b>
      <div className="todo-list-initial-buttons">
        <button onClick={() => handleGetAllTodos()}>All</button>
        <button onClick={() => handleGetUndoneTodos()}>Todo</button>
        <button onClick={() => handleGetDoneTodos()}>Done</button>
      </div>

      <div className="todo-list">
        <ul>
          {/* Database verilerine gore listelenecek. */}
          {todos.map((todo) => (
            <li key={todo.id}>
              <Todo
                id={todo.id}
                isDone={todo.isDone}
                setIsDone={(value) => {
                  const updatedTodos = [...todos];
                  const foundTodo = updatedTodos.find((t) => t.id === todo.id);
                  if (foundTodo) {
                    foundTodo.isDone = value;
                  }
                  setTodos(updatedTodos);
                }}
                task={todo.task}
                deleteTodo={handleDeleteTodo}
                updateTodo={handleUpdateTodo}
                setCanUpdate={setUpdateTodo}
                setUpdatingTodo={handleSetUpdatingTodo}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="todo-list-bottom-buttons">
        <button>Done</button>
        <button>Todo</button>
      </div>
    </div>
  );
};
export default TodoList;
