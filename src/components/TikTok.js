import React from 'react';
import './TikTok.css'; // Import CSS for styling

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
  const tiktokIframeUrl = `https://www.tiktok.com/embed/${videoId}`;

  return (
    <div className="tiktok-responsive">
      <iframe
        src={tiktokIframeUrl}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        allowFullScreen
        title="TikTok Video"
      />
    </div>
  );
};

export default TikTok;