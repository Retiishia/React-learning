function TodoStats({ activeTodos, completedTodos, totalTodos }) {
  return (
    <p id="statistics">
      <strong>{activeTodos}</strong> Active |{" "}
      <strong>{completedTodos}</strong> Completed |{" "}
      <strong>{totalTodos}</strong> Total
    </p>
  );
}

export default TodoStats;