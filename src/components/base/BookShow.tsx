import useBooksContext from '../../hooks/use-books-context';
import { Book } from '../../context/books';
import BookEdit from './BookEdit';
import { useState } from 'react';
interface BookShowProps {
  book: Book;
}

const BookShow: React.FC<BookShowProps> = ({ book }) => {
  const context = useBooksContext();
  const { deleteBookById } = context || {};
  const [showEdit, setShowEdit] = useState(false);

  // Handle editing of a book
  const handleEdit = (): void => {
    setShowEdit(!showEdit);
  };

  // Handle book deletion
  const handleDelete = (): void => {
    if (deleteBookById) deleteBookById(book.id);
  };

  const handleSubmit = (): void => {
    setShowEdit(false);
  };

  let content = <h3>{book.name}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt='books' />
      {content}
      <div className='actions'>
        <button className='edit' onClick={handleEdit}>
          Edit
        </button>
        <button className='delete' onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
