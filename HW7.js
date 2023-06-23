// задание 1

let str = 'js';
console.log(new String(str).toUpperCase());

// задание 2 ????

const words = ['Кошка', 'Кит', 'Комар', 'Носорог', 'молоко', 'кора'];
const search = 'ко';

words.forEach((str) => {

    if (str.toLowerCase().startsWith(search.toLowerCase())) {
        console.log(str.split());
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

Math.round(Math.random() * 10);

// задание 6

const giveMeRandom = function (n) {
    let arrWithNums = [];
    for (i = 0; i < Math.floor(n / 2); i++) {
        arrWithNums.push(Math.floor(Math.random() * n));
    }
    return arrWithNums;
}
console.log(giveMeRandom(7));

// задание 7

function randomNumbers(a, b) {
    return Math.floor(Math.random(a) * b)
}
console.log(randomNumbers(1, 5));

// задание 8

let currentDate = new Date();
console.log(currentDate);

// задание 9

let currentDate = new Date();
currentDate.setDate(73);
console.log(currentDate);

// задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date();
let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] +
    " " + myDate.getFullYear() + " - это " + days[myDate.getDay()];

let hour = myDate.getHours();
let minute = myDate.getMinutes();
let second = myDate.getSeconds();
if (minute < 10) {
    minute = "0" + minute;
}
if (second < 10) {
    second = "0" + second;
}
console.log("Дата: ", fullDate);
console.log("Время: " + hour + ":" + minute + ":" + second);

// задание 11


function gameFunction() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruits = fruits.sort(() => Math.random() - 0.5);
    alert(` Запомните первый и последний фрукт! ${fruits}`)
    let userAnswerOne = prompt('Введите первое слово')
    let userAnswerTwo = prompt('Введите второе слово')
    if (userAnswerOne.toLowerCase() == fruits[0].toLowerCase() && userAnswerTwo.toLowerCase() == fruits[fruits.length - 1].toLowerCase()) {
        alert('Поздравляем, вы угадали оба элемента')
    } else if (userAnswerOne.toLowerCase() !== fruits[0].toLowerCase() && userAnswerTwo.toLowerCase() == fruits[fruits.length - 1].toLowerCase()) {
        alert('Вы были близки к победе !')
    } else if (userAnswerOne.toLowerCase() == fruits[0].toLowerCase() && userAnswerTwo.toLowerCase() !== fruits[fruits.length - 1].toLowerCase()) {
        alert('Вы были близки к поебеде')
    }
    else {
        alert(' Вы ответили неверно')
    }
}


