import React from 'react';
import './App.css';
import MediaUploader from './components/MediaUploader';
import MediaGallery from './components/MediaGallery';

function App() {
  return (
    <>
      <MediaUploader></MediaUploader>
      <MediaGallery></MediaGallery>
    </>
  );
}

export default App;
