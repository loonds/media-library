# Media Library

This is a reusable package for media upload and download functionality in React.

## Installation

To install the package, run the following command:

```bash
npm install loonds-media-library 
```

## Usage

### MediaUploader

The MediaUploader component allows you to select a file and upload it.

```import React from 'react';
import { MediaUploader } from 'media-library';

function MyComponent() {
  return (
    <div>
      <MediaUploader />
    </div>
  );
}
```

### MediaDownloader

The MediaDownloader component allows you to download a media file using a provided URL.

```import React from 'react';
import { MediaDownloader } from 'media-library';

function MyComponent() {
  return (
    <div>
      <MediaDownloader url="https://example.com/media-file.jpg" />
    </div>
  );
}
```

## Contributing

Contributions are welcome! If you have any bug fixes, improvements, or new features to add, please submit a pull
request.

## License

This project is licensed under the MIT License.