let computerValue = Math.round(Math.random() * 50);

for (let i = 0; i !== 7; i++) {
    let userInput = +prompt('Попробуйте угадать случайное число от 1 до 50');

    if (userInput === computerValue) {
        alert(`Поздравляю вы отгадали число ! Загаданное число: ${computerValue}`);
        break;
    } else if (userInput > computerValue) {
        alert('Загаданное число меньше');
        continue;
    } else if (userInput < computerValue) {
        alert('Загаданное число больше');
        continue;
    } else {
        alert('Неккоретный ввод данных');
    }
}
