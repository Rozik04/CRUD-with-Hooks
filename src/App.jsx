""// App.js
import { useState } from 'react';
import Book from './components/book/Book';
import Cards from './components/cards/Cards';

function App() {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem('books');
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  const [editableBook, setEditableBook] = useState(null);

  const addBook = (book) => {
    if (editableBook !== null) {
      const updatedBooks = books.map((item, index) =>
        index === editableBook ? book : item
      );
      setBooks(updatedBooks);
      localStorage.setItem('books', JSON.stringify(updatedBooks));
      setEditableBook(null);
    } else {
      const updatedBooks = [...books, book];
      setBooks(updatedBooks);
      localStorage.setItem('books', JSON.stringify(updatedBooks));
    }
  };

  const deleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks)); 
  };

  const editBook = (index) => {
    setEditableBook(index);
  };

  return (
    <>
      <Book addBook={addBook} editableBook={editableBook !== null ? books[editableBook] : null} />
      <Cards books={books} deleteBook={deleteBook} editBook={editBook} />
    </>
  );
}

export default App;

