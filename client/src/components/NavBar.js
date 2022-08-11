import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';

import logo from '../assets/img/play-logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';

       

function NavBar() {
    const [activeLink, setActiveLink] = useState('/');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [])
    
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="/">
            <img style={{display:'center'}} src={logo} alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="/" className={activeLink === '/' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('/')}>Home</Nav.Link>
              <Nav.Link href="/new" className={activeLink === 'new' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('new')}>Create</Nav.Link>
              <Nav.Link href="/game-catalog" className={activeLink === 'game-catalog' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('game-catalog')}>Game Catalog</Nav.Link>
              <Nav.Link href="/about" className={activeLink === '/' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('/')}>About Us</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='#'><img src={navIcon1} alt=''/></a>
            </div>
            <button className='vvd' onClick={() => console.log('connect')}>
                <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;