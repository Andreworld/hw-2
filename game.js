function seasons() {
    let userInput = prompt('Введите число');
    if (userInput == 12 || userInput <= 2 && userInput > 0) {
        alert('Зима');
    } else if (userInput == 3 || userInput <= 5 && userInput > 0) {
        alert('Весна');
    } else if (userInput == 6 || userInput <= 8 && userInput > 0) {
        alert('Лето');
    } else if (userInput == 9 || userInput <= 11 && userInput > 0) {
        alert('Осень');
    } else if (userInput <= 0) {
        alert('Вы ввели неверные данные');
    } else {
        alert('Вы ввели неверные данные');
    }
}


