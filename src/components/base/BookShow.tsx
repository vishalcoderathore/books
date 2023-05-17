import BooksContext, { Book } from '../../context/books';
import { useContext, useState } from 'react';
import BookEdit from './BookEdit';
interface BookShowProps {
  book: Book;
}

const BookShow: React.FC<BookShowProps> = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);

  // Handle editing of a book
  const handleEdit = (): void => {
    setShowEdit(!showEdit);
  };

  // Handle book deletion
  const handleDelete = (): void => {
    deleteBookById(book.id);
  };

  const handleSubmit = (): void => {
    setShowEdit(false);
  };
  const context = useContext(BooksContext);

  if (!context) {
    // context hasn't been provided - handle the error here
    return <div>Error: BooksContext not available.</div>;
  }

  const { deleteBookById } = context;
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
