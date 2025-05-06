import { useState, useEffect } from 'react';
import Book from './components/book/Book';
import Cards from './components/cards/Cards';

function App() {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem('books');
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  const addBook = (book) => {
    const updatedBooks = [...books, book];
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks)); 
  };

  const deleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks)); 
  };

  return (
    <>
      <Book addBook={addBook} />
      <Cards books={books} deleteBook={deleteBook} />
    </>
  );
}

export default App;
