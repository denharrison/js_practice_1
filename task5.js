let userSymbol = prompt("Введите один символ")

if (userSymbol > 0 && userSymbol < 9) {
  alert("Цифра");
} else if (userSymbol = /^[a-zA-Z]$/.test(userSymbol)) { // Регулярное выражение 
  alert("Буква");
} else {
  alert("Неизвестный символ");
}
