import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const FooterContainer = styled.footer`
  width: 100vw;
  padding: 37px 0;
  bottom: 0;
  background-color: transparent;
  ${ResponsiveTo('lg')}{

    background-color: transparent;
    z-index: 11;
  }
`
