'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

let inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';
let inputData2 = '25,-1,-234,4,   1000';
function getMinMax(str) {
    let srting = str.match(/-?\d+(\.\d+)?/gi);
    parseFloat(srting.sort(function(a, b) {
        return a - b;
    }));

    return srting[0] + ', ' + srting[srting.length - 1];
}

console.log(getMinMax(inputData) === '-5.8, 73');
console.log(getMinMax(inputData2) === '-234, 1000');