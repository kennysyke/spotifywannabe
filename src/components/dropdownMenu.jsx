import React, { useState, useEffect } from 'react';
import styles from '../css/dropdownMenu.module.css';
import stylesBtn from '../css/btn.module.css';
import { useDispatch } from 'react-redux';
import {
  setFilteredAuthor,
  setFilteredGenre,
  setFilteredYears,
} from '../store/filteredTracksSlice';

function DropdownMenu({ label, items, open, onOpen }) {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setShowMenu(open);
  }, [open]);

  function handleButtonClick() {
    setShowMenu(!showMenu);
    onOpen(label);
  }

  function handleRadioChange(e) {
    setSelectedItem(e.target.value);
    const selectedYear = e.target.value;
    console.log(selectedYear);
    dispatch(setFilteredYears({ years: selectedYear }));
  }

  const handleSelection = (item) => {
    console.log(item);
    if (label === 'жанру') {
      dispatch(setFilteredGenre({ genre: item }));
    } else if (label === 'исполнителю') {
      dispatch(setFilteredAuthor({ author: item }));
      console.log(item);
    }
  };

  return (
    <div className={styles.dropdown}>
      <div
        className={`${styles.filter__button} ${stylesBtn._btn_text} ${
          open ? styles.active : ''
        }`}
        onClick={handleButtonClick}
      >
        {label}
      </div>
      <div className={styles.dropdown_content}>
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
                        onClick={handleSelection}
                      />
                      {item}
                    </label>
                  </li>
                ))
              : items.map((item, index) => (
                  <li key={index} onClick={() => handleSelection(item)}>
                    {item}
                  </li>
                ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DropdownMenu;
