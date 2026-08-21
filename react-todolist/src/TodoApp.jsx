import { useState } from "react";
import "./TodoApp.css";

function TodoApp() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  function handleAdding(event) {
    event.preventDefault();
    if (input.trim() === "") return;
    setList(prevList => [
    ...prevList,
      {
        id: Date.now(),
        text: input,
        completed: false // Boolean Property
      },
    ]);
    setInput("");
  }

  function handleDelete(id) {
    setList(prevList => prevList.filter((todo) => todo.id !== id));
  }

  function handleToggle(id) {
    setList(prevList => prevList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed // Toggle the completed property
        };
      }
      return todo; //Return untouched if ID doesn't match
        })
    );
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAdding}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <button type="submit">Add</button>
      </form>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <span onClick={() => handleToggle(item.id)}
            className={`todo-text ${item.completed ? "completed" : ""}`}>
              {item.text}
            </span>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <button onClick={() => {
      setCount(prevCount => prevCount + 1)
      }}>Add +1</button>

      <p>Count: {count}</p>
    </div>
  );
}

export default TodoApp;
