const correctPassword = "1234" 
let userPassword = prompt("Введите пожалуйста пароль")

for (let i = 1; i !== 3; i++) {

  if (userPassword === correctPassword) {
    alert("Доступ разрешён");
    break
  } else {
    alert("Доступ запрещён");
    userPassword = prompt("Введите пожалуйста пароль");
  }

}

