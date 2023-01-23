import styled, { css } from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'
import { animationCloseMenu, animationMenu, animationSwipe, animationSwipe2 } from './animations'

export const Header = styled.header`
  position: absolute;
  z-index: 11;
  width: 100%;
  background: transparent;
  height: 90px;
  display: grid;
  align-items: center;
  ${animationSwipe({ time: '0.5s' })}
  transition: all 0.3s ease-in-out;
 ${props => props.showFixed && css`
    top:0px;
    position: fixed;
    background: linear-gradient(0deg, rgba(0,0,0,0) 8%, rgba(0,0,0,0.5) 74%, rgba(0,0,0,0.6) 100%);
    ${animationSwipe2({ time: '0.6s' })}
  `}
  
  nav{
    padding: 1em 2em 1em 2em;
  }
  .logo{
    display:none;
  }
  .menu-btn{
    color: white;
    height: 40px;
    width: 40px;
    border-radius:12px;
    background-color: transparent;
    border: 2px solid white;
    p{
      display:none;
    }
    svg{
      width: 30px;
      height: 30px;
      margin: 0 auto;
    }
  }
  ${ResponsiveTo('lg')}{
    nav{
      max-width: 960px;
      margin: 0 auto;
      padding: 0;
    }
    .logo{
      display:block;
    }
    .menu-btn{
      width: 110px;
       p{
        display:block;
      } 
      svg{
        display:none;
      }
    }
  }
`
export const Menu = styled.div`
  color: white;
  display: none;
  transition: all 0.5s ease-in-out;
  .close-btn{
    position: absolute;
    top: 10px;
    right: 10px;
    transition: all 0.3s ease-in-out;
    svg{
      width: 60px;
      height: 60px;
    }
  }
  ${props => props.isOpen &&
  css`
    position: absolute;
    display: grid;
    place-content: center;
    width: 100%;
    height: 100vh;
    background-color: #00000084;
    backdrop-filter: blur(2px);
    top: 0;
    left: 0;
    ul{
      display: grid;
      border-radius: 8px;
      padding: 20px 40px ;
      gap: 20px;
      background-color: #5289B5;
      ${animationMenu()}
      li{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 40px; 
        border-radius: 4px;
        transition: all 0.5s ease-in-out;
        &:hover{
          background-color: #00000084;
        }
      }
    }`} 
    ${props => props.addCloseAnimation && css`
      opacity: 0;
      ul{
        ${animationCloseMenu({ time: '0.5s' })}
      }
    `}
  `
