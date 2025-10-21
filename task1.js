const userNumber = +prompt("Введите число от 1 до 100")

const FizzBuzz = (a) => {

if ( a % 3 === 0 ) {
    alert("Fizz");
} else if ( a % 5 === 0 ) {
    alert("Buzz");
} else if (a % 3 === 0 && a % 5 === 0) {
    alert("FizzBuzz");
} else {
    alert("Ничего");
}


}

FizzBuzz(userNumber)