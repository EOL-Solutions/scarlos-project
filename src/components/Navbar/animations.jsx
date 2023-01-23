import { keyframes, css } from 'styled-components'

const keySwipe = keyframes`
  from{
    opacity: 0;
    transform: translateY(-100px);
  }
`
const keySwipe2 = keyframes`
  from{
    opacity: 0;
    transform: translateY(-80px);
  } 
`
const keyMenu = keyframes`
  from{
    opacity: 0;
    transform: translateX(-140%);
  }
`
const keycloseMenu = keyframes`
  to{
    opacity: 0;
    transform: translateX(140%);
  }
`

export const animationSwipe = ({ time = '1s', type = 'ease-in' } = {}) => css`
  animation: ${time} ${keySwipe} ${type};
`
export const animationSwipe2 = ({ time = '1s', type = 'ease-in' } = {}) => css`
  animation: ${time} ${keySwipe2} ${type};
`

export const animationMenu = ({ time = '1s', type = 'ease-in-out' } = {}) => css`
  animation: ${time} ${keyMenu} ${type};
`
export const animationCloseMenu = ({ time = '1s', type = 'ease-in-out' } = {}) => css`
  animation: ${time} ${keycloseMenu} ${type};
`
