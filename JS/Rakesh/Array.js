console.log("***********length of an array************");

const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

console.log(clothing.length);
Array.length=5;
console.log(Array);
 
clothing.forEach((element) => 
console.log(element)
);

console.log("***********iterating a array************");
const numbers = [1, 2, 3, 4, 5];
const length = numbers.length;
console.log(length);
for(let i=0;i<length;i++){
    numbers[i]*=2;
    
}
console.log(numbers)
console.log("***********shortening  an array************");
const numberss = [1, 2, 3, 4, 5];
console.log("numberss"+numberss)
if (numberss.length > 3) {
  numberss.length = 3;
}

console.log(numberss); // [1, 2, 3]
console.log(numberss.length); // 3
console.log(numberss[3]); // undefined;

console.log("***********concat  an array************");
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
console.log("***********prototype.filter() an array************");
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
console.log("***********prime number************");
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]