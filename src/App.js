import './App.css'
import { BookProvider } from './bookContext'
import BookList from './bookList'
import Nav from './Nav'
import AddBooks from './AddBooks'

function App() {
  return (
    <BookProvider>
      <div className="App container">
      <Nav /> <br/>
      <AddBooks />
      <BookList />
    </div>
    </BookProvider>
  );
}

export default App;
