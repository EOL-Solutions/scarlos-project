import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const FooterContainer = styled.footer`
  width: 100vw;
  padding: 37px 0;
  background-color: #5289B5;
  .footer{
    place-content: center;
  }
  .text{
    display: grid;
    gap: 12px;
    ul{
      display: flex;
      flex-direction: row;
      gap: 20px;
      li{
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover{
          transform: scale(1.1);
        }
      }
    }
    p{
      text-align: center;
    }
  }
  ${ResponsiveTo('lg')}{
    z-index: 11;
  }
`
export const SocialBar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 20px auto;
  svg{
    cursor: pointer;
    width: 20px;
    height: 20px;
    transition: all 0.3s ease-in-out;
    &:hover{
      transform: scale(1.1);
    }
  }
`
