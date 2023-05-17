import BooksContext, { BooksContextType } from '../context/books';
import { useContext } from 'react';

function useBooksContext(): BooksContextType | undefined {
  return useContext(BooksContext);
}

export default useBooksContext;
