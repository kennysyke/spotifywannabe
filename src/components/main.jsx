import React from 'react';
<<<<<<< Updated upstream
import '../css/style.css';
=======
// import '../css/style.css';
import { AppRoutes } from '../routes';
>>>>>>> Stashed changes

import Header from './header';
import Center from './center';
import Bar from './bar';
import SideBar from './sideBar';

function APP() {
  return (
<<<<<<< Updated upstream
    <div className="wrapper">
      <div className="container">
        <main className="main">
=======
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <AppRoutes user={username} />
>>>>>>> Stashed changes
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
