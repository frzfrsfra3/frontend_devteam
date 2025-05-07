import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api', // Laravel API URL
    withCredentials: true, // Required for Sanctum
});

export default axiosInstance;
