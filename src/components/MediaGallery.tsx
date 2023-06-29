import React, { useEffect, useState } from 'react';
import { fetchMedia } from '../lib/api';

const MediaGallery = () => {
  const [mediaList, setMediaList] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const media = await fetchMedia();
        setMediaList(media);
      } catch (error) {
        console.error('Error fetching media:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {mediaList.map((media, index) => (
        <img key={index} src={media} alt="Media" />
      ))}
    </div>
  );
};

export default MediaGallery;
