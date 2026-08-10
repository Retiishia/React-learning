import { useState } from "react";

function TodoApp() {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

function handleAdding() {

}

function handleDelete(item) {
    setList(list.filter((todo) => todo !== item));
}
  return (
    <div>
      <h1>Todo List</h1>
      <input 
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />

        <button onClick={() => {
          setList([...list, input]);
          setInput("");
        }}>
          Add
        </button>

      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => { handleDelete(item) }}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default TodoApp;