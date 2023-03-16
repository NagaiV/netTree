import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL

export default function axiosClient() {
  let defaultOptions = {
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      accept: 'application/json',
    },
  }
  let instance = axios.create(defaultOptions)
  instance.interceptors.request.use(function (config) {
    config.headers.common = {
      'x-auth-token': `${localStorage.getItem('token')}`,
    }
    return config
  })
  return instance
}
