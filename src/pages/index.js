// import React, { useState, useEffect } from 'react';
// import TaskForm from '../components/TaskForm';
// import TaskList from '../components/TaskList';
// import { getTasks, addTask, editTask, deleteTask, toggleComplete } from '../services/api';
// import { getToken } from '../utils/tokenUtils';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
//  import '../App.css';

// const IndexPage = () => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const token = getToken();
//     if (token) {
//       setLoading(true);
//       getTasks(token)
//         .then((response) => setTasks(response.data))
//         .catch((error) => {
//           console.error('Error fetching tasks:', error);
//           toast.error('Failed to load tasks!');
//         })
//         .finally(() => setLoading(false));
//     }
//   }, []);

//   const handleAddTask = (task) => {
//     const token = getToken();
//     if (token) {
//       setLoading(true);
//       addTask(task, token)
//         .then((response) => {
//           setTasks([...tasks, response.data]);
//           toast.success('Task added successfully!');
//         })
//         .catch((error) => {
//           console.error('Error adding task:', error);
//           toast.error('Failed to add task!');
//         })
//         .finally(() => setLoading(false));
//     }
//   };

//   const handleEditTask = (id, updatedTask) => {
//     const token = getToken();
//     if (token) {
//       setLoading(true);
//       editTask(id, updatedTask, token)
//         .then((response) => {
//           const updatedTasks = tasks.map((task) => (task._id === id ? response.data : task));
//           setTasks(updatedTasks);
//           toast.success('Task updated successfully!');
//         })
//         .catch((error) => {
//           console.error('Error editing task:', error);
//           toast.error('Failed to update task!');
//         })
//         .finally(() => setLoading(false));
//     }
//   };

//   const handleDeleteTask = (id) => {
//     const token = getToken();
//     if (token) {
//       setLoading(true);
//       deleteTask(id, token)
//         .then(() => {
//           setTasks(tasks.filter((task) => task._id !== id));
//           toast.success('Task deleted successfully!');
//         })
//         .catch((error) => {
//           console.error('Error deleting task:', error);
//           toast.error('Failed to delete task!');
//         })
//         .finally(() => setLoading(false));
//     }
//   };

//   const handleToggleComplete = (id) => {
//     const token = getToken();
//     if (token) {
//       setLoading(true);
//       toggleComplete(id, token)
//         .then((response) => {
//           const updatedTasks = tasks.map((task) =>
//             task._id === id ? response.data : task
//           );
//           setTasks(updatedTasks);
//           toast.success('Task status updated!');
//         })
//         .catch((error) => {
//           console.error('Error toggling task completion:', error);
//           toast.error('Failed to update task status!');
//         })
//         .finally(() => setLoading(false));
//     }
//   };

//   return (
//     <div className="task-manager">
//       <ToastContainer />
//       <h1>Todo App</h1>
//       {loading && <div className="loading-spinner"></div>}
//       <TaskForm addTask={handleAddTask} />
//       <TaskList
//         tasks={tasks}
//         editTask={handleEditTask}
//         deleteTask={handleDeleteTask}
//         toggleComplete={handleToggleComplete}
//       />
//     </div>
//   );
// };

// export default IndexPage;


import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { getTasks, addTask, editTask, deleteTask, toggleComplete } from '../services/api';
import { getToken, clearToken } from '../utils/tokenUtils'; // Ensure `clearToken` clears token from localStorage
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; // If you're using react-router-dom for navigation
import '../App.css';

const IndexPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const token = getToken();
    if (token) {
      setLoading(true);
      getTasks(token)
        .then((response) => setTasks(response.data))
        .catch((error) => {
          console.error('Error fetching tasks:', error);
          toast.error('Failed to load tasks!');
        })
        .finally(() => setLoading(false));
    } else {
      navigate('/login'); // Redirect if no token is present
    }
  }, [navigate]);

  const handleAddTask = (task) => {
    const token = getToken();
    if (token) {
      setLoading(true);
      addTask(task, token)
        .then((response) => {
          setTasks([...tasks, response.data]);
          toast.success('Task added successfully!');
        })
        .catch((error) => {
          console.error('Error adding task:', error);
          toast.error('Failed to add task!');
        })
        .finally(() => setLoading(false));
    }
  };

  const handleEditTask = (id, updatedTask) => {
    const token = getToken();
    if (token) {
      setLoading(true);
      editTask(id, updatedTask, token)
        .then((response) => {
          const updatedTasks = tasks.map((task) => (task._id === id ? response.data : task));
          setTasks(updatedTasks);
          toast.success('Task updated successfully!');
        })
        .catch((error) => {
          console.error('Error editing task:', error);
          toast.error('Failed to update task!');
        })
        .finally(() => setLoading(false));
    }
  };

  const handleDeleteTask = (id) => {
    const token = getToken();
    if (token) {
      setLoading(true);
      deleteTask(id, token)
        .then(() => {
          setTasks(tasks.filter((task) => task._id !== id));
          toast.success('Task deleted successfully!');
        })
        .catch((error) => {
          console.error('Error deleting task:', error);
          toast.error('Failed to delete task!');
        })
        .finally(() => setLoading(false));
    }
  };

  // const handleToggleComplete = (id) => {
  //   const token = getToken();
  //   if (token) {
  //     setLoading(true);
  //     toggleComplete(id, token)
  //       .then((response) => {
  //         const updatedTasks = tasks.map((task) =>
  //           task._id === id ? response.data : task
  //         );
  //         setTasks(updatedTasks);
  //         toast.success('Task status updated!');
  //       })
  //       .catch((error) => {
  //         console.error('Error toggling task completion:', error);
  //         toast.error('Failed to update task status!');
  //       })
  //       .finally(() => setLoading(false));
  //   }
  // };

  const handleToggleComplete = (id, completed) => {
    const token = getToken();
    if (token) {
      setLoading(true);
      toggleComplete(id, { completed }, token) // Pass the updated completed value
        .then((response) => {
          const updatedTasks = tasks.map((task) =>
            task._id === id ? response.data : task
          );
          setTasks(updatedTasks);
          toast.success('Task status updated!');
        })
        .catch((error) => {
          console.error('Error toggling task completion:', error);
          toast.error('Failed to update task status!');
        })
        .finally(() => setLoading(false));
    }
  };
  
  const handleLogout = () => {
    clearToken(); // Remove token from localStorage
    toast.info('Logged out successfully!');
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="task-manager">
      <ToastContainer />
      <header className="header">
        <h1>Todo App</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>
      {loading && <div className="loading-spinner"></div>}
      <TaskForm addTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        editTask={handleEditTask}
        deleteTask={handleDeleteTask}
        toggleComplete={handleToggleComplete}
      />
    </div>
  );
};

export default IndexPage;
