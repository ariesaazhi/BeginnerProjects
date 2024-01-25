import "./App.css";
import { useState } from "react";
import { Book } from "./Book";

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState("");

  const handleChange = (event) => {
    setNewBook(event.target.value);
  };

  const addBook = () => {
    const book = {
      id: books.length === 0 ? 1 : books[books.length - 1].id + 1,
      bookName: newBook,
      completed: false,
    };
    setBooks([...books, book]);
    setNewBook("");
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const completeBook = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, completed: true } : book
      )
    );
  };

  return (
    <div className="App-container">
      <div className="book-container">
        <h1 className="heading">Book Tasks</h1>
        <input
          onChange={handleChange}
          value={newBook}
          placeholder="Enter book name"
        />
        <button onClick={addBook} className="custom-button">
          Add Book
        </button>
      </div>

      <div className="list">
        {books.map((book) => (
          <div key={book.id}>
            <h2>{book.bookName}</h2>
            <Book
              bookName={book.bookName}
              id={book.id}
              completed={book.completed}
              deleteBook={() => deleteBook(book.id)}
              completeBook={() => completeBook(book.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
