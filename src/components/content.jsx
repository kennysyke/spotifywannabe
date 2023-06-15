import React from 'react';
import PlaylistItem from './playlistItem';
import styles from '../css/content.module.css';
import PlaylistHeader from './playlistHeader';

function Content({ tracks, isLoading, isFetching }) {
  console.log(tracks);
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
          <PlaylistItem
            key={track.id}
            id={track.id}
            track={track}
            name={track.name}
            track_file={track.track_file}
            author={track.author}
            album={track.album}
            duration_in_seconds={track.duration_in_seconds}
          />
        ))}
      </div>
    </div>
  );
}

export default Content;
