import BookShow from './BookShow';
import { Book } from '../../App';

// Add this at the top of your BookList component file, where you have defined the Book interface
interface BookListProps {
  books: Book[];
  onDelete: (id: number) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onDelete }) => {
  const renderedBooks = books.map(book => {
    return <BookShow key={book.id} book={book} onDelete={onDelete} />;
  });

  return <div className='book-list'>{renderedBooks}</div>;
};

export default BookList;
