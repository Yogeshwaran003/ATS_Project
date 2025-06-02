// Helper to get/set/remove JWT token in localStorage
export const setToken = (token) => localStorage.setItem('token', token);
export const getToken = () => localStorage.getItem('token');
export const removeToken = () => localStorage.removeItem('token');

// Example: date formatting helper
export const formatDate = (dateStr) => new Date(dateStr).toLocaleString();
