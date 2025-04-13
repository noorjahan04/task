// Book Constructor
function Book(title, author) {
    this.title=title;
    this.author=author;
    this.isAvailable=true;
}
// Member Constructor
function Member(name){
    this.name=name;
    this.borrowedBooks=[];
}
// Borrow Book Method for Regular Members
Member.prototype.borrowBook=function(book){
    if(this.borrowedBooks.length<3){
        if(book.isAvailable){
            book.isAvailable=false;
            this.borrowedBooks.push(book.title);
            console.log(`${this.name} borrowed "${book.title}".`);
        }else{
            console.log(`Sorry, "${book.title}" is already borrowed.`);
        }
    }else{
        console.log(`${this.name} has already borrowed 3 books and cannot borrow more.`);
    }
};
// PremiumMember Constructor (Inheritance)
function PremiumMember(name){
    Member.call(this, name);// Inherit properties
    this.specialCollectionAccess = true;
}
// Inherit prototype methods
PremiumMember.prototype = Object.create(Member.prototype);
PremiumMember.prototype.constructor = PremiumMember;
// Override borrowBook method for Premium Members
PremiumMember.prototype.borrowBook = function(book) {
    if (this.borrowedBooks.length < 5) { // Allow up to 5 books
        Member.prototype.borrowBook.call(this, book);
    } else {
        console.log(`${this.name} (Premium) has already borrowed 5 books and cannot borrow more.`);
    }
};

// Demonstration of Library System
// Create book instances
const book1 = new Book("JavaScript Basics", "John Doe");
const book2 = new Book("Advanced JavaScript", "Jane Doe");
const book3 = new Book("Web Development", "Chris Smith");
const book4 = new Book("Node.js Guide", "Anna Johnson");
const book5 = new Book("React Essentials", "Mark Lee");
// Create member instances
const member1 = new Member("Alice");
const premiumMember1 = new PremiumMember("Bob");
// Regular Member Borrowing Books
member1.borrowBook(book1);
member1.borrowBook(book2);
member1.borrowBook(book3);
member1.borrowBook(book4); // Should hit borrowing limit
// Premium Member Borrowing Books
premiumMember1.borrowBook(book1);
premiumMember1.borrowBook(book2);
premiumMember1.borrowBook(book3);
premiumMember1.borrowBook(book4);
premiumMember1.borrowBook(book5); // Premium members can borrow 5 books
premiumMember1.borrowBook(book1); // Should hit borrowing limit
// Using Bind to Borrow Books
const boundBorrowBook = member1.borrowBook.bind(member1, book4);
boundBorrowBook(); // Attempting to borrow using bind