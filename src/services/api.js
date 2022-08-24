import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://rocketnotes-william-api.herokuapp.com',
})