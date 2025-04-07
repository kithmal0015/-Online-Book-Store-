import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books, loading, error }) => {
  if (loading) return <div className="loading">Loading books...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (books.length === 0) return <div className="no-results">No books found</div>;

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;