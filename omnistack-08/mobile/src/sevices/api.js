import axios from 'axios';

const api = axios.create({
  baseURL: 'http://201.46.18.170:3333'
});

export default api;
