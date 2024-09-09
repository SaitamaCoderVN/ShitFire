import React, { useEffect, useState } from 'react';
import ShitCoffee from '@/assets/funny-shit.gif';

const FallingImages: React.FC = () => {
  const [images, setImages] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const createImage = () => {
      const randomLeft = Math.random() * 100;
      const randomDuration = 15 + Math.random() * 10; // Thời gian rơi ngẫu nhiên từ 15 đến 25 giây
      const randomDelay = Math.random() * 5; // Độ trễ ngẫu nhiên từ 0 đến 5 giây
      const randomSize = 20 + Math.random() * 10; // Kích thước ngẫu nhiên từ 20px đến 30px

      const image = (
        <img
          key={Date.now()}
          src={ShitCoffee.src}
          alt="Falling image"
          className="falling-image"
          style={{
            left: `${randomLeft}%`,
            animationDuration: `${randomDuration}s`,
            animationDelay: `${randomDelay}s`,
            width: `${randomSize}px`,
            height: `${randomSize}px`,
          }}
        />
      );

      setImages((prevImages) => [...prevImages, image]);
    };

    const interval = setInterval(createImage, 3000); // Tạo hình ảnh mới mỗi 3 giây
    return () => clearInterval(interval);
  }, []);

  return <div className="falling-images-container">{images}</div>;
};

export default FallingImages;
