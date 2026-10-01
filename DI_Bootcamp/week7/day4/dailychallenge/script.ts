interface Book {
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre?: string;
}

class Library {
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public getBookDetails(isbn: string): Book | undefined {
        return this.books.find(book => book.isbn === isbn);
    }

    protected getAllBooks(): Book[] {
        return [...this.books];
    }
}

class DigitalLibrary extends Library {
    public readonly website: string;

    constructor(website: string) {
        super();
        this.website = website;
    }

    public listBooks(): string[] {
        return this.getAllBooks().map(book => book.title);
    }
}

const myLibrary = new DigitalLibrary("https://mylibrary.com");

myLibrary.addBook({
    title: "Harry Potter",
    author: "J.K. Rowling",
    isbn: "9780747532699",
    publishedYear: 1997,
    genre: "Fantasy"
});

myLibrary.addBook({
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isbn: "9780547928227",
    publishedYear: 1937,
    genre: "Fantasy"
});

myLibrary.addBook({
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    publishedYear: 1949
});

console.log("Library Website:", myLibrary.website);

console.log(
    "Book Details:",
    myLibrary.getBookDetails("9780747532699")
);

console.log(
    "Book Details:",
    myLibrary.getBookDetails("9780547928227")
);

console.log(
    "Book Details:",
    myLibrary.getBookDetails("9780451524935")
);

console.log("All Books:", myLibrary.listBooks());