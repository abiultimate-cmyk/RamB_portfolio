import React from 'react';
import './../styles/YouTube.css';

const youtubeVideos = [
  {
    id: 'yCrPPlwohZQ',
  },
  {
    id: 'ZE3GmaNE6jw',
  },
  {
    id: 'x1yJ8wu2QoE',
  },
  {
    id: 'Cem_GQsZ-3g',
  },
  {
    id: 'sXPLVIDc7d4',
  },
  {
    id: 'qlgMy_g1DF4',
  },
  {
    id: '0XCzTBWt3gc',
  },
  {
    id: '6Ya_pcSZHyc',
  },
  {
    id: 'DcZKqIVNIuU',
  },
  {
    id: 'jRNct1O15a0',
  },
  {
    id: 'Ie81RtWvHCg',
  },
  {
    id: 'OTiGfcyjXlU',
  },
  {
    id: 'OWI6-s1gB-A',
  },
  {
    id: '5_-ZYglw3Lc',
  },
  {
    id: 'ETjLV5wCXMg',
  },
  {
    id: 'Ms4h8xAyFmo',
  },
  {
    id: '8leecgw6RpE',
  },
  {
    id: 'm7TdxoEFIAc',
  },
  {
    id: 'sWSgl7kJkWA',
  },
  {
    id: 'MNJh3CMSZ8o',
  },
  {
    id: '8zsFz_1DvCw',
  },
  // Add more videos here
];

const video1='ugJ7TETZnn0';
const video2='su5DLWyP4Sw';

const YouTube = () => {
  const getEmbedUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="youtube-container">
      <h2 className="youtube-title">Work</h2>
  <div className="video-pair">
    <div className="video-card1">
      <iframe
              width="100%"
              height="350"
              src={getEmbedUrl(video1)}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            >
       </iframe>
       </div>
       <div className="video-card1">
      <iframe
              width="100%"
              height="350"
              src={getEmbedUrl(video2)}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            >
       </iframe>
       </div>
       </div>
             <h3 className="youtube-title">Gallery</h3>

      <div className="video-grid">
        {youtubeVideos.map((video) => (
          <div key={video.id} className="video-card">
            <iframe
              width="100%"
              height="200"
              src={getEmbedUrl(video.id)}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onError={(e) => console.error('YouTube embed error for video:', video.id, e)}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTube;
