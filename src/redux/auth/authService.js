import axiosClient from '../../helper'

const login = async (userData) => {
  const response = await axiosClient().post('/api/user/login', userData)
  console.log('responselogin', response)
}

const register = async (userData) => {
  const response = await axiosClient().post('/api/user/signup', userData)
  console.log('responseregister', response)
}

const authService = {
  login,
  register,
}

export default authService
