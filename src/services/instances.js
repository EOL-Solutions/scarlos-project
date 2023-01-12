import axios from 'axios'

// const API_BASE_URL = import.meta.env.VITE_API_EXPRESS

const API_BASE_URL = 'http://52.56.97.127:3000/'

export const axiosInstanceFormData = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json'
  }
})
