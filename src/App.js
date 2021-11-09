import TodoList from "./components/TodoList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>
        To-Do <span>List</span>
      </h1>
      <TodoList />
    </div>
  );
}
