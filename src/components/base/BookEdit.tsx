import { Book } from '../../App';
import { useState } from 'react';

interface BookEditProps {
  book: Book;
  onSubmit: (id: number, name: string) => void;
}

const BookEdit: React.FC<BookEditProps> = ({ book, onSubmit }) => {
  const { id, name: initialName } = book;
  const [name, setName] = useState(initialName);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    onSubmit(id, name);
  };

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
