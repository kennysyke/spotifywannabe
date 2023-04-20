import React from 'react';
import logo from './img/logo.png';
import BurgerMenu from './burgerMenu';
import './/css/style.css';
import PlaylistItem from './playlistItem';
import SidebarPlaylist from './sidebarPlaylist';
import Bar from './bar';
import Sprite from './img/icon/sprite.svg';
// import filterByArtist from './filterByArtist';
import ArtistDropdown from './filterByArtist';
import playlist1 from './img/playlist01.png';
import playlist2 from './img/playlist02.png';
import playlist3 from './img/playlist03.png';

const playlists = [
  {
    url: '#',
    image: playlist1,
    alt: "day's playlist",
  },
  {
    url: '#',
    image: playlist2,
    alt: "day's playlist",
  },
  {
    url: '#',
    image: playlist3,
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
      <BurgerMenu />
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
        <use xlinkHref={`${Sprite}#icon-search`}></use>
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
      <ArtistDropdown />
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
            <use xlinkHref={`${Sprite}#icon-watch`}></use>
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
        <PlaylistItem
          trackTitle="My Favorite Song"
          trackLink="http://example.com/my-favorite-song"
          authorName="The Best Artist"
          authorLink="http://example.com/the-best-artist"
          albumName="The Greatest Hits"
          albumLink="http://example.com/the-greatest-hits"
          trackDuration="3:30"
        />
        <PlaylistItem
          trackTitle="My Favorite Song"
          trackLink="http://example.com/my-favorite-song"
          authorName="The Best Artist"
          authorLink="http://example.com/the-best-artist"
          albumName="The Greatest Hits"
          albumLink="http://example.com/the-greatest-hits"
          trackDuration="3:30"
        />
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