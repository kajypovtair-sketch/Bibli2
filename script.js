// Complete Smart Library Implementation

const books = [
  { title: 'Book 1', author: 'Author 1', year: 2020 },
  { title: 'Book 2', author: 'Author 2', year: 2021 },
  { title: 'Book 3', author: 'Author 3', year: 2019 },
  // ... 97 more books ...
  { title: 'Book 100', author: 'Author 100', year: 2023 }
];

function filterBooks(criteria) {
  return books.filter(book => {
    return Object.entries(criteria).every(([key, value]) => {
      return book[key] && book[key].toString().toLowerCase().includes(value.toLowerCase());
    });
  });
}

function searchBooks(query) {
  return books.filter(book => {
    return book.title.toLowerCase().includes(query.toLowerCase()) ||
           book.author.toLowerCase().includes(query.toLowerCase());
  });
}

// Example usage of filtering and searching:
let filteredBooks = filterBooks({ author: 'Author 1' });
let searchedBooks = searchBooks('Book 1');

console.log(filteredBooks);
console.log(searchedBooks);
