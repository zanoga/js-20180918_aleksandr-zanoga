/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
let obj = {test: 1};

function clone (obj) {
    let clone = {};
    for (let key in obj) {
        clone[key] = obj[key];
    }
    return clone;
}

/*-------TESTS------------*/

console.log(clone(obj) !== obj);
console.log(clone(obj).test === obj.test);