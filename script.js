const myLibrary = []
const libraryContainer = document.getElementById('library-container')
const dialog = document.querySelector('dialog')
const headerButton = document.querySelector('dialog + button')
const closeButton = document.querySelector('dialog button')
const titleId = document.getElementById('title')
const authorId = document.getElementById('author')
const pagesId = document.getElementById('pages')
const ReadBtn = document.getElementById('Read')
const submitBtn = document.getElementById('submitBtn')
const BookCard = document.querySelector('#BookCard')
const BookCardBtn = document.getElementById('Read-Status')
function Book(title, author, pages, read) {
    this.title = title //replace with in input val
    this.author = author //replace with in input val
    this.pages = pages //replace with in input val
    this.read = read //replace with in input val
    //form function goes here probably
}
Book.prototype.BookItems = function() {
    console.log(this.title, this.author, this.pages, this.read)
}
dialog.addEventListener('click', (event) => {
        let target = event.target
        switch(target.id) {
            case 'Read':
                if (ReadBtn.id == 'Read') {
                    ReadBtn.id = 'Not-Read'
                }
                ReadBtn.value = 'Not Read'
            break
            case 'Not-Read':
                if (ReadBtn.id == 'Not-Read') {
                    ReadBtn.id = 'Read'
                }
                ReadBtn.value = 'Read'
            //ReadStatus() changes status of whether it's read or not in the dialog
            break
            case 'submitBtn':
                event.preventDefault()
                console.log('event prevented!')
                const book = new Book(titleId.value, authorId.value, pagesId.value, ReadBtn.id)
                book.BookItems()
                dialog.close()
                //prevent form from being submitted
                //const Book = new Book(4X input values here)
                //Book.Book()
                //addBookToLibrary() make input vals for form = the objects ie. this.object
            break
        }
        //addBookToLibrary()
        //displayForm()
    })
BookCard.addEventListener('click', (event) => {
    let target = event.target
        switch(target.id) {
            case 'Read-Status':
                if (BookCardBtn.id == 'Read-Status') {
                    BookCardBtn.id = 'Not-Read-Status'
                }
                BookCardBtn.value = 'Not Read'
            break
            case 'Not-Read-Status':
                if (BookCardBtn.id == 'Not-Read-Status') {
                    BookCardBtn.id = 'Read-Status'
                }
                BookCardBtn.value = 'Read'
            break
}
})
headerButton.addEventListener('click', () => {
        dialog.showModal()
        console.log('header button ran!')
})
closeButton.addEventListener('click', () => {
    dialog.close()
})
function displayForm() {
    //displays the input values
    //and each input value is represented by one of the objects
}
function addBookToLibrary() {
    //takes params, creates book then stores in array
}