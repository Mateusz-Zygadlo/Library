const addBookButton = document.querySelector('.AddBookButton');
const visiblityForm = document.querySelector('.hidden');
const visiblityBackground = document.querySelector('.background');

const form = document.querySelector('form');
const submit = document.querySelector('.submit');

const titleInput = document.querySelector('.titleInput');
const authorInput = document.querySelector('.authorInput');
const pagesInput = document.querySelector('.pagesInput');
const checkedInput = document.querySelector('.checkedInput');

let deleteButton = document.getElementsByClassName('Delete');

const readButton = document.querySelectorAll('.Read');

let books = document.querySelector('.book');

const inputs = document.querySelectorAll('input');

const Library = [];

function Book(title, author, pages, checked) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.checked = checked;
    this.id = new Date().valueOf();
}

function addToLibrary(){
    const newbook = new Book(titleInput.value, authorInput.value, pagesInput.value, checkedInput.checked);
    Library.push(newbook);
    books.textContent = '';
    createCards();
}

[...deleteButton].forEach(p => {
    p.addEventListener('click', (e) => {
        console.log(e);
    })
})

function createCards(){
    Library.forEach((result) => {
        const card = document.createElement('div');
        card.dataset.id = result.id;
        card.classList.add('card');
    
        const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = result.title;
        card.appendChild(title);
        
        const author = document.createElement('div');
        author.classList.add('author');
        author.textContent = result.author;
        card.appendChild(author);

        const pages = document.createElement('div');
        pages.classList.add('pages');
        pages.textContent = result.pages;
        card.appendChild(pages);

        const buttonRead = document.createElement('button');
        buttonRead.classList.add('Read');
        buttonRead.textContent = result.checked;
        card.appendChild(buttonRead);

        const buttonDelete = document.createElement('button');
        buttonDelete.classList.add('Delete');
        buttonDelete.textContent = 'Delete';
        card.appendChild(buttonDelete);

        books.appendChild(card);
    });
}



form.addEventListener('submit', (e) => {
    e.preventDefault();
    addToLibrary();

    deleteButton = document.getElementsByClassName('Delete');
    console.log(deleteButton);

    visiblityBackground.classList.add('visiblity');
    visiblityForm.classList.add('visiblity');
    inputs.forEach(item => item.value = '');
})

addBookButton.addEventListener('click', () => {
    visiblityBackground.classList.remove('visiblity');
    visiblityForm.classList.remove('visiblity');
})
visiblityBackground.addEventListener('click', () => {
    visiblityBackground.classList.add('visiblity');
    visiblityForm.classList.add('visiblity');
    inputs.forEach(item => item.value = '');
})