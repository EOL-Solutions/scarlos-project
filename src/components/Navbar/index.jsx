
import { Link } from 'react-router-dom'
import { Header, Menu } from './styles'

import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseOutline } from 'react-icons/io5'
import { useEffect, useState } from 'react'
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
  const [isOpen, setIsOpen] = useState(false)
  const [addCloseAnimation, setAddCloseAnimation] = useState(false)
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      setShowFixed(window.scrollY > 80)
    }
    document.addEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.getElementById('id-menu').addEventListener('animationend', (e) => {
      if (e.animationName === 'ehRXfe') {
        setIsOpen(false)
        setAddCloseAnimation(false)
      }
    })
  }, [])
  return (
    <Header
      isOpen={isOpen}
      showFixed = {showFixed}
    >
      <nav className='flex w-full flex-cols justify-between'>
        <figure className='logo'>
          <h2>LOGO</h2>
        </figure>
        <button className='menu-btn' onClick={() => setIsOpen(!isOpen)}>
          <p >Menu</p>
          <GiHamburgerMenu color="white"/>
        </button>
        <Menu isOpen={isOpen} addCloseAnimation={addCloseAnimation}>
          <button className='close-btn' onClick={() => {
            setAddCloseAnimation(true)
          }}>
            <IoCloseOutline color='white' />
          </button>
          <ul id="id-menu">
            {
              OptionsMenu.map((item, index) => (
                <li key={index} >
                  <Link to={item.path} onClick={() => setIsOpen(false)}>{item.label}</Link>
                </li>))
            }
          </ul>
        </Menu>
      </nav>
    </Header>
  )
}
