import React from 'react';

interface CardProps {
  image: string;
  alt: string;
}

const Card: React.FC<CardProps> = ({ image, alt }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img src={image} alt={alt} className="w-full" />
    </div>
  );
};

export default Card;
