import React, { useState, useEffect } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SidebarPlaylist = ({ playlists }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="sidebar__block">
      {isLoading ? (
        <SkeletonTheme baseColor="#FFFFFF" highlightColor="#444">
          <div>
            <div className="sidebar__list">
              <div className="sidebar__item">
                <Skeleton width={250} height={150} />
              </div>
              <div className="sidebar__item">
                <Skeleton width={250} height={150} />
              </div>
              <div className="sidebar__item">
                <Skeleton width={250} height={150} />
              </div>
            </div>
          </div>
        </SkeletonTheme>
      ) : (
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
      )}
    </div>
  );
};

export default SidebarPlaylist;
