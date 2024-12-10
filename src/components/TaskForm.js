import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; // Corrected import

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [userId, setUserId] = useState('');

  // Function to get the userId from the token
  const getUserIdFromToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token); // Decode the JWT token
        return decoded.userId; // Assuming 'userId' is part of the token payload
      } catch (error) {
        console.error('Invalid token');
        return null;
      }
    }
    return null;
  };

  useEffect(() => {
    const userIdFromToken = getUserIdFromToken();
    if (userIdFromToken) {
      setUserId(userIdFromToken); // Set userId only once when the component mounts
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && userId) {
      addTask({
        title: task,
        completed: false,
        userId: userId, // Ensure userId is passed as a string (ObjectId format)
      });
      setTask('');
    } else {
      console.error('No userId found or task is empty');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
