import React from 'react';
import logo from './logo.svg';
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
