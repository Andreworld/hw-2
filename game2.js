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

