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
  const handleEdit = () => {
    setShowEdit(!showEdit);
  };
  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleSubmit = (id: number, name: string) => {
    onEdit(id, name);
    setShowEdit(false);
  };

  let content = <h3>{book.name}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className='book-show'>
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
