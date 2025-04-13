// Define Book constructor function
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// Add a method to Book prototype
Book.prototype.getSummary = function() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
};

// Export Book constructor
export default Book;