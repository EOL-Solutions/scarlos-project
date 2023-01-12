import { atom } from 'recoil'

export const succesfulModalState = atom({
  key: 'succesfulModal',
  default: false
})

export const errorModalState = atom({
  key: 'errorModal',
  default: {
    isOpen: false,
    message: ''
  }
})
