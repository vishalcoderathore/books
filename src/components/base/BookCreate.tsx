import useBooksContext from '../../hooks/use-books-context';
import { useState } from 'react';

const BookCreate: React.FC = () => {
  const [title, setTitle] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    createBook(title);
    setTitle('');
  };

  const context = useBooksContext();
  if (!context) {
    // context hasn't been provided - handle the error here, you might want to return from the component
    return null;
  }
  const { createBook } = context;
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
