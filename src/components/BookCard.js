import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.cover_image || '/placeholder-book.png'} alt={book.title} className="book-cover" />
      <div className="book-details">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>
        <p className="book-price">${book.price.toFixed(2)}</p>
        <div className="book-actions">
          <Link to={`/book/${book.id}`} className="view-details">View Details</Link>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;