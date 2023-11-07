import { useEffect, useState } from "react";
import Todo from "./Todo";
import { apiClient } from "./service/TodoService";

const TodoList = ({
  todos,
  setTodos,
  setNewTodo,
  setUpdateTodo,
  setUpdatingTodo,
}) => {
  const [selectedTodo, setSelectedTodo] = useState(false);

  async function handleSetDone(id, doneValue) {
    const updatedTodos = [...todos];
    const foundTodoIndex = updatedTodos.findIndex((t) => t.id === id);

    if (foundTodoIndex !== -1) {
      updatedTodos[foundTodoIndex].done = doneValue;

      try {
        await apiClient.put(`todos/${id}`, {
          task: updatedTodos[foundTodoIndex].task,
          done: doneValue,
        });
        setTodos(updatedTodos);
      } catch (error) {
        console.error(error);
      }
    }
  }

  async function handleGetUndoneTodos() {
    await apiClient.get("/todos").then((response) => {
      console.log(response.data.filter((todo) => !todo.done));
      setTodos(response.data.filter((todo) => !todo.done));
    });
  }
  async function handleGetDoneTodos() {
    await apiClient.get("/todos").then((response) => {
      console.log(response.data);
      setTodos(response.data.filter((todo) => todo.done));
    });
  }

  async function handleGetAllTodos() {
    await apiClient.get("/todos").then((response) => {
      console.log(response.data);
      setTodos(response.data);
    });
  }

  async function handleDeleteTodo(id) {
    await apiClient
      .delete(`todos/${id}`)
      .then(setTodos(() => todos.filter((todo) => id !== todo.id)))
      .catch((error) => console.error(error));
  }

  //Todo icinde bulunan kalem simgesine tiklandiginda
  //input alanina o todo objesinin bilgisini getirir.
  function handleUpdateTodo(id) {
    setNewTodo(todos.find((todo) => todo.id === id).task);
    setUpdateTodo(false);
  }

  //Uzerine tiklanan todo objesini selectedtodo degerine atar
  function handleSelectedTodo(id) {
    if (selectedTodo.id !== id) {
      setSelectedTodo(todos.find((todo) => todo.id === id));
      setUpdatingTodo(todos.find((todo) => todo.id === id));
    } else {
      setSelectedTodo(<Todo />);
    }
  }

  useEffect(
    function () {
      async function getTodos() {
        await apiClient.get("/todos").then((response) => {
          console.log(response.data);
          setTodos(response.data);
        });
      }
      getTodos();
    },
    [setTodos]
  );

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
          {todos.map((todo) => (
            <li key={todo.id}>
              <Todo
                id={todo.id}
                task={todo.task}
                done={todo.done}
                setDone={handleSetDone}
                deleteTodo={handleDeleteTodo}
                updateTodo={handleUpdateTodo}
                setCanUpdate={setUpdateTodo}
                selectedTodo={selectedTodo}
                setSelectedTodo={handleSelectedTodo}
                todos={todos}
                setUpdatingTodo={setUpdatingTodo}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="todo-list-bottom-buttons">
        <button onClick={() => handleSetDone(selectedTodo.id, true)}>
          Done
        </button>
        <button onClick={() => handleSetDone(selectedTodo.id, false)}>
          Todo
        </button>
      </div>
    </div>
  );
};
export default TodoList;
