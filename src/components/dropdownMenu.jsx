import React, { useState, useEffect } from 'react';

import styles from '../css/dropdownMenu.module.css';
import stylesBtn from '../css/btn.module.css';

function DropdownMenu({ label, items, open, onOpen }) {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setShowMenu(open);
  }, [open]);

  function handleButtonClick() {
    setShowMenu(!showMenu);
    onOpen(label);
  }
  function handleRadioChange(e) {
    setSelectedItem(e.target.value);
  }

  return (
    <div className="dropdown">
      <div
        className={`${styles.filter__button} ${stylesBtn._btn_text}`}
        onClick={handleButtonClick}
      >
        {label}
      </div>
      <div className="dropdown_content">
        {open && showMenu && (
          <ul>
            {label === 'году выпуска'
              ? items.map((item, index) => (
                  <li key={index}>
                    <label>
                      <input
                        type="radio"
                        name="year"
                        value={item}
                        checked={selectedItem === item}
                        onChange={handleRadioChange}
                      />
                      {item}
                    </label>
                  </li>
                ))
              : items.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DropdownMenu;
