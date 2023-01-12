import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Menu } from './styles'

import { RiLogoutCircleRLine } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseOutline } from 'react-icons/io5'
const OptionsMenu = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'About',
    path: '/about'
  },
  {
    label: 'Gallery',
    path: '/gallery'
  },
  {
    label: 'Events',
    path: '/events'
  }
]
export default function Navbar () {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Header isOpen={isOpen}>
      <nav className='flex w-full flex-cols justify-between'>
        <figure className='logo'>
          <RiLogoutCircleRLine color='white' size={40}/>
        </figure>
        <button className='menu-btn' onClick={() => setIsOpen(!isOpen)}>
          <p >Menu</p>
          <GiHamburgerMenu color="white"/>
        </button>
        <Menu isOpen={isOpen}>
          <button className='close-btn' onClick={() => setIsOpen(!isOpen)}>
            <IoCloseOutline color='white' />
          </button>
          <ul>

            {
              OptionsMenu.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.label}</Link>
                </li>))
            }

          </ul>
        </Menu>
      </nav>
    </Header>
  )
}
