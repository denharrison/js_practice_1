let userNum =  prompt("Введите пожалуйста число")
let separator = prompt("Введите разделитель. Например: '_'");
let userArray = userNum.split('');
let newArray = userArray.join(separator);

alert(`Результат: ${newArray}`)