import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import ShimmerCard from './components/ShimmerCard';

const MediaGallery = () => {
  const [mediaList, setMediaList] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating fetching media data from API
        const dummyMedia = [
          'https://dummyimage.com/300x200/000/fff',
          'https://dummyimage.com/300x200/333/fff',
          'https://dummyimage.com/300x200/666/fff',
          'https://dummyimage.com/300x200/999/fff',
          'https://dummyimage.com/300x200/999/fff',
          'https://dummyimage.com/300x200/999/fff',
          'https://dummyimage.com/300x200/999/fff',
          'https://dummyimage.com/300x200/000/fff',
          'https://dummyimage.com/300x200/333/fff',
          'https://dummyimage.com/300x200/666/fff',
          'https://dummyimage.com/300x200/999/fff',
          'https://dummyimage.com/300x200/999/fff',
          'https://dummyimage.com/300x200/999/fff',
          'https://dummyimage.com/300x200/999/fff',
          'https://dummyimage.com/300x200/000/fff',
          'https://dummyimage.com/300x200/333/fff',
          'https://dummyimage.com/300x200/666/fff',
          'https://dummyimage.com/300x200/999/fff',
          'https://dummyimage.com/300x200/999/fff',
          'https://dummyimage.com/300x200/999/fff',
          'https://dummyimage.com/300x200/999/fff',
          'https://dummyimage.com/300x200/000/fff',
          'https://dummyimage.com/300x200/333/fff',
          'https://dummyimage.com/300x200/666/fff',
          'https://dummyimage.com/300x200/999/fff',
          'https://dummyimage.com/300x200/999/fff',
          'https://dummyimage.com/300x200/999/fff',
          'https://dummyimage.com/300x200/999/fff',
          'https://dummyimage.com/300x200/000/fff',
          'https://dummyimage.com/300x200/333/fff',
          'https://dummyimage.com/300x200/666/fff',
          'https://dummyimage.com/300x200/999/fff',
          'https://dummyimage.com/300x200/999/fff',
          'https://dummyimage.com/300x200/999/fff',
          'https://dummyimage.com/300x200/999/fff',
        ];

        // Simulating a delay for fetching data
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setMediaList(dummyMedia);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching media:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (mediaUrl: string) => {
    console.log('Clicked media URL:', mediaUrl);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading ? (
          // Render shimmer loader
          Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="rounded overflow-hidden shadow-lg">
              <ShimmerCard height="200px" />
            </div>
          ))
        ) : (
          // Render actual media cards
          mediaList.map((media, index) => (
            <div key={index} className="rounded overflow-hidden shadow-lg">
              <Card image={media} alt='Media' onClick={()=> handleCardClick(media)}></Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MediaGallery;
