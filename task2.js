const userNum = +prompt("Введите число от 1 до 100")

const FizzBuzz = (a) => {

    for (let i = 0; i <= a; i++) {

        if (i % 3 === 0) {
          console.log("Fizz");
        } else if (i % 5 === 0) {
          console.log("Buzz");
        } else if (i % 3 === 0 && i % 5 === 0) {
          console.log("FizzBuzz");
        } else {
          console.log("Ничего");
        }
    }

}

FizzBuzz(userNum);