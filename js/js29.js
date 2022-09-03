// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end.
    // Чётным считается число которое делится на 2 без остатка(10 % 2 === 0).

function getEvenNumbers(start, end) {
   // Change code below this line
    const evenNumbers = [];

    for (let number = start; number <= end; number += 1) {
        if (!(number % 2)) {
            evenNumbers.push(number);
        }
    }

    return evenNumbers;
    // Change code above this line
  }