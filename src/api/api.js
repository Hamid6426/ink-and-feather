// src/api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-backend-domain.com/api', // Adjust this
});

export default api;