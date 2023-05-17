import { createContext, useState, FC, ReactNode, useCallback } from 'react';
import axios from 'axios';

export interface Book {
  id: number;
  name: string;
}

export interface BooksContextType {
  books: Book[];
  fetchBooks: () => Promise<void>;
  createBook: (name: string) => Promise<void>;
  deleteBookById: (id: number) => Promise<void>;
  editBookById: (id: number, newName: string) => Promise<void>;
}

const BooksContext = createContext<BooksContextType | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

const Provider: FC<ProviderProps> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = useCallback(async (): Promise<void> => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  }, []);

  const createBook = async (name: string): Promise<void> => {
    const response = await axios.post('http://localhost:3001/books', { name });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id: number): Promise<void> => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
  };

  const editBookById = async (id: number, newName: string): Promise<void> => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      name: newName,
    });
    const updatedBooks = books.map(book =>
      book.id === id ? { ...book, ...response.data } : book,
    );
    setBooks(updatedBooks);
  };

  const value: BooksContextType = {
    books,
    fetchBooks,
    createBook,
    deleteBookById,
    editBookById,
  };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};

export { Provider };
export default BooksContext;
