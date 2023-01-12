import { FooterContainer } from './styles'

import { useNavigate } from 'react-router-dom'
export default function Footer () {
  const navigate = useNavigate()
  return (
    <FooterContainer >
      <div className='grid place-content-center custom-container'>
        <h2>Footer</h2>
      </div>
    </FooterContainer>
  )
}
