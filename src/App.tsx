import BookCreate from './components/base/BookCreate';
import BookList from './components/base/BookList';
import { useEffect, useContext } from 'react';

import BooksContext from './context/books';

function App(): React.ReactElement {
  const context = useContext(BooksContext);
  const { fetchBooks } = context || {}; // Provide an empty object as default value

  useEffect(() => {
    if (fetchBooks) {
      fetchBooks();
    }
  }, [fetchBooks]);

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
