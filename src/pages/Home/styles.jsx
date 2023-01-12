import styled from 'styled-components'
import mountainsImg from '../../assets/images/mountains.jpg'
export const Banner = styled.section`
  width: 100%;
  height: 500px;
  background: url(${mountainsImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

export const BaseLeft = styled.div`
  width: 0; 
  height: 0; 
  border-left: 100vw solid #5289B5;
  border-top: 50px solid transparent;
  position: absolute;
  top:-50px;
`
export const BaseRight  = styled.div`
  width: 0;
  height: 0; 
  border-right: 100vw solid #1F3541;
  border-top: 50px solid transparent;
  position: absolute;
  top:-50px;
`

export const Section1 = styled.section`
  margin: 50px 0;
  height: 400px;
  background-color: #5289B5;
  position: relative;
  margin-top: -50px;
`
export const Section2 = styled(Section1)`
  background-color: #1F3541;
  h2,p{
    text-align: right;
  }
`
