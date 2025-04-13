import books from './books.js';
// Generate summaries using map
const bookSummaries = books.map(book => book.getSummary());
// Log the summaries to the console
console.log(bookSummaries);