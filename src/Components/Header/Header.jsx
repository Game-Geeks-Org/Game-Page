

import { useRef, useEffect, useState } from 'react'

import './Header.css'
import {Container } from 'reactstrap'
import {NavLink,} from 'react-router-dom'
import logo from '../../Assets/Images/logo.png'

const NAV__LINKS = [
  {
    display: 'Home',
    url: '/home' 
},

{
    display: 'Dashboard',
    url: '/dashboard' 
},
{
    display: 'NFT Store',
    url: '/nftstore' 
},

{
    display: 'Games',
    url: '/game'
},
]

function Header() {
    // Scroll HANDLER
    // const [prevScrollPos, setPrevScrollPos] = useState(0);
    // const [visible, setVisible] = useState(true);

    // const handleScroll = () => {
    //      const currentScrollPos = window.pageYOffset;
    //     setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    //     setPrevScrollPos(currentScrollPos);
    //   };
    
    // 
    //   useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    
    //     return () => window.removeEventListener('scroll', handleScroll);
    
    //   }, [prevScrollPos, visible, handleScroll]);
    
    // Scroll HANDLER END



  const menuRef = useRef(null)
  const toggleMenu = () => menuRef.current.classList.toggle('active__menu')
  return (
    <header className='header'>
    {/* <header className='header' style={{top: visible ? '0' : '-80px'}}> */}
        <Container>
            <div className="navigation">
                <div className="logo">
                <img src={logo} alt="star" width='70px' />
                
                </div>
                <div className="nav__menu" ref ={menuRef} onClick={toggleMenu}>
                    <ul className="nav__list">
                        { NAV__LINKS.map((item,index) =>(
                                    <li className="nav-item" key={index}>
                                    <NavLink to={item.url} className={navClass => navClass.isActive ? 'active': ""}>{item.display}</NavLink>
                                </li>
                             ))}
                    </ul>
                </div>

                <div className="nav-right d-flex align-items-center gap-5">

                         {/* MOBILE MENU */}
                         <span className='mobile_menu'><i class="ri-menu-2-line" onClick={toggleMenu}></i></span>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header