import { Button, Container, Grid} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import phones from '../../../assets/images/phones.png';
import phone from '../../../assets/images/one_phone.png';
import styles from './ContentBody.module.scss';
import { MenuItems } from '../Header/NavbarItems/NavabrItems';
import emailjs from 'emailjs-com';
import elipse from '../../../assets/images/ellipse.svg';
import line from '../../../assets/images/line.svg';
import Aos from 'aos';
import mobile_phone from '../../../assets/images/phone_mobile.png';
import 'aos/dist/aos.css';
import DownloadLink from './DownloadLink/DownloadLink';

const ContentBody:React.FC = () => {

  const [name, setName] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const [success, setSuccess] = useState<string>('');

  const [validForm, setValidForm] = useState<boolean>(false);
  
  const [errorName, setErrorName] = useState<string>('Name can`t be empty!');
  const [errorLink, setErrorLink] = useState<string>('Link can`t be empty!');
  const [errorEmail, setErrorEmail] = useState<string>('E-mail can`t be empty!');

  const [errorNameWas, setErrorNameWas] = useState<boolean>(false);
  const [errorLinkWas, setErrorLinkWas] = useState<boolean>(false);
  const [errorEmailWas, setErrorEmailWas] = useState<boolean>(false);


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

  const usernameHandler = (e: { target: { value: string; }; }) => {
      setName(e.target.value);
      if(e.target.value.length <= 2) { 
          setSuccess('');
          setErrorName('Name is too short!');
        if(!e.target.value) {
          setSuccess('');
          setErrorName('Name can`t be empty!');
        }
      } else {
        setErrorName('');
      }
  }

  const linkHandler = (e: { target: { value: string; }; }) => {
    setLink(e.target.value);
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      if(!pattern.test(String(e.target.value).toLowerCase())) { 
          setSuccess('');
          setErrorLink('Invalid link!');
        if(!e.target.value) {
          setSuccess('');
          setErrorLink('Link can`t be empty!');
        }
      } else {
         setErrorLink('');   
      }
  }

  const blurHandle = (e: { target: { name: string; }; }) => {
      switch (e.target.name) {
          case 'name':
              setErrorNameWas(true)
              break
          case 'link':
              setErrorLinkWas(true)
              break
          case 'email':
              setErrorEmailWas(true)
              break
      }
  }

  useEffect(() => {
      if(errorName || errorLink || errorEmail) {
          setValidForm(false);
      } else {
          setValidForm(true);
      }
      Aos.init({ duration: 2000 });
   }, [errorName, errorLink, errorEmail]);

   const sendEmail = (e: any) => {
    e.preventDefault();
    
    emailjs.sendForm('service_xb403gb', 'template_zz06d6o', e.target, 'user_P89Wck15ASnKOxbgJi9pa')
      .then((result) => {
        if(result) {
          setName('');
          setEmail('');
          setLink('');
          setSuccess('E-mail was sent!');
          setValidForm(false);
        } else {
          setValidForm(true);
        }
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
   }

  return (
    <>
      <section className={styles.download} id='download' data-aos='fade-in'>
        <div className={styles.elipse1}>
          <img src={elipse} alt="elipse"/>
        </div>
          <Container>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              >
                <Grid container direction='column' item md={7} lg={7} sm={12}>
                    <div className={styles.content}>
                        <h1>An app for women to effortlessly stay stylish.</h1>
                        <p>Unites representatives of medium and small businesses in the field of clothing retail into a single retail space</p>
                        <div className={styles.image__mobile}>
                          <div className={styles.background}>
                          </div>
                          <div className={styles.image__mobile_wrapper}>
                            <img src={mobile_phone} alt="main_photo"/>
                          </div>
                         </div>
                        <DownloadLink />
                        <div className={styles.elipse2}>
                          <img src={elipse} alt="elipse"/>
                        </div>
                    </div>
                </Grid>
                <Grid container direction='column' item md={5}>
                    <div className={styles.image}>
                        <img src={phones} alt="phones"/>
                    </div>
                </Grid>
                <div className={styles.background}>
                </div>
            </Grid>
          </Container>
      </section>
      <section className={styles.works} id={MenuItems[0].path} data-aos='fade-in'>
      <Container>
          <div className={styles.title}>
                <h1>How it works?</h1>
          </div>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center">
            <Grid container direction='column' item md={5} className={styles.mobile_pos_one}>
                <div className={styles.image}>
                    <img src={phone} alt="phone"/>
                </div>
            </Grid>
            <Grid container direction='column' item md={7} className={styles.mobile_pos_zero}>
                <div className={styles.content}>
                    <h1>
                        The app that recommends
                        the most wanted items
                        by the each specific user.
                    </h1>
                    <p>
                        L'accent finds a user's style across thousands of online shops. 
                        Users can effortlessly browse and bookmark their favorite shops, 
                        and search results are tailored for each individual.
                    </p>
                    <div className={styles.elipse3}>
                      <img src={elipse} alt="elipse"/>
                    </div>
                </div>
            </Grid>
        </Grid>
        </Container>
        <div className={styles.line}>
            <img src={line} alt="line"/>
        </div>
      </section>
      <section className={styles.partner} id={MenuItems[1].path} data-aos='fade-in'>
        <Container>
            <div className={styles.title}>
                <h1>Want to be a partner?</h1>
                <p>We will contact you within two days</p>
            </div>
            <Grid container 
              direction='column' 
              justify="center"
              alignItems="center"
              item md={12} > 
                <form onSubmit={sendEmail}>
                  <div className={styles.elipse4}>
                      <img src={elipse} alt="elipse"/>
                  </div>
                  <div className={styles.success}>{success}</div>
                  <div className={styles.formField}>
                    <input value={name} onBlur={e => blurHandle(e)} type="text" name="name" placeholder="Your name" onChange={e => usernameHandler(e)}/>
                    <label htmlFor="name" className={styles.first_label}>Company name<span className={styles.star}>*</span></label>
                    {(errorNameWas && errorName) && <div className={styles.error}>{ errorName }</div>}
                  </div>

                  <div className={styles.formField}>
                    <input value={link} onBlur={e => blurHandle(e)} type="text" name="link" placeholder="Your link" onChange={e => linkHandler(e)}/>
                    <label htmlFor="link">Link to website or instagram acc<span className={styles.star}>*</span></label>
                    {(errorLinkWas && errorLink) && <div className={styles.error}>{ errorLink }</div>}
                  </div>

                  <div className={styles.formField}>
                    <input value={email} onBlur={e => blurHandle(e)} type="email" name="email" placeholder="e.g. laccent@gmail.com" onChange={e => emailHandler(e)}/>
                    <label htmlFor="email">E-mail<span className={styles.star}>*</span></label>
                    {(errorEmailWas && errorEmail) && <div className={styles.error}>{ errorEmail }</div>}
                  </div>
                    <Button 
                    style={{ backgroundColor: '#717FE0' }}
                    disabled={!validForm}
                    className={styles.button}
                    type='submit'
                    >Let’s work together</Button>
                </form>
            </Grid>
        </Container>
        <div className={styles.elipse5}>
            <img src={elipse} alt="elipse"/>
        </div>
      </section>
    </>
  );
}

export default ContentBody;
