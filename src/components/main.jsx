import React from 'react';
import '../css/style.css';

import Header from './header';
import Center from './center';
import Bar from './bar';
import SideBar from './sideBar';

function APP() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
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
