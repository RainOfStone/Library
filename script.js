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
const BookCardTitle = document.getElementById('BookCardTitle')
const BookCardAuthor = document.getElementById('BookCardAuthor')
const BookCardPages = document.getElementById('BookCardPages')
let count = 0
function Book(title, author, pages, read) {
    this.title = title
    this.author = author 
    this.pages = pages 
    this.read = read 
}
Book.prototype.BookItems = function() {
    console.log(this.title, this.author, this.pages, this.read)
    addBookToLibrary(this.title, this.author, this.pages, this.read)
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
            break
            case 'submitBtn':
                event.preventDefault()
                console.log('event prevented!')
                const book = new addBookToLibrary2(titleId.value, authorId.value, pagesId.value, ReadBtn.id, 'Btn')
                console.log(myLibrary)
                myLibrary.push(book.AddBook())
                count++
                dialog.close()
            break
        }
    })
BookCard.addEventListener('click', (event) => {
    let target = event.target
        switch(target.id) {
            case 'Read-Status':
                if (BookCardBtn.id == 'Read-Status') {
                    BookCardBtn.id = 'Not-Read-Status'
                }
                BookCardBtn.textContent = 'Not Read'
            break
            case 'Not-Read-Status':
                if (BookCardBtn.id == 'Not-Read-Status') {
                    BookCardBtn.id = 'Read-Status'
                }
                BookCardBtn.textContent = 'Read'
            break
            case 'Delete':
                BookCard.remove()
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
function addBookToLibrary2( title, author, pages, ReadStatus, DeleteBtn) {
    this.AddBook = function() {
        this.BookCardItem = document.createElement('div')
        this.BookCardItem.setAttribute('style', `height: 100px;
    width: clamp(300px, 800px, 900px);
    background-color: white;
    border: 1px solid black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;`)
        this.ReadStatus = document.createElement('button')
        this.ReadStatus.id = 'Read-Status'
        this.ReadStatus.textContent = ReadStatus
        this.ReadStatus.setAttribute('style', `height: 30px;
    width: 100px;
    border: none;
    background-color: rgb(30, 92, 30);
    display: flex;
    justify-content: center;
    align-items: center;`)
        this.title = document.createElement('div')
        this.title.id = 'BookCardTitle'
        this.title.textContent = `Title: ${title}`

        this.author = document.createElement('div')
        this.author.id = 'BookCardAuthor'
        this.author.textContent = `Author: ${author}`


        this.DeleteBtn = document.createElement('button')
        this.DeleteBtn.id = 'DeleteBtn'
        this.DeleteBtn.textContent = 'X'
        this.DeleteBtn.setAttribute('style', `height: 30px;
            width: 30px;
            border: none;
            background-color: rgb(194, 23, 23);`)

        this.pages = document.createElement('div')
        this.pages.id = 'BookCardPages'
        this.pages.textContent = `Pages: ${pages}`

        this.DeleteBtn.addEventListener('click', () => { //this is used to specify that instance of the object prevent all objects from being removed
            this.BookCardItem.remove()
            myLibrary.splice(1, `${count}`)
            console.log(myLibrary)
        })
        this.ReadStatus.addEventListener('click', () => {
            if (this.ReadStatus.textContent == 'Not-Read') {
                this.ReadStatus.textContent = 'Read'
                this.ReadStatus.setAttribute('style', `height: 30px;
            width: 100px;
            border: none;
            background-color: rgb(30, 92, 30);`)
            }
            else if (this.ReadStatus.textContent == 'Read') {
                this.ReadStatus.textContent = 'Not-Read'
                this.ReadStatus.setAttribute('style', `height: 30px;
                    width: 100px;
                    border: none;
                    background-color: rgb(194, 23, 23);`)
            }
        })

        libraryContainer.appendChild(this.BookCardItem)
        this.BookCardItem.appendChild(this.title)
        this.BookCardItem.appendChild(this.author)
        this.BookCardItem.appendChild(this.pages)
        this.BookCardItem.appendChild(this.ReadStatus)
        this.BookCardItem.appendChild(this.DeleteBtn)
        
    }
}