import { useState, useEffect } from "react";
import "./TodoApp.css";

import TodoInput from "./components/TodoInput";
import FilterButtons from "./components/FilterButtons";
import TodoStats from "./components/TodoStats";
import TodoItem from "./components/TodoItem";

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

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

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

  // 1️⃣ Start editing a todo
  function startEditing(todo) {
    setEditId(todo.id);
    setEditText(todo.text);
  }

  // 2️⃣ Save the updated text
  function handleSaveEdit(id) {
    if (editText.trim() === "") {
      // Optional: Delete if empty, or just return without saving
      setEditId(null);
      return;
    }
    setList((prevList) =>
      prevList.map((todo) =>
        todo.id === id ? { ...todo, text: editText } : todo,
      ),
    );
    setEditId(null); // Exit editing mode
  }

  // 3️⃣ Save on 'Enter' key press or cancel on 'Escape'
  function handleEditKeyDown(event, id) {
    if (event.key === "Enter") {
      handleSaveEdit(id);
    } else if (event.key === "Escape") {
      setEditId(null); // Cancel editing
    }
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
      
      <TodoInput
        input={input}
        setInput={setInput}
        handleAdding={handleAdding}
        setList={setList}
        />

        <FilterButtons
          filter={filter}
          setFilter={setFilter}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <TodoStats
          activeTodos={activeTodos}
          completedTodos={completedTodos}
          totalTodos={totalTodos}
        />

        {visibleTodos.length === 0 ? (
        <p className="empty-message">{getEmptyMessage()}</p>
      ) : (
        <ul>
          {visibleTodos.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              handleToggle={handleToggle}
              editId={editId}
              editText={editText}
              setEditText={setEditText}
              handleSaveEdit={handleSaveEdit}
              handleEditKeyDown={handleEditKeyDown}
              startEditing={startEditing}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoApp;
