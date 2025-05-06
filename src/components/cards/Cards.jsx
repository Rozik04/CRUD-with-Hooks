import React from 'react';

const Cards = ({ books, deleteBook }) => {

  return (
    <div className="mt-[100px] p-[50px] grid grid-cols-4 gap-[30px]">
      {books.map((book, index) => (
        <div key={index} className="max-w-md p-5 border rounded-xl shadow-lg bg-white">
          <img src={book.url} alt={book.title} className="w-full h-60 object-cover rounded-xl mb-4" />
          <h2 className="text-xl font-bold mb-2 truncate">{book.title}</h2>
          <p className="text-gray-700 mb-2"><strong>Description:</strong> {book.desc}</p>
          <p className="text-gray-700 mb-1"><strong>Price:</strong> {book.price}</p>
          <p className="text-gray-700 mb-1"><strong>Author:</strong> {book.author}</p>
          <p className="text-gray-700 mb-1"><strong>Stock:</strong> {book.stock}</p>
          <p className="text-gray-700 mb-1"><strong>Genre:</strong> {book.genre}</p>
          <div className='flex flex-row justify-end gap-4'>
            <button className='w-[20%] bg-gray-300 hover:bg-gray-400 transition'>Edit</button>
            <button onClick={() => deleteBook(index)} className='w-[20%] bg-gray-300 hover:bg-gray-400 transition'>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
