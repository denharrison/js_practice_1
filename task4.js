let userQuestion1 = String(prompt("Столица Франции?"));
let userQuestion2 = +prompt("2 + 2 ?")
let userQuestion3 = String(prompt("Цвет неба ?"))
let result = 0; 

for (let i = 0; i < 1; i++) {
    
    if (userQuestion1 === "Париж") {
        result++
    } 
    if (userQuestion2 === 4) {
        result++
    } 
    if (userQuestion3 === "Синий") {
        result++
    }
    
}

alert(`Вы набрали ${result} из 3"`);

