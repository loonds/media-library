import React from 'react';

interface CardProps {
  image: string;
  alt: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ image, alt, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="rounded overflow-hidden shadow-lg" onClick={handleClick}>
      <img src={image} alt={alt} className="w-full" />
    </div>
  );
};

export default Card;
