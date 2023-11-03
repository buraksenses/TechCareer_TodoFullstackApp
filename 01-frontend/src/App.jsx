import "./App.css";
import "./todo.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useState } from "react";

const todoList = [
  {
    id: 1,
    task: "Learn ReactJS Basics",
    isDone: false,
  },
  {
    id: 2,
    task: "Learn HTML",
    isDone: false,
  },
  {
    id: 3,
    task: "Learn Java",
    isDone: false,
  },
];

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [updateTodo, setUpdateTodo] = useState(false);
  const [updatingTodo, setUpdatingTodo] = useState({});
  const [id, setId] = useState(4);
  return (
    <div className="App">
      <div className="todo-header">
        <b>TODO INPUT</b>
      </div>

      <div>
        <AddTodo
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          todoList={todoList}
          setTodos={setTodos}
          updateTodo={updateTodo}
          setUpdateTodo={setUpdateTodo}
          updatingTodo={updatingTodo}
          id={id}
          setId={setId}
        />
        <TodoList
          todoList={todoList}
          todos={todos}
          setTodos={setTodos}
          setNewTodo={setNewTodo}
          updateTodo={updateTodo}
          setUpdateTodo={setUpdateTodo}
          updatingTodo={updatingTodo}
          setUpdatingTodo={setUpdatingTodo}
        />
      </div>
    </div>
  );
}

export default App;
