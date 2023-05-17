import { useEffect, useContext, useState } from 'react';
import BookCreate from './components/base/BookCreate';
import BookList from './components/base/BookList';

import BooksContext from './context/books';

function App(): React.ReactElement {
  const [contextLoaded, setContextLoaded] = useState(false);
  const context = useContext(BooksContext);

  useEffect(() => {
    if (!contextLoaded && context) {
      const { fetchBooks } = context;
      fetchBooks();
      setContextLoaded(true);
    }
  }, [context, contextLoaded]);

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
