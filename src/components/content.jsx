import React from 'react';
import PlaylistHeader from './playlistHeader';
import PlaylistItem from './playlistItem';
import styles from '../css/content.module.css';

function Content({ tracks, isLoading, isFetching }) {
  if (isLoading || isFetching) {
    return <div className={styles.centerblock__content}>Loading...</div>;
  }

  if (!tracks) {
    return (
      <div className={styles.centerblock__content}>Error fetching tracks.</div>
    );
  }

  return (
    <div className={styles.centerblock__content}>
      <PlaylistHeader />
      <div className={styles.content__playlist}>
        {tracks.map((track) => (
          <PlaylistItem track={track} key={track.id} />
        ))}
      </div>
    </div>
  );
}

export default Content;
