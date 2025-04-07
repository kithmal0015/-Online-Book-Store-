import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import { searchBooks } from '../services/api';

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchTerm, searchBy) => {
    setLoading(true);
    setError(null);
    
    try {
      const results = await searchBooks(searchTerm, searchBy);
      setBooks(results);
    } catch (err) {
      setError("Failed to search books. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
 
    const loadFeaturedBooks = async () => {
      setLoading(true);
      try {
        const results = await searchBooks('', 'featured');
        setBooks(results);
      } catch (err) {
        setError("Failed to load featured books.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedBooks();
  }, []);

  return (
    <div className="home-page">
      <h1>Welcome to Online Bookstore</h1>
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} loading={loading} error={error} />
    </div>
  );
};

export default HomePage;