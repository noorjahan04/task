const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
    addBook(book) {
      if (!book.title || !book.author || !book.year || typeof book.year !== 'number') {
        console.log("Book information is incomplete or invalid.");
        return;
      }
      this.books.push(book);
      console.log(`Book "${book.title}" by ${book.author} added successfully.`);
    },
    findBookByTitle(title) {
      const book = this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
      return book ? book : "Book not found.";
    },
    removeBook(title) {
      const index = this.books.findIndex(book => book.title.toLowerCase() === title.toLowerCase());
      if (index !== -1) {
        const removedBook = this.books.splice(index, 1);
        console.log(`Book "${removedBook[0].title}" removed successfully.`);
      } else {
        console.log("Book not found.");
      }
    }
  };
  library.addBook({ author: "George Orwell", year: 1949 }); 
  library.addBook({ title: "1984", author: "George Orwell", year: 1949 }); 
  console.log(library.findBookByTitle("the hobbit")); 
  library.removeBook("1984"); 
  console.log(library.books.length); 