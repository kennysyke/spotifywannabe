import React from 'react';
import Search from './search.js';
import MusicSearch from './musicSearch.js';
import Content from './content.js';
import SideBarPersonal from './sidebarPersonal.js';
import SidebarPlaylist from './sidebarPlaylist';

import playlist1 from './img/playlist01.png';
import playlist2 from './img/playlist02.png';
import playlist3 from './img/playlist03.png';

console.log(SidebarPlaylist);

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

console.log(playlists);

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