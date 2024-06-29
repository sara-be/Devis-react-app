import React, { useEffect, useState } from 'react';
import './Preloader.css';

function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="preloader">
          <div className="text-container">
            <img src="/images/Icon.png" alt="Loading Icon" className="zoom-pulse" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Preloader;
