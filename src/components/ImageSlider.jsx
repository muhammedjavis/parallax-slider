/* eslint-disable react/prop-types */

import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

const ImageSlider = ({ images, speed }) => {
  return (
    <ParallaxProvider>
      {images.map((image, index) => (
        <ParallaxBanner
          layers={[
            {
              image: image,
              speed: speed,
            },
          ]}
          key={index}
          style={{
            height: '700px',
          }}
        />
      ))}
    </ParallaxProvider>
  );
};

export default ImageSlider;
