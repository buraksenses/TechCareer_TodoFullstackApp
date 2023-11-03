import { useEffect, useState } from "react";
import Todo from "./Todo";
import { apiClient } from "./service/TodoService";

const TodoList = ({
  todoList,
  todos,
  setTodos,
  setNewTodo,
  setUpdateTodo,
  setUpdatingTodo,
}) => {
  const [selectedTodo, setSelectedTodo] = useState(false);

  function handleSetIsDone(id) {
    const updatedTodos = [...todos];
    const foundTodo = updatedTodos.find((t) => t.id === id);
    if (foundTodo) {
      foundTodo.isDone = !foundTodo.isDone;
    }
    setTodos(updatedTodos);
  }

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

  function handleSelectedTodo(id) {
    if (selectedTodo.id !== id) {
      setSelectedTodo(todoList.find((todo) => todo.id === id));
    } else {
      setSelectedTodo(<Todo />);
    }
  }

  useEffect(function () {
    async function getTodos() {
      await apiClient.get("/todos").then((response) => {
        console.log(response.data);
        setTodos(response.data);
      });
    }
    getTodos();
  }, []);

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
                setIsDone={handleSetIsDone}
                task={todo.task}
                deleteTodo={handleDeleteTodo}
                updateTodo={handleUpdateTodo}
                setCanUpdate={setUpdateTodo}
                setUpdatingTodo={handleSetUpdatingTodo}
                selectedTodo={selectedTodo}
                setSelectedTodo={handleSelectedTodo}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="todo-list-bottom-buttons">
        <button onClick={() => handleSetIsDone(selectedTodo.id)}>Done</button>
        <button onClick={() => handleSetIsDone(selectedTodo.id)}>Todo</button>
      </div>
    </div>
  );
};
export default TodoList;
