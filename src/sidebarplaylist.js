import React from 'react';

const SidebarPlaylist = ({ playlists }) => {
  return (
    <div className="sidebar__block">
      <div className="sidebar__list">
        {playlists.map((playlist, index) => (
          <div className="sidebar__item" key={index}>
            <a className="sidebar__link" href={playlist.url}>
              <img
                className="sidebar__img"
                src={playlist.image}
                alt={playlist.alt}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarPlaylist;
