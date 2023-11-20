import axios from 'axios';

const REACT_APP_API_URL = 'https://api.dictionaryapi.dev/';

const axiosInstance = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 404) {
      window.location.href = '/404';
    }
    return Promise.reject(
      error.response?.message || 'Failed: Unknown error, please try again later.',
    );
  },
);

export default axiosInstance;
