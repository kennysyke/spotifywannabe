import React from 'react';
import Search from './search';
import MusicSearch from './musicSearch';
import Content from './content';
import SideBarPersonal from './sidebarPersonal';
import SidebarPlaylist from './sidebarPlaylist';

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

export default Center;
