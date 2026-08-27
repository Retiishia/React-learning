function TodoItem({
  item,
  handleToggle,
  editId,
  editText,
  setEditText,
  handleSaveEdit,
  handleEditKeyDown,
  startEditing,
  handleDelete,
}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => handleToggle(item.id)}
        aria-label={`Mark ${item.text} as ${item.completed ? "incomplete" : "complete"}`}
      />

      {editId === item.id ? (
        <input
          type="text"
          className="edit-input"
          value={editText}
          onChange={(event) => setEditText(event.target.value)}
          onBlur={() => handleSaveEdit(item.id)}
          onKeyDown={(event) => handleEditKeyDown(event, item.id)}
          onFocus={(event) => event.target.select()}
          autoFocus
        />
      ) : (
        <span
          onDoubleClick={() => startEditing(item)}
          className={`todo-text ${item.completed ? "completed" : ""}`}
        >
          {item.text}
        </span>
      )}

      <button
        className="action-button edit-btn"
        onClick={() => startEditing(item)}
        aria-label="Edit task"
      >
        ✏️
      </button>
      <button
        className="action-button delete-btn"
        onClick={() => handleDelete(item.id)}
        aria-label="Delete task"
      >
        ❌
      </button>
    </li>
  );
}

export default TodoItem;