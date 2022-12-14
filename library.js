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

        card.addEventListener('click', () => {
            card.classList.toggle('have-read')
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

const submitButton = document.querySelector('.add')
submitButton.addEventListener('click', (e) => { 
    e.preventDefault()
    let myBook = new Book(infoFields[0].value, infoFields[1].value, infoFields[2].value, infoFields[3].checked)
    myShelf.addToShelf(myBook)
    myShelf.addToPage(myBook)
})