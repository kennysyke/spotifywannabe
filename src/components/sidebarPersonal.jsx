import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from '../css/sidebarPersonal.module.css';

function SideBarPersonal() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.sidebar__personal}>
      {isLoading ? (
        <div>
          <Skeleton width={120} height={24} />
          <Skeleton circle={true} width={43} height={43} />
        </div>
      ) : (
        <div>
          <p className={styles.sidebar__personal_name}>Sergey.Ivanov</p>
          <div className={styles.sidebar__avatar}></div>
        </div>
      )}
    </div>
  );
}

export default SideBarPersonal;
