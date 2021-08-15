const addBookButton = document.querySelector('.AddBookButton');
const visiblityForm = document.querySelector('.hidden');
const visiblityBackground = document.querySelector('.background');

const form = document.querySelector('form');
const submit = document.querySelector('.submit');

const titleInput = document.querySelector('.titleInput');
const authorInput = document.querySelector('.authorInput');
const pagesInput = document.querySelector('.pagesInput');
const checkedInput = document.querySelector('.checkedInput');


form.addEventListener('submit', (e) => {
    visiblityBackground.classList.add('visiblity');
    visiblityForm.classList.add('visiblity');
    e.preventDefault();
})

addBookButton.addEventListener('click', () => {
    visiblityBackground.classList.remove('visiblity');
    visiblityForm.classList.remove('visiblity');
})
visiblityBackground.addEventListener('click', () => {
    visiblityBackground.classList.add('visiblity');
    visiblityForm.classList.add('visiblity');
})