let myLibrary = [];

const submit = document.querySelector('.add')
submit.addEventListener('click', () => {
    alert('CREATING BOOK')
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').checked
    console.log('new book info:', title, author, pages, read)
    const newBook = new Book(title, author, pages, read)

    newBook.addToPage()
})



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

Book.prototype.addToPage = function() {
    const parent = document.querySelector('.booklist')
    const card = document.createElement('div')
    const bookInfo = document.createElement('div')
    bookInfo.classList.add('book-info')
    card.classList.add('book-card')
    bookInfo.appendChild(card)
    parent.appendChild(bookInfo)

    const bookTitle = document.createElement('span')
    const bookAuthor = document.createElement('span')
    const bookPages = document.createElement('span')
    const bookRead = document.createElement('span')

    bookTitle.classList.add('title')
    bookAuthor.classList.add('author')
    bookPages.classList.add('pages')
    bookRead.classList.add('read-status')

    bookTitle.textContent = this.title
    bookAuthor.textContent = this.author
    bookPages.textContent = this.pages + " pages"
    bookRead.textContent = this.read ? "Read" : "Not Read Yet"

    card.classList.add(this.read ? 'have-read' : 'unread')
    card.appendChild(bookTitle)
    card.appendChild(bookAuthor)
    card.appendChild(bookPages)
    card.appendChild(bookRead)
}




function addToPage(book) {
    const parent = document.querySelector('.booklist')
    const card = document.createElement('div')
    const bookInfo = document.createElement('div')
    bookInfo.classList.add('book-info')
    card.classList.add('book-card')
    bookInfo.appendChild(card)
    parent.appendChild(bookInfo)

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

    card.classList.add(book.read ? 'have-read' : 'unread')
    card.appendChild(bookTitle)
    card.appendChild(bookAuthor)
    card.appendChild(bookPages)
    card.appendChild(bookRead)
    
}



//test books to populate page
/* const lotr = new Book("Lord of the Rings", "Tolkein", 300, true)
const hhg = new Book("Hitchhiker's Guide", "Adams", 250, true)
const wok = new Book("Way of Kings", "Sanderson", 1000, true)

addBookToLibrary(lotr)
addBookToLibrary(hhg)
addBookToLibrary(wok)

myLibrary.forEach(book => {
    addToPage(book)
}); */




/*     const newBook = createBookObject()
    console.log(newBook.title)
    addBookToLibrary(newBook)
    addToPage(newBook) */

    /*
    function createBookObject() {
    console.log('CREATING BOOK')
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').checked
    console.log('new book info:', title, author, pages, read)
    const newBook = new Book(title, author, pages, read)

    return newBook
}






function addBookToLibrary(book) {
    myLibrary.push(book)
}
*/