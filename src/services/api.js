import axios from 'axios';

const API_URL = 'http://localhost:5000';

const getTasks = (token) => {
  return axios.get(`${API_URL}/tasks`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const addTask = (task, token) => {
  return axios.post(`${API_URL}/tasks`, task, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const editTask = (id, task, token) => {
  return axios.put(`${API_URL}/tasks/${id}`, task, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const deleteTask = (id, token) => {
  return axios.delete(`${API_URL}/tasks/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const toggleComplete = (id, data, token) => {
  return axios.patch(`${API_URL}/tasks/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { getTasks, addTask, editTask, deleteTask, toggleComplete };
