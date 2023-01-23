import styled from 'styled-components'
import { Section1 } from '../Home/styles'
import mountainsImg from '../../assets/images/mountains.jpg'
import { ResponsiveTo } from '../../hooks/useResponsive'
export const Banner = styled.section`
  width: 100%;
  height: 500px;
  background: url(${mountainsImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: grid;
  place-content: center;
  position: relative;
`
export const SectionAbout1 = styled(Section1)`
  background-color: #1F3541;
  position: relative;
  z-index: 1;
  .text-box{
    display: grid;
    hr{
      margin:30px 0;
    }
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

  &:after {
      bottom: -50px;
      border-width: 50px 100vw 0 0;
      border-color: #1F3541 transparent transparent transparent;
  }
`
export const FormSection = styled(SectionAbout1)`
  position: relative;
  z-index: 0;
  background:  linear-gradient(0deg, 
                rgba(31,53,65,0.5) 0%, 
                rgba(31,53,65,0.5) 100%), url(${mountainsImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 40px 0px ;
  height: auto;
  hr{
    margin: 30px 0;
  }
  .col-2{
    display: grid;
    gap: 20px;
    margin-top: 40px;
    ul{
      display: grid;
      gap: 28px;
    }
  }
  form{
    display: grid;
    gap: 20px;
    button{
      margin-left: auto;
    }
  }
  ${ResponsiveTo('lg')}{
    .col-2{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    }
  }
`
export const InputContainer = styled.div`
  display: grid;
`
