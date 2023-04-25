import React from 'react';
import Search from './search';
import Content from './content';
import DropDownComponent from './dropdownAll';

import styles from '../css/center.module.css';

function Center() {
  return (
    <div className={styles.main__centerblock}>
      <Search />
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <DropDownComponent />
      <Content />
    </div>
  );
}

export default Center;
