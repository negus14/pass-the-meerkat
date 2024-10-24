import React from 'react';

const YouTube = ({ videoId }) => {
   
  return (
    <div>
      <iframe
        width="800px"
        height="400px"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
    </div>
  );
};

export default YouTube;
