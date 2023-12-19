import ImageSlider from './components/ImageSlider';

function App() {
  const IMAGES = [
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg',
  ];

  return (
    <>
      <ImageSlider images={IMAGES} speed={-20} />
    </>
  );
}

export default App;
