import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, id, completed, deleteTodo, toggleTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo);

  const handleEditSubmit = (e) => {
    if (editText.trim() && (e.type === 'blur' || e.key === 'Enter')) {
      editTodo(id, editText);
      setIsEditing(false);
    }
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEditSubmit}
          onKeyPress={handleEditSubmit}
          autoFocus
          className="edit-input"
        />
      ) : (
        <span
          className={`todo-text ${completed ? 'completed' : ''}`}
          onDoubleClick={() => setIsEditing(true)}
        >
          {todo}
        </span>
      )}
      <div className="controls">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
          aria-label={`Mark ${todo} as ${completed ? 'incomplete' : 'complete'}`}
        />
        <button
          className="delete-button"
          onClick={() => deleteTodo(id)}
          aria-label={`Delete ${todo}`}
        >
          🗑️
        </button>
      </div>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default TodoItem;