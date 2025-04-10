function createBook(title, author) {
    return {
        title:title,
        author:author,
        details:function(){
            console.log(`Title:${this.title},Author:${this.author}`);
        }
    };
}
function createLibrary(){
    let books=[]; 
    return{
        addBook:function(book){
            books.push(book);
        },
        removeBook:function(title) {
            books=books.filter(book => book.title!== title);
        },
        listBooks:function(){
            books.forEach(book => book.details());
        }
    };
}
const library = createLibrary();
const book1 = createBook("To Kill a Mockingbird", "Harper Lee");
const book2 = createBook("1984", "George Orwell");
library.addBook(book1);
library.addBook(book2);
library.listBooks(); 
library.removeBook("1984");
library.listBooks();

