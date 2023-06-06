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

