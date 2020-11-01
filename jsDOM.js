// Get elements from DOM (returns HTMLElement or HTMLCollection instead of array)
let el = document.getElementById('card1') // get element by id
el = document.getElementsByTagName('div') // get all the elements with specified tag name
el = document.getElementsByClassName('card') // get all the elements with specified class name
el = document.getElementsByName('product_image') // get all the elements with specified name
el = document.querySelector('.card'); // querySelector returns first element found
el = document.querySelector('#card1');
el = document.querySelectorAll('.card') // returns all the Elements with specified css selector
//-----------------------------------------------------------------------------------------------------
// Add elements to HTML
// Create HTML element
const newEl = document.createElement('div'); // creates element with div tag
newEl.setAttribute('class', 'card'); // set attributes of element
// Add element to DOM
// At first you need to get element you want to add children for
const parent = document.querySelector('main');
// Next add newly created element as child to the parent element found
parent.appendChild(newEl);
// ДЗ
/**
 * Создать макет страницы товаров интернет-магазина.
 * Сгенерировать mock товары с картинкой, описанием и наименованием товара.
 * Добавить элементы с товарами на страницу.
 * Добавить для каждой карточки товара кнопку купить.
 * Написать функцию поиска по товарам.
 */
