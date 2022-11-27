let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
        readString = this.read ? "read" : "not read yet."
        infoString = this.title + " by " + this.author + ", " + this.pages + " pages, " + readString
        return infoString
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

const lotr = new Book("Lord of the Rings", "Tolkein", 300, true)
const hhg = new Book("Hitchhiker's Guide", "Adams", 250, true)
const wok = new Book("Way of Kings", "Sanderson", 1000, true)

addBookToLibrary(lotr)
addBookToLibrary(hhg)
addBookToLibrary(wok)

