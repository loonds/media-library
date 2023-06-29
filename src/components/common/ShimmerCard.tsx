import React from 'react';

interface ShimmerCardProps {
  height: string;
}

const ShimmerCard: React.FC<ShimmerCardProps> = ({ height }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <div className="bg-gray-200 animate-pulse" style={{ height }}></div>
    </div>
  );
};

export default ShimmerCard;
