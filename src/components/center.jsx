import React from 'react';
import Search from './search';
import Content from './content';
import DropDownComponent from './dropdownAll';

function Center() {
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <h2 className="centerblock__h2">Треки</h2>
      <DropDownComponent />
      <Content />
    </div>
  );
}

export default Center;
