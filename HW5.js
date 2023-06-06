// Задани 1 //

const min = (a, b) => {
    if (a >= b) {
        return b;
    } else {
        return a;
    }
}
undefined
console.log(min(8, 4));
console.log(min(6, 6));

// Задани 2 //

let num = prompt('Введите число')
function evenOrodd(a) {
    if (a % 2 == 0) {
        alert('Число четное');
    } else {
        alert('Число нечетное');
    }
}
evenOrodd(num);

// Задание 3.1 //

let a = prompt('введите число')

const square = (num) => console.log(num ** 2);

square(a);

// Задание 3.2 //

let num = prompt('Введите число')

const square = (a) => {
    return a;
}
console.log(num ** 2);

// Задание 4 //

let num = prompt('Введите ваш возраст')

function userAge(a) {
    if (a < null) {
        alert('Вы ввели неправильное значение');
    } else if (a <= 12) {
        alert('Привет, друг');
    } else {
        (a >= 13);
        alert('Добро пожаловать!');
    }
}
userAge(num);

// Задание 5 //

let numberCheckOne = prompt('Введите число')
let numberCheckTwo = prompt('Введите число')
function check(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return console.log('Одно или оба значения не являются числом');
    } else {
        return console.log(a * b);
    }
}

check(numberCheckOne, numberCheckTwo);

// Задание 6 //

let userQuestion = prompt('Введите число')
function check(a) {
    if (a == Number(a)) {
        return console.log(`${a} в кубе равняется ${a ** 3}`);
    } else {
        return console.log('Переданный параметр не является числом');
    }
}
check(userQuestion);
