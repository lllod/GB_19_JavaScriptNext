// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.
// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).
// script.js

let JSONData = '';
function getJSONData() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка при получении');
            }
            return response.json();
        })
        .then(data => {
            JSONData = data;
            displayJSONData();
        })
        .catch(error => {
            console.error('Ошибка при получении:', error.message);
        });
}

function displayJSONData() {
    const contentDiv = document.querySelector('div.content');

    const jokeText = document.createElement('p');
    jokeText.classList.add('joke-text');
    jokeText.textContent = JSONData.value;
    contentDiv.appendChild(jokeText);

    const jokeImg = document.createElement('img');
    jokeImg.classList.add('joke-img');
    jokeImg.src = JSONData.icon_url;
    jokeImg.alt = 'Chuck Norris';
    contentDiv.appendChild(jokeImg);

    const jokeCreatedDate = document.createElement('p');
    jokeCreatedDate.classList.add('joke-created-at');
    jokeCreatedDate.textContent = JSONData.created_at;
    contentDiv.appendChild(jokeCreatedDate);
}

getJSONData();
