"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function concat(concatInput1, concatInput2){
    return concatInput1.toString() + concatInput2.toString();
}

console.log(concat("hello", "world"));
console.log(concat(4, 2));

function and(andInput1, andInput2) {
    return andInput1 && andInput2;
}

console.log(and(true, true));
console.log(and(true, false));
console.log(and(false, false));

function or(orInput1, orInput2) {
    return orInput1 || orInput2;
}

console.log(or(true, true));
console.log(or(true, false));
console.log(or(false, false));

function isEqual(isEqualInput1, isEqualInput2){
    return isEqualInput1 == isEqualInput2;
}

function isIdentical(isIdenticalInput1, isIdenticalInput2){
    return isIdenticalInput1 === isIdenticalInput2;
}

function isEven(isEvenInput){
    return parseFloat(isEvenInput) % 2 === 0;
}

console.log(isEven(false));

function addOne(addOneInput){
    return parseFloat(addOneInput) + 1;
}

console.log(addOne("-5"));
console.log(addOne("0"));

function isFalse(isFalseInput){
    return isFalseInput === false;
}

function not(notInput){
    return !notInput;
}

function isTrue(isTrueInput){
    return isTrueInput === true;
}