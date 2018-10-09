/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

'use strict';

let data = [{
    "balance": "$1,825.65",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "name": "Golden Branch",
    "gender": "male",
    "greeting": "Hello, Golden Branch! You have 7 unread messages.",
    "favoriteFruit": "banana"
}];

function showSalary(data, age) {
    data.forEach(item => {
        if(item.age <= age) {
            console.log(item.name + ', ' + item.balance);
        }
    });
}

showSalary(data, 21);
