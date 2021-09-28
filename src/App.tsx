import React from 'react';
import styles from './App.module.scss';
import ContentBody from './app/components/ContentBody/ContentBody';
import Footer from './app/components/Footer/Footer';
import Navbar from './app/components/Header/Navbar';

const App:React.FC = () => {
  return (
    <>
    <div id='main'></div>
      <div className={styles.wrapper}>
        <div className={styles.app}>
            <Navbar />
          <main>
            <ContentBody />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
