import React, { useState, useEffect } from 'react';
import styles from '../css/dropdownMenu.module.css';
import stylesBtn from '../css/btn.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFilteredAuthor,
  setFilteredGenre,
  setFilteredYears,
  removeFilteredGenre,
  removeFilteredAuthor,
  removeFilteredYears,
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
  }

  const selectedGenre = useSelector((state) => state.filteredTracks.genre);
  console.log(selectedGenre);

  const handleSelection = (item) => {
    console.log(item);
    if (label === 'жанру') {
      if (selectedGenre.includes(item)) {
        handleRemoveGenre();
      } else {
        dispatch(setFilteredGenre({ genre: item }));
      }
    } else if (label === 'году выпуска') {
      if (selectedItem === item) {
        handleRemoveYears();
      } else {
        dispatch(setFilteredYears({ years: item }));
      }
    } else {
      if (selectedItem === item) {
        handleRemoveAuthor(item);
      } else {
        dispatch(setFilteredAuthor({ author: item }));
      }
    }
  };

  const handleRemoveGenre = (genre) => {
    dispatch(removeFilteredGenre({ genre: genre }));
  };

  const handleRemoveAuthor = (author) => {
    dispatch(removeFilteredAuthor({ author: author }));
  };

  const handleRemoveYears = (years) => {
    dispatch(removeFilteredYears({ years: years }));
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
