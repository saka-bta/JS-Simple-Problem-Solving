const num1 = 450;
const num2 = 350;
const num3 = 568;
// if (num1 > num2) {
//     console.log('Number1 is greater.');
// }
// else {
//     console.log('Number2 is greater');
// }

// if (num1 > num2 && num1 > num3) {
//     console.log('number1 is greater');
// }
// else if (num2 > num1 && num2 > num3) {
//     console.log('number2 is greater');
// }
// else {
//     console.log('num3 is greater');
// }

// var max = Math.max(num1, num2, num3);
// console.log('largest number is ', max);

function findLagerNumber(first, second, third) {
    if (first > second && first > third) {
        return first;
    }
    else if (second > first && second > third) {
        return second;
    }
    else {
        return third;
    }
}
const larger = findLagerNumber(num1, num2, num3);
console.log('largest number ', larger);


