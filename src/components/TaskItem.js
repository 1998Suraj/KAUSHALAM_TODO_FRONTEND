import React from 'react';

const TaskItem = ({ task, editTask, deleteTask, toggleComplete }) => {
  return (
    <li
      className="task-item"
      style={{
        textDecoration: task.completed ? 'line-through' : 'none',
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task._id, !task.completed)}
      />
      <span className="task-title">{task.title}</span>
      <button
        onClick={() =>
          editTask(task._id, { ...task, title: prompt('Edit task:', task.title) })
        }
      >
        Edit
      </button>
      <button className="delete-btn" onClick={() => deleteTask(task._id)}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
