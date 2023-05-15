import BookCreate from './components/base/BookCreate';
import BookList from './components/base/BookList';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Define the Book interface
export interface Book {
  id: number;
  name: string;
}

function App(): React.ReactElement {
  // Update the state definition to use an array of Book objects
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async (): Promise<void> => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (name: string): Promise<void> => {
    const response = await axios.post('http://localhost:3001/books', {
      name,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id: number): Promise<void> => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter(book => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBookById = async (id: number, newName: string): Promise<void> => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      name: newName,
    });
    const updatedBooks = books.map(book => {
      if (book.id === id) {
        return { ...book, ...response.data };
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
