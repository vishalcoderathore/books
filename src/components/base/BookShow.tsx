import { Book } from '../../App';

interface BookShowProps {
  book: Book;
  onDelete: (id: number) => void;
}

const BookShow: React.FC<BookShowProps> = ({ book, onDelete }) => {
  const handleClick = () => {
    onDelete(book.id);
  };
  return (
    <div className='book-show'>
      {book.name}
      <div className='actions'>
        <button className='delete' onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
