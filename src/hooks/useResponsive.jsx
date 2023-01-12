import { css } from 'styled-components'

export const ResponsiveTo = (width = '768px') => {
  const range = {
    // Tablet: '768px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px'
  }
  return (css`@media only screen and (min-width: ${range[width] || width} )`)
}
