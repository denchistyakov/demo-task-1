'use strict';

function convertSnakeCaseToCamelCase(str) {
    const splitedStr = str.split('_');
    for (let i = 1; i < splitedStr.length; i++) {
        const part = splitedStr[i];
        splitedStr[i] = part[0].toUpperCase() + part.slice(1);
    }

    return splitedStr.join('');
}

convertSnakeCaseToCamelCase('a_b') === 'aB'; // 'aB'
convertSnakeCaseToCamelCase('a_b_c') === 'aBC'; // 'aBC'
convertSnakeCaseToCamelCase('snake_case_var') === 'snakeCaseVar'; // 'snakeCaseVar'

// console.log(
//     convertSnakeCaseToCamelCase('a_b'), // 'aB'
//     convertSnakeCaseToCamelCase('a_b_c'), // 'aBC'
//     convertSnakeCaseToCamelCase('snake_case_var') // 'snakeCaseVar'
// );

// console.log(
//     convertSnakeCaseToCamelCase('a_b') === 'aB', // 'aB'
//     convertSnakeCaseToCamelCase('a_b_c') === 'aBC', // 'aBC'
//     convertSnakeCaseToCamelCase('snake_case_var') === 'snakeCaseVar' // 'snakeCaseVar'
// );
