'use strict';

/**
 * Эту функцию трогать не нужно
 */
 function print (text) {
    alert(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 name != null && name.length >=4 && name.indexOf(' ') < 0
 */
function isValid(name) {
    if(typeof name !== undefined && name != null) {
        if(/\s/g.test(name) === false && name.length > 3) {
            return true;
        } else return false;
    }
}

function sayHello () {
    let userName = prompt('Введите ваше имя');

    if (isValid(userName)) {
        print('Welcome back, ' + userName + '!');
    } else {
        print('Некорректное имя');
    }
}

sayHello();