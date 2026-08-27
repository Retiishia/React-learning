function FilterButtons({ filter, setFilter, darkMode, setDarkMode }) {
  return (
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
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}

export default FilterButtons;