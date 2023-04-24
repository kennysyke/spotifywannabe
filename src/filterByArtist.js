// import React from 'react';

// function filterByArtist() {
//   const options = [
//     { label: 'Fruit', value: 'fruit' },

//     { label: 'Vegetable', value: 'vegetable' },

//     { label: 'Meat', value: 'meat' },
//   ];
//   const [value, setValue] = React.useState('fruit');

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };
//   return (
//     <div>
//       <Dropdown
//         label={
//           <div className="filter__button button-author _btn-text">
//             исполнителю
//           </div>
//         }
//         options={options}
//         value={value}
//         onChange={handleChange}
//       />
//     </div>
//   );
// }
// const Dropdown = ({ label, value, options, onChange }) => {
//   return (
//     <label>
//       {label}

//       <select value={value} onChange={onChange}>
//         {options.map((option) => (
//           <option value={option.value}>{option.label}</option>
//         ))}
//       </select>
//     </label>
//   );
// };

// export default filterByArtist;

import React, { useState } from 'react';

function ArtistDropdown() {
  const [showMenu, setShowMenu] = useState(false);
  const artists = ['Artist 1', 'Artist 2', 'Artist 3', 'Artist 4']; // replace with your own list of artists

  function handleButtonClick() {
    setShowMenu(!showMenu); // toggle the menu visibility
  }

  return (
    <div
      className="filter__button button-author _btn-text"
      onClick={handleButtonClick}
    >
      Artists
      {showMenu && (
        <ul className="artist-menu">
          {artists.map((artist, index) => (
            <li key={index}>{artist}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ArtistDropdown;
