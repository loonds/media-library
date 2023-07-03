import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://example.com/api'; // Replace with your API URL

const uploadMedia = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    await axios.post(`${API_URL}/upload`, formData);
    console.log('Media uploaded successfully');
  } catch (error) {
    console.error('Error uploading media:', error);
    throw new Error('Failed to upload media');
  }
};

const MediaUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setSelectedFile(file);

      try {
        await uploadMedia(file);
        setSelectedFile(null);
      } catch (error) {
        console.error('Error uploading media:', error);
        // Handle the error appropriately (e.g., show an error message to the user)
      }
    }
  };

  return (
    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
      <div className="text-center">
        {/* <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
        <div className="mt-4 flex text-sm leading-6 text-gray-600">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
          >
            <span>Upload a file</span>
            <input
              id="file-upload"
              onChange={handleFileChange}
              name="file-upload"
              type="file"
              className="sr-only"
            />
          </label>
          <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
      </div>
    </div>
  );
};

export default MediaUploader;
