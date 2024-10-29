import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 12000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

apiClient.interceptors.request.use(
    function (config) {
        console.log('REQUEST!!!!!');
        // Do something before the request is sent
        // For example, add an authentication token to the headers
        // const token = localStorage.getItem('authToken'); // taking auth token from local Storage
        // if (token) {
        //     config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    function (error) {
        // Handle the error
        console.log('REQUEST ERROR!!!!!');
        return Promise.reject(error);
    },
);

apiClient.interceptors.response.use(
    (response) => {
        console.log('RESPONSE!!!!!');
        return response;
    },
    (error) => {
        // const status = error.response ? error.response.status : null;
        //
        // if (status === 401) {
        //     // Handle unauthorized access
        // } else if (status === 404) {
        //     // Handle not found errors
        // } else {
        //     // Handle other errors
        // }
        console.log('RESPONSE ERROR!!!!');

        return Promise.reject(error);
    },
);
