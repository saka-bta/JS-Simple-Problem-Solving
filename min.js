let number1 = 67;
let number2 = 5356;
let number3 = 23456;

function findSmallerNumber(first, second, third) {
    if (first < second && first < third) {
        return first;
    }
    else if (second < first && second < third) {
        return second;
    }
    else {
        return third;
    }
}
const samller = findSmallerNumber(number1, number2, number3);
console.log('Samaller number is ', samller);