const input = document.querySelector('.to-do__input');
const button = document.querySelector('.to-do__button');
const list = document.querySelector('.to-do__list');

function createTask() {
    const newLi = document.createElement('li');
    newLi.textContent = input.value;
    list.append(newLi);
    input.value = '';
}

button.addEventListener('click', function() {
    createTask();
});

list.addEventListener('click', function(evt) {
    if (evt.target.tagName === 'LI') {
        evt.target.classList.toggle('to-do__list_disactive');
    }
});
