import React, { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import styles from './styles.module.css'
// import { useStore } from '../../hooks/useStore';

const PrivateLayout = ({
  children
}) => {

  const localAccount = true;

  return localAccount ? (
    <div className={styles.container}>
      <div>
        <Header />
        {children}
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  ) : null;
};

export default PrivateLayout;
