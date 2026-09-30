import { useState } from "react";
import List from "./List";
import type { Book } from "../types/Book";

function BookApp() {
  const [books, setBooks] = useState<Book[]>([
    {
      id: 1,
      title: "1984",
      author: "George Orwell"
    },
    {
      id: 2,
      title: "The Hobbit",
      author: "J.R.R. Tolkien"
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      author: "Jane Austen"
    }
  ]);

  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  const addBook = () => {
    if (!title.trim() || !author.trim()) {
      return;
    }

    const newBook: Book = {
      id: Date.now(),
      title: title.trim(),
      author: author.trim()
    };

    setBooks(currentBooks => [
      ...currentBooks,
      newBook
    ]);

    setTitle("");
    setAuthor("");
  };

  return (
    <div>
      <h1>Book List</h1>

      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />

      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={event => setAuthor(event.target.value)}
      />

      <button onClick={addBook}>
        Add Book
      </button>

      <List<Book>
        items={books}
        renderItem={book => (
          <div>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
          </div>
        )}
      />
    </div>
  );
}

export default BookApp;