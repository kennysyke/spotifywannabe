import React from 'react';
import './/css/style.css';

import Header from './header.js';
import Center from './center.js';
import Bar from './bar.js';

// import filterByArtist from './filterByArtist';

function APP() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Header />
          <Center />
        </main>
        <Bar />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default APP;
