import { FooterContainer, SocialBar } from './styles'

// import { useNavigate } from 'react-router-dom'
import {
  IoLogoTiktok,
  IoLogoTwitter,
  IoLogoInstagram
} from 'react-icons/io5'
import { BaseLeft } from '../../pages/Home/styles'
export default function Footer () {
  // const navigate = useNavigate()
  const day = new Date().getFullYear()
  return (
    <div className='relative mt-[-50px]'>
      <BaseLeft />
      <FooterContainer >

        <div className='custom-container footer'>
          <SocialBar>
            <IoLogoInstagram color="white"/>
            <IoLogoTwitter color="white"/>
            <IoLogoTiktok color="white"/>
          </SocialBar>
          <div className='text'>
            <ul>
              <li>
              Support
              </li>
              <li>
              Info
              </li>
              <li>
              Contacts
              </li>
            </ul>
            <p>
              <p>&copy;{day} Our Company</p>
            </p>
          </div>

        </div>
      </FooterContainer>
    </div>
  )
}
