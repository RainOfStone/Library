const myLibrary = []
const libraryContainer = document.getElementById('library-container')
const dialog = document.querySelector('dialog')
const headerButton = document.querySelector('dialog + button')
const closeButton = document.querySelector('dialog button')
const ReadBtn = document.getElementById('Read')
const submitBtn = document.getElementById('submitBtn')
function Book(title, author, pages, read) {
    this.title = title //replace with in input val
    this.author = author //replace with in input val
    this.pages = pages //replace with in input val
    this.read = read //replace with in input val
    //form function goes here probably
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
                //prevent form from being submitted
                //const Book = new Book(4X input values here)
                //Book.Book()
                //addBookToLibrary() make input vals for form = the objects ie. this.object
            break
        }
        //addBookToLibrary()
        //displayForm()
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