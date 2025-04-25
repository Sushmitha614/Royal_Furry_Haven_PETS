import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const api = {
    // Products
    getAllProducts: () => axios.get(`${API_URL}/products`),
    
    // Auth
    login: (credentials) => axios.post(`${API_URL}/auth/login`, credentials),
    register: (userData) => axios.post(`${API_URL}/auth/register`, userData),
};