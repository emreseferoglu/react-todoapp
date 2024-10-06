import "./App.css";
import Todo from "./components/Todo";
import TodoCreate from "./components/TodoCreate";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <TodoCreate />
        <Todo />
      </div>
    </div>
  );
}

export default App;
