'use strict';

class Book {
    constructor(title, author, genre, year) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.year = year;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    filterByGenre(genre) {
        return this.books.filter(book => book.genre === genre);
    }

    searchByTitle(title) {
        return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    }
}

// Example Usage
const myLibrary = new Library();
myLibrary.addBook(new Book('The Hobbit', 'J.R.R. Tolkien', 'Fantasy', 1937));
myLibrary.addBook(new Book('1984', 'George Orwell', 'Dystopian', 1949));

console.log(myLibrary.filterByGenre('Fantasy')); // Filter books by genre
console.log(myLibrary.searchByTitle('1984'));   // Search for a book by title