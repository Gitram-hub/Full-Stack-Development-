import React from 'react';
import './Profile.css';

function Book({ books }) {
  return (
    <div className="books">
      {books.map((book) => (
        <div className="book-card" key={book.id}>
          <div className="imgbook">
            <img src={book.image} alt={book.author} />
          </div>
          <h2 className="author">{book.author}</h2>
          <p className="publisher">{book.publisher}</p>
          <h3 className="price">₹{book.price}</h3>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Book;
