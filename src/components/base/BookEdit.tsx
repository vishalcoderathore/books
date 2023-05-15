import { SetStateAction, useState } from 'react';
import { Book } from '../../App';
interface BookEditProps {
  book: Book;
  onSubmit: (id: number, name: string) => void;
}

const BookEdit: React.FC<BookEditProps> = ({ book, onSubmit }) => {
  const [name, setName] = useState(book.name);

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };

  const handleFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onSubmit(book.id, name);
  };

  return (
    <form action='' onSubmit={handleFormSubmit} className='book-edit'>
      <label htmlFor='editBook'>Name</label>
      <input className='input' onChange={handleChange} value={name} />
      <button className='button is-primary'>Save</button>
    </form>
  );
};

export default BookEdit;
