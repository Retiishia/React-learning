import { useState, useEffect } from "react";
import "./TodoApp.css";

function TodoApp() {
  const [input, setInput] = useState("");

  // Theme State
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // FILTER STATE (Stores string: "all", "active", or "completed")
  const [filter, setFilter] = useState(() => {
    return localStorage.getItem("filter") || "all";
  });

  // TODOS LIST STATE (Stores the Array of tasks)
  const [list, setList] = useState(() => {
    const savedList = localStorage.getItem("todos");
    return savedList ? JSON.parse(savedList) : [];
  });

  // 2️⃣ useEFFECT hook: Save the list to localStorage whenever it changes
  // runs AUTOMATICALLY everytime "list" changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);

  // Auto-save filter choice whenever 'filter' changes
  useEffect(() => {
    localStorage.setItem("filter", filter);
  }, [filter]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  function handleAdding(event) {
    event.preventDefault();
    if (input.trim() === "") return;
    setList((prevList) => [
      ...prevList,
      {
        id: Date.now(),
        text: input,
        completed: false,
      },
    ]);
    setInput("");
  }

  function handleDelete(id) {
    setList((prevList) => prevList.filter((todo) => todo.id !== id));
  }

  function handleToggle(id) {
    setList((prevList) =>
      prevList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    );
  }

  function getEmptyMessage() {
    if (filter === "all") return "No todos yet! Add your first todo! 📝";
    if (filter === "active") return "All caught up! No active todos! 🎉";
    if (filter === "completed") return "No completed todos! Keep going! 💪";
  }

  // 1️⃣ DERIVED STATE: Filters the list dynamically on every render
  const visibleTodos = list.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // "all"
  });

  const totalTodos = list.length;
  const completedTodos = list.filter((todo) => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  return (
    <div className="container">
      <h1>Todo List</h1>
      <form onSubmit={handleAdding} className="input-container">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit">Add</button>
        <button type="button" onClick={() => setList([])} id="clear">
          Clear All
        </button>
      </form>

      {/* 2️⃣ FILTER BUTTONS */}
      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active-filter" : ""}
          onClick={() => setFilter("all")}
        >
          Show All
        </button>
        <button
          className={filter === "active" ? "active-filter" : ""}
          onClick={() => setFilter("active")}
        >
          Show Active
        </button>
        <button
          className={filter === "completed" ? "active-filter" : ""}
          onClick={() => setFilter("completed")}
        >
          Show Completed
        </button>

        <button 
        type="button"
        id="theme-toggle"
        onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* LIVE STATS */}
      <p id="statistics">
        <strong>{activeTodos}</strong> Active |{" "}
        <strong>{completedTodos}</strong> Completed |{" "}
        <strong>{totalTodos}</strong> Total
      </p>

      {/* EMPTY MESSAGE */}
      {visibleTodos.length === 0 ? (
        <p className="empty-message">{getEmptyMessage()}</p>
      ) : (
        <ul>
          {/* 3️⃣ MAP OVER DERIVED STATE INSTEAD OF ORIGINAL LIST */}
          {visibleTodos.map((item) => (
            <li key={item.id}>
              <span
                onClick={() => handleToggle(item.id)}
                className={`todo-text ${item.completed ? "completed" : ""}`}
              >
                {item.text}
              </span>
              <button
                className="action-button delete-btn"
                onClick={() => handleDelete(item.id)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoApp;
