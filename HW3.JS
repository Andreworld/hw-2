// Задание 1
let password = 'пароль';
let paswordRequest = prompt('Введите пароль');
if (password === paswordRequest) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}
// Задание 2
let c = prompt ('Введите число');
if (c>0 && c<10) {console.log ('Верно')
 } else {console.log ('Не верно')
 }
 // Задание 3
 let d = prompt('Введите число');
 let c = prompt('Введите число');
 if (d>100 || c>100) {console.log ('Верно')
 } else {console.log ('Не верно')
 }
 // Задание 4
let a = '2';
let b = '3';
alert = (Number (a) + Number (b));
// Задание 5 //
let monthNumber = Number( prompt('введите номер месяца'));
switch (monthNumber) {
    case 1:
        console.log('это первый месяц зимы');
        break;
    case 2:
        console.log('это второй месяц зимы');
        break;
    case 3:
        console.log('это первый месяц весны');
        break
    case 4:
        console.log('это второй месяц весны');
        break;
    case 5:
        console.log('это третий месяц весны');
        break;
    case 6:
        console.log('это первый месяц лета');
        break;
    case 7:
        console.log('это второй месяц лета');
        break;
    case 8:
        console.log('это третий месяц лета');
        break;
    case 9:
        console.log('это первый месяц осени');
        break;
    case 10:
        console.log('это второй месяц осени');
        break;
    case 11:
        console.log('это третий месяц осени');
        break;
    case 12:
        console.log('это первый месяц зимы');
        break;
    default:
        console.log('такого месяца нет');
        break;
}
