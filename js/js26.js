// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (let i of order) {
    total += i;
  }

  // Change code above this line
  return total;
}