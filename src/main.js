import React from 'react';
import logo from './img/logo.png';

import './/css/style.css';
import PlaylistItem from './playlistitem';
import SidebarPlaylist from './SidebarPlaylist';
import Bar from './bar';

const playlists = [
  {
    url: '#',
    image: 'img/playlist01.png',
    alt: "day's playlist",
  },
  {
    url: '#',
    image: 'img/playlist02.png',
    alt: "day's playlist",
  },
  {
    url: '#',
    image: 'img/playlist03.png',
    alt: "day's playlist",
  },
];

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

function Header() {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src={logo} alt="logo" />
      </div>
      <div className="nav__burger burger">
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      <div className="nav__menu menu">
        <ul className="menu__list">
          <li className="menu__item">
            <a href="http://" className="menu__link">
              Главное
            </a>
          </li>
          <li className="menu__item">
            <a href="http://" className="menu__link">
              Мой плейлист
            </a>
          </li>
          <li className="menu__item">
            <a href="http://" className="menu__link">
              Войти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
function Center() {
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <h2 className="centerblock__h2">Треки</h2>
      <MusicSearch />
      <Content />

      <div className="main__sidebar sidebar">
        <SideBarPersonal />
        <SidebarPlaylist playlists={playlists} />
      </div>
    </div>
  );
}
function Search() {
  return (
    <div className="centerblock__search search">
      <svg className="search__svg">
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
}

function MusicSearch() {
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className="filter__button button-author _btn-text">исполнителю</div>
      <div className="filter__button button-year _btn-text">году выпуска</div>
      <div className="filter__button button-genre _btn-text">жанру</div>
    </div>
  );
}

function Content() {
  return (
    <div className="centerblock__content">
      <div className="content__title playlist-title">
        <div className="playlist-title__col col01">Трек</div>
        <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
        <div className="playlist-title__col col03">АЛЬБОМ</div>
        <div className="playlist-title__col col04">
          <svg className="playlist-title__svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </svg>
        </div>
      </div>
      <div className="content__playlist playlist">
        <PlaylistItem
          trackTitle="My Favorite Song"
          trackLink="http://example.com/my-favorite-song"
          authorName="The Best Artist"
          authorLink="http://example.com/the-best-artist"
          albumName="The Greatest Hits"
          albumLink="http://example.com/the-greatest-hits"
          trackDuration="3:30"
        />
      </div>
    </div>
  );
}

function SideBarPersonal() {
  return (
    <div className="sidebar__personal">
      <p className="sidebar__personal-name">Sergey.Ivanov</p>
      <div className="sidebar__avatar"></div>
    </div>
  );
}

export default APP;