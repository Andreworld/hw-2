// задание 1

let str = 'js';
console.log(new String(str).toUpperCase());

// задание 2 ????

const words = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const search = 'ко';

words.forEach((str) => {

    if (str.toLowerCase().includes(search.toLowerCase())) {
        console.log(str);
    }
});

// задание 3

x = Math.floor(32.58884);

x = Math.ceil(32.58884);

x = Math.round(32.58884);

let num = 32.58884;

console.log(Math.floor(num), Math.round(num), Math.ceil(num));


// задание 4

const numbers = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

// задание 5

Math.round(Math.random()*10);

