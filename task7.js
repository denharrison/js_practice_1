let userInput = String(prompt('Введите пожалуйста число'))
let arrayNumber = userInput.split('').map(Number)
let sum = 0

for (let i = 0; i < arrayNumber.length; i++) {
    
    sum += arrayNumber[i]
    
}

alert(`Итог подсчета суммы цифр числа: ${sum}`)