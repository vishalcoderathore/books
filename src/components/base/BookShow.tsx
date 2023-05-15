import BookEdit from './BookEdit';
import { Book } from '../../App';
import { useState } from 'react';
interface BookShowProps {
  book: Book;
  onDelete: (id: number) => void;
  onEdit: (id: number, name: string) => void;
}

const BookShow: React.FC<BookShowProps> = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleEdit = (): void => {
    setShowEdit(!showEdit);
  };
  const handleDelete = (): void => {
    onDelete(book.id);
  };
  const handleSubmit = (id: number, name: string): void => {
    onEdit(id, name);
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
