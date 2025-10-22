let userNum = String(prompt('Введите пожалуйста число'));
let reverse = '';

for (let i = userNum.length - 1; i >= 0; i--) {
    reverse += userNum[i];
}

alert(reverse);
