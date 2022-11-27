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

function addToPage2(book) {
    const parent = document.querySelector('.booklist')
    const card = document.createElement('div')
    card.classList.add('book-card')
    parent.appendChild(card)

    const bookTitle = document.createElement('span')
    const bookAuthor = document.createElement('span')
    const bookPages = document.createElement('span')
    const bookRead = document.createElement('span')

    bookTitle.classList.add('title')
    bookAuthor.classList.add('author')
    bookPages.classList.add('pages')
    bookRead.classList.add('read-status')

    bookTitle.textContent = book.title
    bookAuthor.textContent = book.author
    bookPages.textContent = book.pages + " pages"
    bookRead.textContent = book.read ? "Read" : "Not Read Yet"

    card.appendChild(bookTitle)
    card.appendChild(bookAuthor)
    card.appendChild(bookPages)
    card.appendChild(bookRead)


}

function addToPage(book) {
    const parent = document.querySelector('.booklist')
    const card = document.createElement('div')
    card.classList.add('book-info')
    const bookDiv = document.createElement('div')
    bookDiv.classList.add('book-card')

    const bookTitle = document.createElement('span')
    const bookAuthor = document.createElement('span')
    const bookPages = document.createElement('span')
    const bookRead = document.createElement('span')

    bookTitle.classList.add('title')
    bookAuthor.classList.add('author')
    bookPages.classList.add('pages')
    bookRead.classList.add('read-status')

    bookTitle.textContent = book.title
    bookAuthor.textContent = book.author
    bookPages.textContent = book.pages + " pages"
    bookRead.textContent = book.read ? "Read" : "Not Read Yet"

    bookDiv.appendChild(bookTitle)
    bookDiv.appendChild(bookAuthor)
    bookDiv.appendChild(bookPages)
    bookDiv.appendChild(bookRead)

    
    card.appendChild(bookDiv)
    parent.append(card)
}

const lotr = new Book("Lord of the Rings", "Tolkein", 300, true)
const hhg = new Book("Hitchhiker's Guide", "Adams", 250, true)
const wok = new Book("Way of Kings", "Sanderson", 1000, true)

addBookToLibrary(lotr)
addBookToLibrary(hhg)
addBookToLibrary(wok)

myLibrary.forEach(book => {
    addToPage2(book)
});