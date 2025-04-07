const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export const searchBooks = async (searchTerm, searchBy) => {
  const url = `${API_BASE_URL}/books/search?term=${encodeURIComponent(searchTerm)}&by=${searchBy}`;
  
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  return await response.json();
};

export const getBookById = async (id) => {
  const url = `${API_BASE_URL}/books/${id}`;
  
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  return await response.json();
};

export const getAllBooks = async () => {
  const url = `${API_BASE_URL}/books`;
  
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  return await response.json();
};
