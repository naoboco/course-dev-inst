import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks
} from "../store/selectors";

type GenreFilter =
  | "All"
  | "Horror"
  | "Fantasy"
  | "Science Fiction";

function BookList() {
  const [selectedGenre, setSelectedGenre] =
    useState<GenreFilter>("All");

  const allBooks = useSelector(selectBooks);
  const horrorBooks = useSelector(selectHorrorBooks);
  const fantasyBooks = useSelector(selectFantasyBooks);
  const scienceFictionBooks = useSelector(
    selectScienceFictionBooks
  );

  let booksToDisplay = allBooks;

  if (selectedGenre === "Horror") {
    booksToDisplay = horrorBooks;
  } else if (selectedGenre === "Fantasy") {
    booksToDisplay = fantasyBooks;
  } else if (selectedGenre === "Science Fiction") {
    booksToDisplay = scienceFictionBooks;
  }

  return (
    <div>
      <h1>Book Inventory</h1>

      <div>
        <button onClick={() => setSelectedGenre("All")}>
          All
        </button>

        <button onClick={() => setSelectedGenre("Horror")}>
          Horror
        </button>

        <button onClick={() => setSelectedGenre("Fantasy")}>
          Fantasy
        </button>

        <button
          onClick={() =>
            setSelectedGenre("Science Fiction")
          }
        >
          Science Fiction
        </button>
      </div>

      <h2>{selectedGenre}</h2>

      {booksToDisplay.map(book => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
        </div>
      ))}
    </div>
  );
}

export default BookList;