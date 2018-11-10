import axios from 'axios';

// Android Studio: 10.0.2.2
// Genemotion: 10.0.3.2

const api = axios.create({
  baseURL: 'http://10.0.2.2:3000',
});

export default api;
