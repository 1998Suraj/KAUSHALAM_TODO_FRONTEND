import axios from 'axios';

const API_URL = 'http://localhost:5000/auth';

const loginUser = (userData) => {
  return axios.post(`${API_URL}/login`, userData);
};

const signupUser = (userData) => {
  return axios.post(`${API_URL}/signup`, userData);
};

export { loginUser, signupUser };