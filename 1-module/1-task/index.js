/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
    let a = m;
    for(let i = 1; i <= n-1; i++) {
        a *= m;
    }
    return a;
}


pow(3, 4);