import axios from 'axios'

const API= axios.create({
    baseURL:'http://localhost:2000'
})


API.interceptors.request.use(
    (config) => {
        // Change 'token' to whatever key you used when saving it during login (e.g., 'authToken')
        const token = localStorage.getItem('token'); 
        
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default API;