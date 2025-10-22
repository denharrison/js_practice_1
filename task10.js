let userPassword = prompt()

const containsSpecialChars = (str) => {
  const specialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
  return specialChars.test(str);
}


if (userPassword.length < 6 && userPassword.length > 20) {
    alert('Пароль слабый')
} else if (userPassword !== /\\d/.test(userPassword)) {
    alert('Пароль слабый')
} else if (userPassword !== userPassword.toLowerCase()) { 
    alert('Пароль слабый')
} else if (containsSpecialChars(userPassword) !== true) {
    alert('Пароль слабый')
} else {
    alert('Пароль сильный')
}

