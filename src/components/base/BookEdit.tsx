import useBooksContext from '../../hooks/use-books-context';
import { Book } from '../../context/books';
import { useState } from 'react';

interface BookEditProps {
  book: Book;
  onSubmit: () => void;
}

const BookEdit: React.FC<BookEditProps> = ({ book, onSubmit }) => {
  const { id, name: initialName } = book;
  const [name, setName] = useState(initialName);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    editBookById(id, name);
    onSubmit();
  };

  const context = useBooksContext();

  if (!context) {
    // context hasn't been provided - handle the error here
    return <div>Error: BooksContext not available.</div>;
  }

  const { editBookById } = context;

  return (
    <form onSubmit={handleFormSubmit} className='book-edit'>
      <label htmlFor='editBook'>Name</label>
      <input
        className='input'
        onChange={handleChange}
        value={name}
        name='bookName'
      />
      <button className='button is-primary'>Save</button>
    </form>
  );
};

export default BookEdit;
