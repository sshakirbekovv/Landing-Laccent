import { Button, Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styles from './Footer.module.scss';
import playmarket from '../../../assets/images/GooglePlay.svg';
import appstore from '../../../assets/images/AppStore.svg';
import instagram from '../../../assets/images/instagram.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import { Link as Scroll } from 'react-scroll';
import { MenuItems } from '../Header/NavbarItems/NavabrItems';

const Footer:React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [errorEmail, setErrorEmail] = useState<string>('E-mail can`t be empty!');
    const [success, setSuccess] = useState<string>('');
    const [validForm, setValidForm] = useState<boolean>(false);
    const [errorEmailWas, setErrorEmailWas] = useState<boolean>(false);
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        if(errorEmail) {
            setValidForm(false);
        } else {
            setValidForm(true);
        }
        Aos.init({ duration: 2000 });
     }, [errorEmail]);

     const emailHandler = (e: { target: { value: string; }; }) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(e.target.value).toLowerCase())){
            setSuccess('');
            setErrorEmail('Invalid email!'); 
          if(!e.target.value) {
            setSuccess('');
            setErrorEmail('E-mail can`t be empty!');
        }   
        } else {
          setErrorEmail('');
        }
    }

    const sendEmailSub = (e: any) => {
        e.preventDefault();
        
        emailjs.sendForm('service_xb403gb', 'template_gymv1lr', e.target, 'user_P89Wck15ASnKOxbgJi9pa')
          .then((result) => {
              setEmail('');
              setSuccess('You`ve been subscribed!');
              setValidForm(false);
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }

    const blurHandle = (e: { target: { name: string; }; }) => {
        if (e.target.name) {
            setErrorEmailWas(true);
        }
    }

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 200) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 200) {
            setShowScroll(false);
        }
    };

    window.addEventListener('scroll', checkScrollTop);

     return (
        <footer className={styles.main_footer} id={MenuItems[2].path}>
            <Container>
                <Grid container direction="row" item md={12} data-aos='fade-in'>
                    <Grid item md={7} lg={7} xl={7} sm={12} xs={12}>
                        <div className={styles.main_footer_header}>
                            <h2>Find easy</h2>
                            <p>Stay stylish</p>
                        </div>
                        <div className={styles.main_footer_stores}>
                            <a href="https://play.google.com/store/apps/details?id=kz.laccent" target="_blank" rel="noopener noreferrer">
                                <img src={playmarket} alt="Play Market"/>
                            </a>
                            <a href="https://apps.apple.com/kz/app/laccent/id1563932291" target="_blank" rel="noopener noreferrer">
                                 <img src={appstore} alt="App Store"/>
                            </a>
                        </div>
                        <div className={styles.socials}>
                            <a href="https://www.instagram.com/laccent.style/" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} alt="Instagram"/>
                            </a>
                        </div>
                        <div className={styles.privacy}>
                            <a href='/files/licence.pdf' download>
                                Privacy Policy
                            </a>
                            <a href='/files/licence.pdf' download>
                                Terms and Conditions
                            </a>
                        </div>
                    </Grid>
                    <Grid item md={12} lg={5} xl={5} sm={12} xs={12}>
                        <div className={styles.main_footer_news}>
                            <h2>Get Great News from Us</h2>
                            <p>
                            We value <a href='/files/licence.pdf' download>privacy</a> and would never spam you!
                            The only reason we will ever send anything 
                            is to share important updates about our App 
                            </p>
                        </div>
                        <Grid container direction='column' item sm={12} md={12}>
                            <div className={styles.subscribe}>
                                <form onSubmit={sendEmailSub}>
                                    <label htmlFor="email">E-mail</label>
                                    <fieldset>
                                        <input onBlur={e => blurHandle(e)} value={email} type="email" name="email" placeholder="e.g. laccent@gmail.com" onChange={e => emailHandler(e)}/>
                                        <Button 
                                        style={{ backgroundColor: '#717FE0' }} 
                                        disabled={!validForm} 
                                        type='submit'>Subscribe</Button>
                                    </fieldset>
                                    {(errorEmailWas && errorEmail) && <div className={styles.error}>{ errorEmail }</div>}
                                    <div className={styles.success}>{success}</div>
                                </form>
                            </div>
                            <div className={styles.privacy + " " + styles.privacy__mobile}>
                                <a href='/files/licence.pdf' download>
                                    Privacy Policy
                                </a>
                                <a href='/files/licence.pdf' download>
                                    Terms and Conditions
                                </a>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item md={12} lg={12} sm={12} xs={12}> 
                       <div className={styles.copyright}>
                            Copyright © 2021. Almaty, Kazakhstan. <br/>
                            All rights reserved.
                       </div>
                    </Grid>
                </Grid>
            </Container>
            <Scroll to='main' smooth={true}>
            <div 
            className={styles.scrollToTop} 
            style={{display: showScroll ? 'block' : 'none'}}
            >
            </div>
            </Scroll>
        </footer>
     );
};

export default Footer;