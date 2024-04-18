"use strict";
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
console.log(document.getElementById('super_link'));
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const renameLink = document.querySelectorAll('.card-link');
renameLink.forEach(link => {
    link.textContent = 'ссылка';
})
// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// const cardLinkList = document.querySelectorAll('.card-body .card-link');
console.log(document.querySelectorAll('.card-body .card-link'));
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
console.log(document.querySelector('[data-number = "50"]'));
// 5. Выведите содержимое тега title в консоль.
console.log(document.title);
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
console.log(document.querySelector('.card-title').parentNode);
// 7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const pCreate = document.createElement('p');
pCreate.textContent = 'Привет';
document.querySelector('.card').prepend(pCreate);
// 8. Удалите тег h6 на странице.
document.querySelector('h6').remove();
