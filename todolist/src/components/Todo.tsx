import React from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import "../css/Todo.css";

interface Todo {
  id: number;
  content: string;
}

interface TodoProps {
  todoList: Todo[];
}

function Todo({ todoList, onRemoveTodo }: TodoProps) {
  return (
    <div className="main-container">
      {todoList?.map((todo) => (
        <div className="todo-container" key={todo.id}>
          <div>{todo.content}</div>
          <div className="process-container">
            <div className="process">
              <IoMdClose
                onClick={(event) => onRemoveTodo(todo.id)}
                style={{
                  borderRadius: "50%",
                  background: "black",
                  color: "white",
                  fontSize: "30px",
                  padding: "8px",
                  cursor: "pointer",
                }}
              />
              <MdOutlineEdit
                style={{
                  borderRadius: "50%",
                  background: "black",
                  color: "white",
                  fontSize: "30px",
                  padding: "8px",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;
