import React from 'react';
import ReactPlayer from 'react-player';
import CardMedia from '@mui/material/CardMedia';

export default function Home({ APOD }) {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>{APOD.title}</h2>
      {APOD.media_type === 'image' ? (
        <CardMedia
          component="img"
          height="194"
          image={APOD.url}
          alt={APOD.title}
        />
      ) : (
        <ReactPlayer url="{APOD.url}" />
      )}
      <p>{APOD.explanation}</p>
    </main>
  );
}
