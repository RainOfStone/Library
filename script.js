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
function Book(title, author, pages, read) {
    this.title = title //replace with in input val
    this.author = author //replace with in input val
    this.pages = pages //replace with in input val
    this.read = read //replace with in input val
    //form function goes here probably
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
            //ReadStatus() changes status of whether it's read or not in the dialog
            break
            case 'submitBtn':
                event.preventDefault()
                console.log('event prevented!')
                const book = new addBookToLibrary2(titleId.value, authorId.value, pagesId.value, ReadBtn.id, 'Btn')
                book.AddBook()
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
                BookCardBtn.textContent = 'Not Read'
            break
            case 'Not-Read-Status':
                if (BookCardBtn.id == 'Not-Read-Status') {
                    BookCardBtn.id = 'Read-Status'
                }
                BookCardBtn.textContent = 'Read'
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
        })

        libraryContainer.appendChild(this.BookCardItem)
        this.BookCardItem.appendChild(this.title)
        this.BookCardItem.appendChild(this.author)
        this.BookCardItem.appendChild(this.pages)
        this.BookCardItem.appendChild(this.ReadStatus)
        this.BookCardItem.appendChild(this.DeleteBtn)
        
    }
}
/*function addBookToLibrary(title, author, pages, isread) {
    const BookCard = document.createElement('div')
    BookCard.setAttribute('style', `height: 100px;
    width: clamp(300px, 800px, 900px);
    background-color: white;
    border: 1px solid black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;`)
    const BookCardBtn = document.createElement('button')
    BookCardBtn.id = '#Read-Status'
    BookCardBtn.textContent = 'Read'
    BookCardBtn.setAttribute('style', `height: 30px;
    width: 100px;
    border: none;
    background-color: rgb(30, 92, 30);`)
    const BookCardTitle = document.createElement('div')
    BookCardTitle.id = '#BookCardTitle'
    const BookCardAuthor = document.createElement('div')
    BookCardAuthor.id = '#BookCardAuthor'
    const BookCardPages = document.createElement('div')
    const BookCardDeleteBtn = document.createElement('button')
    BookCardDeleteBtn.id = 'DeleteBtn'
    BookCardDeleteBtn.textContent = 'X'
    BookCardDeleteBtn.setAttribute('style', `height: 30px;
        width: 30px;
        border: none;
        background-color: rgb(194, 23, 23);`)
    BookCardPages.id = '#BookCardPages'
    BookCardTitle.textContent = `Title: ${title}`
    BookCardAuthor.textContent = `Author: ${author}`
    BookCardPages.textContent = `Pages: ${pages}`
    libraryContainer.appendChild(BookCard)
    BookCard.appendChild(BookCardTitle)
    BookCard.appendChild(BookCardAuthor)
    BookCard.appendChild(BookCardPages)
    BookCard.appendChild(BookCardBtn)
    BookCard.appendChild(BookCardDeleteBtn)
    const BookCardDeleteBtnSelector = document.querySelectorAll('#DeleteBtn')
    BookCardDeleteBtnSelector.forEach(x => {
        x.addEventListener('click', function() {
            BookCard.remove()
        })
    })
    
    //takes params, creates book then stores in array
    BookCardBtn.addEventListener('click', (event) => {
        if (BookCardBtn.id == 'Read-Status') {
            BookCardBtn.setAttribute('style', `height: 30px;
                width: 100px;
                border: none;
                background-color: rgb(194, 23, 23)`)
        }
        if (BookCardBtn.id == 'Not-Read-Status') {
            BookCardBtn.setAttribute('style', `height: 30px;
                width: 100px;
                border: none;
                background-color: rgb(30, 92, 30)`)
        }
        let target = event.target
        switch(target.id) {
            case 'Read-Status':
                if (BookCardBtn.id == 'Read-Status') {
                    BookCardBtn.setAttribute('style', `height: 30px;
                        width: 100px;
                        border: none;
                        background-color: rgb(194, 23, 23)`)
                }
            break
            case 'Not-Read-Status':
                if (BookCardBtn.id == 'Not-Read-Status') {
                    BookCardBtn.id = 'Read-Status'
                }
                BookCardBtn.textContent = 'Read'
            break

            }
    })}*/












































//Recreate this code by yourself
/*function addBookToLibrary(bookCardItem, title, author, pages, BookStatusBtn, BookCardDeleteBtn) {
    this.CreateBook = function() {
    this.BookCardItem = document.createElement('div')
    this.BookCardItem.setAttribute('style', `height: 100px;
    width: clamp(300px, 800px, 900px);
    background-color: white;
    border: 1px solid black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;`)
    this.BookStatusBtn = document.createElement('div')
    this.BookStatusBtn.id = 'Read-Status'
    this.BookStatusBtn.textContent = BookStatusBtn
    this.BookStatusBtn.setAttribute('style', `height: 30px;
        width: 100px;
        border: none;
        background-color: rgb(30, 92, 30);
        display: flex;
        justify-content: center;
        align-items: center`)
    this.title = document.createElement('div')
    this.title.id = 'BookCardTitle'
    this.author = document.createElement('div')
    this.author.id = 'BookCardAuthor'
    this.pages = document.createElement('div')
    this.pages.id = 'BookCardPages'
    this.BookCardDeleteBtn = document.createElement('button')
    this.BookCardDeleteBtn.id = 'DeleteBtn'
    this.BookCardDeleteBtn.textContent = 'X'
    this.BookCardDeleteBtn.setAttribute('style', `height: 30px;
        width: 30px;
        border: none;
        background-color: rgb(194, 23, 23);`)
    this.title.textContent = `Title: ${title}`
    this.author.textContent = `Author: ${author}`
    this.pages.textContent = `Pages: ${pages}`
        this.BookCardDeleteBtn.addEventListener('click', () => {
            this.BookCardItem.remove()
        })
        this.BookCardItem.appendChild(this.title)
        this.BookCardItem.appendChild(this.author)
        this.BookCardItem.appendChild(this.pages)
        this.BookCardItem.appendChild(this.BookStatusBtn)
        this.BookCardItem.appendChild(this.BookCardDeleteBtn)
        libraryContainer.appendChild(this.BookCardItem)
}}*/

/*Use this to delete 1 item only:
// Select all buttons with the class 'delete-button'
        const buttons = document.querySelectorAll('.delete-button');

        // Add click event listener to each button
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove the button that was clicked
                this.remove();
            });
        });
*/