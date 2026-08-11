import { useState } from "react";

function TodoApp() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  function handleAdding(event) {
    event.preventDefault();
    if (input.trim() === "") return;
      setList([
        ...list, 
        {
          id: Date.now(),
          text: input
        }
      ]);
      setInput("");
  }

  function handleDelete(id) {
    setList(list.filter((todo) => todo.id !== id));
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

        <button type="submit">
          Add
        </button>
      </form>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
