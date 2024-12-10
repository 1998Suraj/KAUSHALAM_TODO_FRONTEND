import axios from 'axios';

const API_URL = "https://kaushalam-todo-app-backend.onrender.com/auth";

const loginUser = (userData) => {
  return axios.post(`${API_URL}/login`, userData);
};

const signupUser = (userData) => {
  return axios.post(`${API_URL}/signup`, userData);
};

export { loginUser, signupUser };