import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';
import logo from '../../../assets/images/logo.png';
import { MenuItems } from './NavbarItems/NavabrItems';
import { Container } from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import burger from '../../../assets/images/burger_icon.svg';
import closeIcon from '../../../assets/images/close_icon.svg';

const Navbar:React.FC = () => {

  const [click, setClick] = useState(false);
  const [show, setShow]  = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    if(click) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
 }, [click]);

  const checkScrollHeader = () => {
    if (!show && window.pageYOffset > 150) {
      setShow(true);
    } else if (show && window.pageYOffset <= 150) {
      setShow(false);
    }
  };

  window.addEventListener('scroll', checkScrollHeader);

  return (
    <>
      <header className={show ? styles.fixedHeader : ""}>
        <Container>
          <nav className={styles.navbar}>
            <Scroll to='download' className={styles.navbar__logo} smooth={true}>
              <img src={logo} alt="logo"/>
            </Scroll>
            <div className={styles.menu__icon_new} onClick={handleClick}>
              <img src={burger} alt="burger" />
            </div>
            <ul 
            className={click ? styles.nav__menu + " " + styles.active : styles.nav__menu}
            >
            <li>
              <img src={closeIcon} alt="closeIcon" onClick={closeMobileMenu}/>
            </li>
            { MenuItems.map((item, index) => (
              <li key={index} className={styles.nav__item}>
                <Scroll
                  to={item.path} 
                  className = {styles.nav__links}
                  onClick={closeMobileMenu}
                  smooth={true}
                  activeClass={styles.active}
                  spy={true}
                >
                  { item.title }
                </Scroll>
              </li>
            ))}
            </ul>
          </nav>
        </Container>
      </header>
    </>
  );
}

export default Navbar;
