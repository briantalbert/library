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

const hhg = new Book("Hitchhiker's Guide", "Adams", 420, true)

console.log(hhg.info())

