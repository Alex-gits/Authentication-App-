import axios from 'axios';
import API_ENV from '../config/api.config';

// Запросы на получение стран и городов

export async function countries() {
    try {
        const response = await axios.get(`${API_ENV.apiUrl}/location/get-countries`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export async function cities(index) {
    try {
        const response = await axios.get(`${API_ENV.apiUrl}/location/get-cities/${index}`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}