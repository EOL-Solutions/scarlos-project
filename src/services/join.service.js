/* eslint-disable no-unused-vars */
import {
  axiosInstanceFormData
} from './instances.js'

export const addRegister = async (formData) => {
  const { data } = await axiosInstanceFormData.post('register', formData)
  return data
}
