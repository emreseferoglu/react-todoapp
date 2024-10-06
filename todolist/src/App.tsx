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

  const removeTodo = (todoIndex) => {
    setTodos([...todo.filter((data) => data.id !== todoIndex)]);
  };

  const handleUpdateTodo = (id: number, newContent: string) => {
    setTodos(
      todo.map((todo) =>
        todo.id === id ? { ...todo, content: newContent } : todo
      )
    );
  };

  return (
    <div className="app">
      <h1 style={{ textAlign: "center", color: "#267198", fontSize: "45px" }}>
        Todo-APP
      </h1>
      <div className="app-container">
        <TodoCreate onCreateTodo={createTodo} />
        <Todo
          todoList={todo}
          onRemoveTodo={removeTodo}
          onUpdateTodo={handleUpdateTodo}
        />
      </div>
    </div>
  );
}

export default App;
