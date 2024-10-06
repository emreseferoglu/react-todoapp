import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoCreate from "./components/TodoCreate";

interface Todo {
  id: number;
  content: string;
}

function App() {
  const [todo, setTodos] = useState<Todo[]>([]);

  const createTodo = (newTodo: Todo) => {
    setTodos([...todo, newTodo]);
  };
  console.log(todo);

  return (
    <div className="app">
      <div className="app-container">
        <TodoCreate onCreateTodo={createTodo} />
        <Todo todoList={todo} />
      </div>
    </div>
  );
}

export default App;
