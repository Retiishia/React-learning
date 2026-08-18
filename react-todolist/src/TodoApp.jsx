import { useState } from "react";

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
      },
    ]);
    setInput("");
  }

  function handleDelete(id) {
    setList(prevList => prevList.filter((todo) => todo.id !== id));
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
            {item.text}
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
