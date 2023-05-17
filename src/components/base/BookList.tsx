import useBooksContext from '../../hooks/use-books-context';
import BookShow from './BookShow';

const BookList: React.FC = () => {
  const context = useBooksContext();

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
