const addBookButton = document.querySelector('.AddBookButton');
const visiblityForm = document.querySelector('.hidden');
const visiblityBackground = document.querySelector('.background');

const form = document.querySelector('form');

const titleInput = document.querySelector('.titleInput');
const authorInput = document.querySelector('.authorInput');
const pagesInput = document.querySelector('.pagesInput');
const checkedInput = document.querySelector('.checkedInput');

let books = document.querySelector('.book');

const inputs = document.querySelectorAll('input');

const Library = [];

class Book{
    constructor(title, author, pages, checked) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.checked = checked;
        this.id = new Date().valueOf();
    }
}

function addToLibrary(){
    const newbook = new Book(titleInput.value, authorInput.value, pagesInput.value, checkedInput.checked);
    Library.push(newbook);
    createCards();
}

function createCards(){
    books.textContent = '';

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
        pages.textContent = result.pages + ' pages';
        card.appendChild(pages);

        const buttonRead = document.createElement('button');
        buttonRead.classList.add('Read');
        buttonRead.textContent = result.checked;
        card.appendChild(buttonRead);

        const buttonDelete = document.createElement('button');
        buttonDelete.classList.add('delete');
        buttonDelete.textContent = 'delete';
        card.appendChild(buttonDelete);

        books.appendChild(card);

    });
}

document.addEventListener('click', (e) => {
    if(e.target.classList == 'delete'){
        const id = e.target.parentNode.dataset.id;
        const result = Library.findIndex(item => item.id == id);
        Library.splice(result, 1);
        e.target.parentNode.remove();
    }else if(e.target.classList == 'Read'){
        if(e.target.textContent == 'true'){
            const id = true;
            const result = Library.findIndex(item => item.checked == id);
            Library[result].checked = false;
            e.target.textContent = 'false';
        }else if(e.target.textContent == 'false'){
            const id = false;
            const result = Library.findIndex(item => item.checked == id);
            Library[result].checked = true;
            e.target.textContent = 'true';
        }
    }
})


form.addEventListener('submit', (e) => {
    e.preventDefault();
    addToLibrary();

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