// src/TodoItem.js
import React from 'react';

function TodoItem({ todo, index, toggleComplete, removeTodo }) {
  return (
    <li className={todo.completed ? "completed" : ""}>
      {todo.text}
      <div>
        <button onClick={() => toggleComplete(index)}>
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => removeTodo(index)}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;
