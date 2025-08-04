import React, { useEffect, useState } from 'react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [...prev, Date.now()]);
    }, 1000); // faster heart generation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full overflow-hidden z-0">
      {hearts.map((id) => {
        const left = Math.random() * 100;
        const size = 20;
        const duration = 6;

        return (
          <span
            key={id}
            className="heart"
            style={{
              left: `${left}%`,
              bottom: '-40px',
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingHearts;
