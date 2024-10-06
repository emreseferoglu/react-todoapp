import React from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import "../css/Todo.css";
function Todo() {
  return (
    <div className="main-container">
      <div className="todo-container">
        <div>React çalış emre!</div>
        <div className="process-container">
          <div className="process">
            <IoMdClose
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
    </div>
  );
}

export default Todo;
