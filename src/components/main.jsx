import React, { useState } from 'react';

import { AppRoutes } from '../routes';
import styles from '../css/main.module.css';

import Header from './header';
import Bar from './bar';
import SideBar from './sideBar';

function APP() {
  const [user, setUser] = useState(null);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header user={user} setUser={setUser} />
          <AppRoutes user={user} setUser={setUser} />
          <SideBar user={user} />
        </main>
        {user && <Bar user={user} />}
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default APP;
