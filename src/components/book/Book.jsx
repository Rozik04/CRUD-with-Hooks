import React, { useState } from 'react'

const Book = ({ addBook }) => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('')
  const [author, setAuthor] = useState('')
  const [stock, setStock] = useState('')
  const [genre, setGenre] = useState('')
  const [url, setUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc || !price || !author || !stock || !genre || !url) return;
    addBook({ title, desc, price, author, stock, genre, url });
    setTitle('');
    setDesc('');
    setPrice('');
    setAuthor('');
    setStock('');
    setGenre(''); 
    setUrl('');
  };

  const inputStyle = 'bg-gray-500 text-white outline-none h-[90%] p-[10px]'

  return (
    <form onSubmit={handleSubmit} className='w-[850px] h-[250px] mx-auto mt-[100px] flex flex-col items-center'>
      <div className='w-full h-[80%] grid grid-cols-3 gap-3'>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required className={inputStyle} placeholder='Enter book title' />
        <input value={desc} onChange={(e) => setDesc(e.target.value)} required className={inputStyle} placeholder='Enter book desc' />
        <input value={price} onChange={(e) => setPrice(e.target.value)} required className={inputStyle} placeholder='Enter book price' />
        <input value={author} onChange={(e) => setAuthor(e.target.value)} required className={inputStyle} placeholder='Enter book author' />
        <input value={stock} onChange={(e) => setStock(e.target.value)} required className={inputStyle} placeholder='Enter book stock' />
        <input value={genre} onChange={(e) => setGenre(e.target.value)} required className={inputStyle} placeholder='Enter book genre' />
        <input value={url} onChange={(e) => setUrl(e.target.value)} required className={`${inputStyle} col-start-2`} placeholder='Enter book image-url' />
      </div>
      <button type="submit" className='w-[10%] h-[10%] bg-green-600 mt-[15px] text-white rounded-[10%] hover:bg-blue-600 transition'>Submit</button>
    </form>
  );
};

export default Book;
