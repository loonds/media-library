const API_URL = 'http://example.com/api'; // Replace with your API URL

export const fetchMedia = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${API_URL}/media`);
    if (!response.ok) {
      throw new Error('Failed to fetch media');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch media');
  }
};
