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
        return ('Одно или оба значения не являются числом');
    } else {
        return (a * b);
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

// Задание 7 //

const circle1 = {
    radius: 7,
    getArea() {
        return (`Площадь круга через радиус равна ${3.14 * circle1.radius ** 2}`)
    }
}
console.log(circle1.getArea());

const circle2 = {
    radius: 8,
    getPerimeter() {
        return (`периметр окружности ${2 * 3.14 * circle2.radius}`)
    }
}
console.log(circle2.getPerimeter());

// Задание 8 //

let userInput = prompt('Введите число')

function seasons(Number) {
    if (Number == 12 || Number <= 2) {
        alert('Зима');
    } else if (Number == 3 || Number <= 5) {
        alert('Весна');
    } else if (Number == 6 || Number <= 8) {
        alert('Лето');
    } else if (Number == 9 || Number <= 11) {
        alert('Осень');
    } else {
        alert('Вы ввели неверные данные')
    }
}
seasons(userInput);
