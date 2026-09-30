import { createSlice } from "@reduxjs/toolkit";

export type Book = {
  id: number;
  title: string;
  author: string;
  genre: "Horror" | "Fantasy" | "Science Fiction";
};

type BooksState = {
  books: Book[];
};

const initialState: BooksState = {
  books: [
    {
      id: 1,
      title: "Dracula",
      author: "Bram Stoker",
      genre: "Horror"
    },
    {
      id: 2,
      title: "Frankenstein",
      author: "Mary Shelley",
      genre: "Horror"
    },
    {
      id: 3,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy"
    },
    {
      id: 4,
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      genre: "Fantasy"
    },
    {
      id: 5,
      title: "Dune",
      author: "Frank Herbert",
      genre: "Science Fiction"
    },
    {
      id: 6,
      title: "Foundation",
      author: "Isaac Asimov",
      genre: "Science Fiction"
    }
  ]
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {}
});

export default booksSlice.reducer;