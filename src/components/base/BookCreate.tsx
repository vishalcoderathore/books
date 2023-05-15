import React, { useState } from 'react';

// Define the BookCreateProps interface
interface BookCreateProps {
  onCreate: (title: string) => void;
}

// Update the component to receive the onCreate prop
const BookCreate: React.FC<BookCreateProps> = ({ onCreate }) => {
  const [title, setTitle] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onCreate(title);
    setTitle('');
  };

  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='bookTitle'>Title</label>
        <input
          id='bookTitle'
          className='input'
          type='text'
          onChange={handleChange}
          value={title}
        />
        <button className='button'>Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
