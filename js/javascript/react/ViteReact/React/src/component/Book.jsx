import React from 'react';
import './Profile.css';

function Book({ books }) {
  return (
    <div className="books">
      {books.map((book) => (
        <div className='inner' key={book.id} >
          <div className='imgbook'>
            <img  src={book.image} alt={book.author} />
          </div>
          <h1>{book.author}</h1>
          <p>{book.publisher}</p>
          <h2>₹{book.price}</h2>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default Book;
