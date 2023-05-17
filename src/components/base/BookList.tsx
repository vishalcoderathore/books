import BooksContext from '../../context/books';
import { useContext } from 'react';
import BookShow from './BookShow';

const BookList: React.FC = () => {
  const context = useContext(BooksContext);

  if (!context) {
    // context hasn't been provided - handle the error here, you might want to return from the component
    return null;
  }
  const { books } = context;
  const renderedBooks = books.map(book => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className='book-list'>{renderedBooks}</div>;
};

export default BookList;
