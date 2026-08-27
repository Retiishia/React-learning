function TodoInput({ input, setInput, handleAdding, setList }) {
  return (
    <form onSubmit={handleAdding} className="input-container">
      <input
        type="text"
        value={input}
        placeholder="Put Your ToDo Here...."
        onChange={(event) => setInput(event.target.value)}
      />
      <button type="submit">Add</button>
      <button type="button" onClick={() => setList([])} id="clear">
        Clear All
      </button>
    </form>
  );
}

export default TodoInput;