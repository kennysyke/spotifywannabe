import React, { useState, useEffect } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { Link } from 'react-router-dom';
import { useGetSelectionQuery } from '../services/api';

import playlist1 from '../img/playlist01.png';
import playlist2 from '../img/playlist02.png';
import playlist3 from '../img/playlist03.png';

import styles from '../css/sidebarPlaylist.module.css';

function SidebarPlaylist() {
  const [isLoading, setIsLoading] = useState(true);

  const { data: list } = useGetSelectionQuery();
  console.log(list);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.sidebar__block}>
      {isLoading ? (
        <SkeletonTheme baseColor="#FFFFFF" highlightColor="#444">
          <div>
            <div className={styles.sidebar__list}>
              <div className={styles.sidebar__item}>
                <Skeleton width={250} height={150} />
              </div>
              <div className={styles.sidebar__item}>
                <Skeleton width={250} height={150} />
              </div>
              <div className={styles.sidebar__item}>
                <Skeleton width={250} height={150} />
              </div>
            </div>
          </div>
        </SkeletonTheme>
      ) : (
        <div className={styles.sidebar__list}>
          {list.map((playlist) => (
            <div className={styles.sidebar__item} key={playlist.id}>
              <Link
                className={styles.sidebar__link}
                to={`/playlist/${playlist.id}`}
                // onClick={() => handlePlaylistClick(playlist.id)}
              >
                <img
                  className={styles.sidebar__img}
                  src={
                    playlist.id === 1
                      ? playlist1
                      : playlist.id === 2
                      ? playlist2
                      : playlist.id === 3
                      ? playlist3
                      : playlist1
                  }
                  alt="Playlist Image"
                />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarPlaylist;
