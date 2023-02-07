import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'
import galleryImg from '../../assets/images/gallery.jpg'
export const Banner = styled.section`
  height: 500px;
  display: grid;
  align-items: center;
  background: url(${galleryImg});
  background-size: cover;
  background-position-y: top;
  background-attachment: fixed;
  
  ${ResponsiveTo('lg')}{
    height: 700px;
  } 
`

export const ImagesContainer = styled.section`
  position: relative;
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
      border-color: transparent transparent #E2E1DB transparent;
  }
  .images{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    img{
      width: 100%;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      transition: all 0.3s ease-in-out;
      opacity: 0.8;
      &:hover{
        transform: scale(1.1);
        opacity: 1;
        box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
    }
  }
  ${ResponsiveTo('lg')}{
    .images{
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
    }
  }
`
export const TextSection = styled.section`
  background: #1F3541;
  position: relative;
  padding-bottom: 100px;
  .custom-container{
    gap: 30px;
  }
  .image, .image2{
    float: left;
    padding: 0 1.5em 1em 0;
    top: 0.25em;
    img{
      width: 300px;
      height: 200px;
    }
  }
  .image2{
    float: right;
    padding: 0 0 1em 1.5em;
  }
 
  ${ResponsiveTo('lg')}{
    .image{
      img{
        width: 400px;
        height: 220px;
      }
    }
  }
`
