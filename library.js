class Bookshelf {
    constructor() {
        this.shelf = []
    }

    addToShelf(book) {
        this.shelf.push(book)
    }

    addToPage(book) {
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
        bookRead.textContent = (book.read ? "Read" : "Not Read Yet") + " [click to toggle]"

        if (book.read) {
            card.classList.add('have-read')
        }

        card.appendChild(bookTitle)
        card.appendChild(bookAuthor)
        card.appendChild(bookPages)
        card.appendChild(bookRead)

        card.addEventListener('mousedown', () => {
            card.classList.toggle('clicked');
        })
        card.addEventListener('mouseup', () => {
            card.classList.toggle('have-read')
            card.classList.toggle('clicked');
            card.lastChild.innerText = (card.classList.contains('have-read') ? "Read" : "Not Read Yet") + " [click to toggle]"
        })
    }
}

class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = parseInt(pages)
        this.read = read
    }

    showInfo() {
        console.log(this.title, " by ", this.author, ". " )
    }
}

const myShelf = new Bookshelf()
const infoFields = document.querySelectorAll('input')

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");

const titleError = document.querySelector(".titleerror");
const authorError = document.querySelector(".authorerror");
const pagesError = document.querySelector(".pageserror");

title.addEventListener("input", (e) => {
    if (title.validity.valid) {
        titleError.textContent = "";
        titleError.className = "titleerror";
    } else {
        titleError.className = "error active";
        showError(title);
    }
})

author.addEventListener("input", (e) => {
    if (author.validity.valid) {
        authorError.textContent = "";
        authorError.className = "authorerror";
    } else {
        showError(author);
    }
})

pages.addEventListener("input", (e) => {
    if (pages.validity.valid) {
        pagesError.textContent = "";
        pagesError.className = "pageserror";
    } else {
        showError(pages);
    }
})

const submitButton = document.querySelector('.add')
submitButton.addEventListener('click', (e) => { 
    e.preventDefault()
    let myBook = new Book(infoFields[0].value, infoFields[1].value, infoFields[2].value, infoFields[3].checked)
    myShelf.addToShelf(myBook)
    myShelf.addToPage(myBook)
})

function showError(element) {
    const errorField = element.id;
    switch (errorField) {
        case "title":
            const titleError = document.querySelector('#title + span.error');
            title.className = "error active";
            if (title.validity.valueMissing) {
                titleError.textContent = "You need to enter a title.";
            } else if (title.validity.tooShort) {
                titleError.textContent = "Title must be at least 5 characters.";
            }
            break;
        case "author":

            break;
        case "pages":
            
            break;
        default:
            break;
    }
}