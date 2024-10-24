import React from 'react';
import './Spotify.css'; // Import the CSS file

const Spotify = () => {
  return (
    <div className="video-responsive">
      <iframe
          src="https://open.spotify.com/embed/show/35QfAzsh3JcvO6fxz1pmvl/video?utm_source=generator"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy">
      </iframe>
    </div>
  );
};

export default Spotify;
