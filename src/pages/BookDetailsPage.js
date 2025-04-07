import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../services/api';

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getBookById(id);
        setBook(data);
      } catch (err) {
        setError("Failed to load book details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <div className="loading">Loading book details...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!book) return <div className="error">Book not found</div>;

  return (
    <div className="book-details-page">
      <div className="book-details-container">
        <div className="book-image">
          <img src={book.cover_image || '/placeholder-book.png'} alt={book.title} />
        </div>
        <div className="book-info">
          <h1>{book.title}</h1>
          <h2>by {book.author}</h2>
          <p className="book-price">${book.price.toFixed(2)}</p>
          <p className="book-isbn">ISBN: {book.isbn}</p>
          <div className="book-description">
            <h3>Description</h3>
            <p>{book.description}</p>
          </div>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;