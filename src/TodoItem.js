import React from 'react';

function TodoItem({ todo, index, completed, deleteTodo, toggleComplete }) {
  return (
    <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <label style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleComplete(index)}
          style={{ marginRight: '10px', cursor: 'pointer' }}
        />
        {todo}
      </label>
      <button
        onClick={() => deleteTodo(index)}
        className="delete-button"
      >
        X
      </button>
    </li>
  );
}

export default TodoItem;