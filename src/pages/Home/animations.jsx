import { css, keyframes } from 'styled-components'

const shiftRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
`
const shiftLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
`
const fadeIn = keyframes`
  0%{
    opacity: 0;
    filter: blur(20px);
  }
  10%{
    opacity: 1;
    filter:  blur(10px);
  }
`
export const shiftRightAnimation = ({ time = '1s', type = 'ease-in' } = {}) => css`
  animation: ${time} ${shiftRight} ${type};
`
export const shiftLeftAnimation = ({ time = '1s', type = 'ease-in' } = {}) => css`
  animation: ${time} ${shiftLeft} ${type};
`
export const fadeInAnimation = ({ time = '3s', type = 'ease' } = {}) => css`
  animation: ${time} ${fadeIn} ${type};
`
