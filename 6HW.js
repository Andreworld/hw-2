const numbs = [1, 5, 4, 10, 0, 3];  // задание 1

for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 10) break;
	console.log(numbs[i]);
}

[1, 5, 4, 10, 0, 3].indexOf(4)  // задание 2

let numds = [1, 3, 5, 10, 20];
numbs=numbs.join ('');
console.log (numbs);

const numbs = [1, 3, 5, 10, 20];    // задание 3
console.log(numbs.join(' '));

// задание 4
let a = [];     
for ( let index = 0; index < 3; index++) {
a[index] = [];
for (let indexOne = 0; indexOne < 3; indexOne++) {
a[index].push(1);
  }
 }
console.log(a);

// задание 5
let item = [1, 1, 1];
item.push('2','2','2');
console.log (item);

// задание 6

let array = [9, 8, 7, 'a', 6, 5];
array.sort().pop();
console.log(array);