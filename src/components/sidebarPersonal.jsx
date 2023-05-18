import React, { useState, useEffect, useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { ThemeContext } from '../dynamic/contexts/theme';
import styles from '../css/sidebarPersonal.module.css';

function SideBarPersonal() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

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
          <p
            className={styles.sidebar__personal_name}
            style={{ color: theme.color }}
          >
            Sergey.Ivanov
          </p>
          <div
            className={styles.sidebar__avatar}
            style={{ backgroundColor: theme.navcolor }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default SideBarPersonal;
