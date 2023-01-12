import styled, { css } from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const Header = styled.header`
  position: absolute;
  z-index: 11;
  width: 100%;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  height: 90px;
  display: grid;
  align-items: center;
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
   
    .menu-btn{
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
    }`} 
  `
