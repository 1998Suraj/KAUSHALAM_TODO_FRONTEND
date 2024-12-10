const getToken = () => {
  return localStorage.getItem('token');
};

const setToken = (token) => {
  localStorage.setItem('token', token);
};

const removeToken = () => {
  localStorage.removeItem('token');
};


const clearToken = () => localStorage.removeItem('token');

export { getToken, setToken, removeToken, clearToken };
