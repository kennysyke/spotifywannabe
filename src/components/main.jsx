import React from 'react';

import { AppRoutes } from '../routes';
import styles from '../css/main.module.css';

import Header from './header';
import Center from './center';
import Bar from './bar';
import SideBar from './sideBar';

function APP() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <AppRoutes />
          <Header />
          <Center />
          <SideBar />
        </main>
        <Bar />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default APP;
