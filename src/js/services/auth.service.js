import axios from 'axios';
import API_ENV from '../config/api.config';

export async function login(email, password) {
    const data = JSON.stringify({ email, password });
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const response = await axios.post(`${API_ENV.apiUrl}/auth/login`, data, config);
        if (response.data.auth) {
            localStorage.setItem('my_app_token', response.data.token)
        }
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
}

export async function register(obj) {
    const data = JSON.stringify(obj);
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const response = await axios.post(`${API_ENV.apiUrl}/auth/signup`, data, config);
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
}