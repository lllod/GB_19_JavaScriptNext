"use strict";
// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
document.addEventListener('DOMContentLoaded', function () {
    console.log('Все теги прогрузились');
});
// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
window.addEventListener('load', function () {
    console.log('Страница загрузилась');
});
// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - Cообщение должно определять присутствует или отсутствует класс "super_element" у элемента, а также выводить в
// нижнем регистре верный тег в данной строке, по которому был совершен клик.
// - Необходимо использовать делегирование.
document.body.addEventListener('click', function(e) {
    const target = e.target;
    if (target.tagName) {
        const tagName = target.tagName.toLowerCase();
        const isSuperElement = target.classList.contains('super_element');

        const message = isSuperElement ?
            `Класс "super_element" присутствует в элементе "${tagName}".` :
            `Класс "super_element" отсутствует в элементе "${tagName}".`;

        console.log(message);
    }
});
// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
const isTextarea = document.querySelector('textarea');
isTextarea.addEventListener('mouseover', function (e) {
    console.log('Вы навели на textarea');
});
// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который
// записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не
// нужно. Необходимо использовать делегирование.
const isUl = document.querySelector('ul');
    isUl.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        console.log(e.target.textContent);
    }
});
// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если
// мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.
// Ответ: Из-за порядка всплытия событий в DOM. Обработка событий осуществляется от дочернего к родительскому.
// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
const listLi = document.querySelectorAll('li');
listLi.forEach(function (i, index) {
    if (index % 2 !== 0) {
        i.style.backgroundColor = '#8d46f6';
    }
});
