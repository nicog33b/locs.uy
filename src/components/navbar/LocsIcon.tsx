"use client";
import React from 'react';

interface LocsIconProps {
  className?: string;
  color?: string;
  size?: number;
}

const LocsIcon: React.FC<LocsIconProps> = ({
  className = '',
  color = '#FFFFFF',
  size = 24
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Marcos de las gafas */}
      <path
        d="M3 12C3 10.3431 4.34315 9 6 9H7C8.65685 9 10 10.3431 10 12C10 13.6569 8.65685 15 7 15H6C4.34315 15 3 13.6569 3 12Z"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
      />
      <path
        d="M14 12C14 10.3431 15.3431 9 17 9H18C19.6569 9 21 10.3431 21 12C21 13.6569 19.6569 15 18 15H17C15.3431 15 14 13.6569 14 12Z"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
      />

      {/* Puente de las gafas */}
      <path
        d="M10 12H14"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Patillas de las gafas */}
      <path
        d="M3 12C2.5 12 2 12.5 2 13V14.5C2 15 2.5 15.5 3 15.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M21 12C21.5 12 22 12.5 22 13V14.5C22 15 21.5 15.5 21 15.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LocsIcon; 