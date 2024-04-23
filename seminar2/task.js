"use strict";
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать
// методы forEach и querySelectorAll и свойство classList у элементов.
const addClassSD = document.querySelectorAll('.dropdown-item');
addClassSD.forEach(i => i.classList.add('super-dropdown'));
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо
// добавить, если такого класса у элемента не было.
const btnClassEdit = document.querySelector('.btn');
if (btnClassEdit.classList.contains('btn-secondary')) {
    btnClassEdit.classList.remove('btn-secondary');
} else {
    btnClassEdit.classList.add('btn-secondry');
}
// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
const menuClassEdit = document.querySelector('.menu');
menuClassEdit.classList.remove('dropdown-menu');
// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
const dropDownClass = document.querySelector('div.dropdown');
dropDownClass.insertAdjacentHTML("afterend", '<a href="#">link</a>');
// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
const replaceID = document.querySelector('#dropdownMenuButton');
replaceID.id = 'superDropdown';
// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный
// "dropdownMenuButton" используя dataset.
const addDataDD = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
addDataDD.dataset.dd = '3';
// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const removeType = document.querySelector('.dropdown-toggle');
removeType.removeAttribute('type');
