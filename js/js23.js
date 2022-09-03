// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает
    // новый массив, в котором будут только те элементы массива numbers,
    // которые больше чем значение параметра value(число).

function filterArray(numbers, value) {
   // Change code below this line
    const newArray = [];

    for (let element of numbers) {
        if (element > value) {
            newArray.push(element);
        }
    }

    return newArray;
  // Change code above this line
}