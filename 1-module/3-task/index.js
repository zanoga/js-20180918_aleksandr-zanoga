'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

let inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';
let inputData2 = '25,-1,-234,4,   1000';
function getMinMax(str) {
    let o = {};
    let srting = str.match(/-?\d+(\.\d+)?/gi);
    parseFloat(srting.sort(function(a, b) {
        return a - b;
    }));
    o.min = parseFloat(srting[0]);
    o.max = parseFloat(srting[srting.length - 1]);
    return o;
}

console.log(getMinMax(inputData));