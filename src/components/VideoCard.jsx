import React from 'react';

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <a href={video.url} target="_blank" rel="noopener noreferrer">
        <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
        <h3 className="video-title">{video.title}</h3>
      </a>
    </div>
  );
};

export default VideoCard;
