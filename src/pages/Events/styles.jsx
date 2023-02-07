import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'
import cloudImg from '@/images/clouds.jpg'
export const Main = styled.main`
  background-color: #1F3541;
  min-height: 100vh;
`
export const Banner = styled.section`
  height: 500px;
  display: grid;
  align-items: center;
  background: url(${cloudImg});
  background-size: cover;
  background-position-y: top;
  background-attachment: fixed;
  ${ResponsiveTo('lg')}{
    height: 700px;
  }
  hr{
    margin: 30px 0;
  }
`
export const CardsContainer = styled.section`
  position: relative;
  padding-bottom: 100px;
  .grid-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap:20px;
  }
  &:before,
  &:after {
      content: "";
      position: absolute;
      left: 0;
      width: 0;
      height: 0;
      border-style: solid;
  }
  &:before {
      top: -50px;
      border-width: 0 0 50px 100vw;
      border-color: transparent transparent #1F3541 transparent;
  }

  ${ResponsiveTo('lg')}{
    .grid-container{
      gap:80px;
    }
  }
`
export const Card = styled.article`
  display: grid;
  grid-template-rows: 212px 1fr;
  height: 452px;
  width: 360px;
  background: #ffffff12;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.3s ease-in-out;
  img{
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
  }
  .text-box{
    padding: 10px 20px;
    display: grid;
    gap: 10px;
  }
  .footer{
    display: flex;
    align-items: center;
    gap: 20px;
    background: none;
    outline: none;
    border: none;
    text-transform: uppercase;
    color: white;
    .arrow{
      border: 2px solid #ffffff77;
      border-radius: 50%;
      width: 40px;
      height: 40px;
    }
  }
  &:hover{
    img{
      opacity: 0.7;
    }
    background: #ffffff31;
    box-shadow: 4px 4px 8px 8px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`
