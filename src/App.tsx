import BookCreate from './components/base/BookCreate';
import BookList from './components/base/BookList';
import { useState } from 'react';

// Define the Book interface
export interface Book {
  id: number;
  name: string;
}

function App() {
  // Update the state definition to use an array of Book objects
  const [books, setBooks] = useState<Book[]>([]);

  const createBook = (name: string) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 999), name },
    ];
    setBooks(updatedBooks);
  };

  const deleteBookById = (id: number) => {
    const updatedBooks = books.filter(book => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
