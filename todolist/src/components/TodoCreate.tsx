import React, { useState } from "react";
import "../css/TodoCreate.css";

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const createTodo = () => {
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 111111),
      content: newTodo,
    };

    onCreateTodo(request);
  };

  return (
    <div className="todo-create">
      <input
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
        className="todo-input"
        type="text"
        placeholder="Todo giriniz..."
      />
      <button onClick={createTodo} type="button" className="create-todo-btn">
        Todo Oluştur
      </button>
    </div>
  );
}

export default TodoCreate;
