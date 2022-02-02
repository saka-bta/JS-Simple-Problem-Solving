const numbers = [23, 34, 32, 34, 45, 56, 67, 67, 89, 05];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    // console.log(element);

    sum = sum + element;
}
console.log(sum);

function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
        return sum;
    }
}
console.log(sum);