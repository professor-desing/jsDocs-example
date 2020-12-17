/**
 * My Math library - Learn More {@tutorial secondTutorial}
 * @module Mymath
 */

/**
 * 
 * @param {Number} x  First Number
 * @param {Number} y Second Number
 * @returns {Number} Sum of "x" and "y"
 */

const addModule = (x, y) => x+y;

/**
 * Substract two numbers
 * @param {Number} x  First Number
 * @param {Number} y Second Number
 * @returns {Number} Substract of "x" and "y"
 */
const substract = (x, y) => x - y;

module.exports = {
    addModule,
    substract
}