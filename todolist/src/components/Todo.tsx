import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

import "../css/Todo.css";

interface Todo {
  id: number;
  content: string;
}

interface TodoProps {
  todoList: Todo[];
  onRemoveTodo: (id: number) => void; // onRemoveTodo fonksiyonunu props olarak alıyoruz.
  onUpdateTodo: (id: number, newContent: string) => void; // onUpdateTodo fonksiyonunu ekliyoruz.
}

function Todo({ todoList, onRemoveTodo, onUpdateTodo }: TodoProps) {
  const [editableTodoId, setEditableTodoId] = useState<number | null>(null);
  const [newContent, setNewContent] = useState<string>("");

  return (
    <div className="main-container">
      {todoList?.map((todo) => (
        <div className="todo-container" key={todo.id}>
          {editableTodoId === todo.id ? (
            <input
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)} // Input değeri değiştiğinde newContent'i güncelle
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                borderRadius: "25px",
                backgroundColor: "#609296",
                fontSize: "20px",
                color: "white",
                fontWeight: "600",
              }}
              type="text"
              placeholder="Yapılacak Görevi değiştirin..."
            />
          ) : (
            <div>{todo.content}</div>
          )}

          <div className="process-container">
            <div className="process">
              <IoMdClose
                onClick={() => onRemoveTodo(todo.id)}
                style={{
                  borderRadius: "50%",
                  background: "black",
                  color: "white",
                  fontSize: "30px",
                  padding: "8px",
                  cursor: "pointer",
                }}
              />
              {editableTodoId === todo.id ? (
                <FaCheck
                  onClick={() => {
                    onUpdateTodo(todo.id, newContent);
                    setEditableTodoId(null); // Düzenleme modunu kapat
                    setNewContent("");
                  }}
                  style={{
                    borderRadius: "50%",
                    background: "black",
                    color: "white",
                    fontSize: "30px",
                    padding: "8px",
                    cursor: "pointer",
                  }}
                />
              ) : (
                <MdOutlineEdit
                  onClick={() => {
                    setEditableTodoId(todo.id); // Düzenleme moduna geç
                    setNewContent(todo.content); // Mevcut içeriği inputta göster
                  }}
                  style={{
                    borderRadius: "50%",
                    background: "black",
                    color: "white",
                    fontSize: "30px",
                    padding: "8px",
                    cursor: "pointer",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;
