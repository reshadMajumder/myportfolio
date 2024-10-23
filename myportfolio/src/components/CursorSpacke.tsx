import React, { useEffect, useState } from 'react';
import './CursorSparkle.css'; // Create this file for styles

const CursorSparkle = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const starColors = ['#ffcc00', '#ff4081', '#00e676', '#40c4ff', '#f50057']; // Random star colors

      // Add star effect at the cursor position
      setStars((prev) => [
        ...prev,
        {
          id: Math.random(), // Unique ID for each star
          x: event.clientX,
          y: event.clientY,
          color: starColors[Math.floor(Math.random() * starColors.length)], // Random color
        },
      ]);

      // Remove stars after a short time
      setTimeout(() => {
        setStars((prev) => prev.slice(1));
      }, 500); // Adjust the timing to your liking
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleMouseMove); // Re-apply stars on scroll

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleMouseMove);
    };
  }, []);

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{ left: star.x, top: star.y, backgroundColor: star.color }}
        />
      ))}
    </>
  );
};

export default CursorSparkle;
