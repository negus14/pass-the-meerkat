import React, { useEffect, useState } from 'react';

// Helper function to extract the TikTok video ID from the URL
const extractVideoId = (url) => {
  const regex = /\/video\/(\d+)/;  // Regex pattern to match the video ID in TikTok URLs
  const match = url.match(regex);
  return match ? match[1] : null;
};

const TikTok = ({ videoUrl }) => {
  const videoId = extractVideoId(videoUrl);

  if (!videoId) {
    return <div>Invalid TikTok URL</div>;
  }

    // TikTok's embed iframe URL format
    const tiktokIframeUrl = `https://www.tiktok.com/embed/v2/${videoId}`;

  return (
    <div>
      <iframe
        src={tiktokIframeUrl}
        width="100%"
        height="745"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default TikTok;
