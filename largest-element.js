// function largestElement(numbers) {
//     let largest = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         if (element > largest) {
//             largest = element;
//         }
//     }
//     return largest;
// }
// const ages = [87, 45, 12, 34, 45, 56, -67, 0, -23];
// const oldest = largestElement(ages);
// console.log(oldest);

function smallestElement(numbers) {
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}
const ages = [23, 45, -6, 67, -67, 45, -400, 45, 34, -56];
const youngest = smallestElement(ages);
console.log(youngest);