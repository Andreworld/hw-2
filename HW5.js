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