import React from "react";
import "../css/TodoCreate.css";

function TodoCreate() {
  return (
    <div className="todo-create">
      <input className="todo-input" type="text" placeholder="Todo giriniz..." />
      <button type="button" className="create-todo-btn">
        Todo Oluştur
      </button>
    </div>
  );
}

export default TodoCreate;
