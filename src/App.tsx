import BookCreate from './components/base/BookCreate';
import BookList from './components/base/BookList';
import { useState } from 'react';

// Define the Book interface
export interface Book {
  id: number;
  name: string;
}

function App(): React.ReactElement {
  // Update the state definition to use an array of Book objects
  const [books, setBooks] = useState<Book[]>([]);

  const createBook = (name: string): void => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 999), name },
    ];
    setBooks(updatedBooks);
  };

  const deleteBookById = (id: number): void => {
    const updatedBooks = books.filter(book => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBookById = (id: number, newName: string): void => {
    const updatedBooks = books.map(book => {
      if (book.id === id) {
        return { ...book, name: newName };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
