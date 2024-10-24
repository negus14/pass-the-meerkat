import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './YouTube.css'; // Import the CSS file

const YouTube = () => {
  const [videoId, setVideoId] = useState(null);
  const API_KEY = 'AIzaSyB5Vt2rHs9yMbMWDCfj5nLJmgmkcErGHoM'; // Replace this with your YouTube API key
  const PLAYLIST_ID = 'PLBSGPZVQJe3GIlBFzHqFNgG4g2WZS_UEu'; // Playlist ID from the URL

  useEffect(() => {
    // Fetch the latest video from the playlist using axios
    const fetchLatestVideo = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems`, {
            params: {
              part: 'snippet',
              maxResults: 1,
              playlistId: PLAYLIST_ID,
              key: API_KEY,
            },
          }
        );

        if (response.data.items && response.data.items.length > 0) {
          const latestVideo = response.data.items[0];
          setVideoId(latestVideo.snippet.resourceId.videoId);
        } else {
          console.error("No videos found in the playlist.");
        }
      } catch (error) {
        console.error('Error fetching the latest video:', error);
      }
    };

    fetchLatestVideo();
  }, []);

  if (!videoId) return <p>Loading...</p>;

  return (
      <div className="video-responsive">
        <iframe
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
