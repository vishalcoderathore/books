import useBooksContext from '../../hooks/use-books-context';
import BookShow from './BookShow';

const BookList: React.FC = () => {
  const context = useBooksContext();
  const books = context?.books || []; // Handle undefined context or books

  const renderedBooks = books.map(book => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className='book-list'>{renderedBooks}</div>;
};

export default BookList;
