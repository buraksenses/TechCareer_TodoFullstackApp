import "./App.css";
import "./todo.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [updateTodo, setUpdateTodo] = useState(false);
  const [updatingTodo, setUpdatingTodo] = useState({});
  return (
    <div className="App">
      <div className="todo-header">
        <b>TODO INPUT</b>
      </div>

      <div>
        <AddTodo
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          todos={todos}
          setTodos={setTodos}
          updateTodo={updateTodo}
          setUpdateTodo={setUpdateTodo}
          updatingTodo={updatingTodo}
        />
        <TodoList
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
