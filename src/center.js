import React from 'react';
import Search from './search.js';
import Content from './content.js';
import MyComponent from './dropdownAll.js';

function Center() {
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <h2 className="centerblock__h2">Треки</h2>
      <MyComponent />
      <Content />
    </div>
  );
}


export default Center;