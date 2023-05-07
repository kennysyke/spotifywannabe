import React from 'react';
// import '../css/style.css';

import Header from './header';
import Center from './center';
import Bar from './bar';
import SideBar from './sideBar';

import styles from '../css/main.module.css';

function APP() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
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
