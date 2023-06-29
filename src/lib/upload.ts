const API_URL = 'http://example.com/api'; // Replace with your API URL

export const uploadMedia = async (file: File): Promise<void> => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload media');
    }
  } catch (error) {
    throw new Error('Failed to upload media');
  }
};
