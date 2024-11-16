import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { books } from './books';

// ** CHALLENGE 2: TITLE CHALLENGE ANSWERS **
// Created a Title constant to render the Title separately to the Booklist.
const Title = () => {
  return <h1>Amazon Best Sellers</h1>;
};

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        // ** CHALLENGE 1: NUMBERS CHALLENGE ANSWERS **
        return <Book {...book} key={book.id} number={index} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, number } = props;

  return (
    <>
      <section className="book">
        {/* show the ranking */}
        <span className="number">{`# ${number + 1}`}</span>
        <img src={img} alt={title} />
        <h2>{title}</h2>

        <h4>{author}</h4>
      </section>
    </>
  );
};

// ** CHALLENGE 2 - TITLE CHALLLENGE ANSWERS
// Combine the Title and Booklist into an App constant to render both together.
const App = () => {
  return (
    <>
      <Title />
      <BookList />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
