// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов
    // разделённых пробелом(параметр string) и возвращает самое длинное слово в этой строке.

function findLongestWord(string) {
  // Change code below this line
    const array = string.split(" ");
    let longestWord = array[0];

    for (let i = 1; i < array.length; i += 1) {
        if (array[i].length > longestWord.length) {
            longestWord = array[i];
        }
    }

    return longestWord;
  // Change code above this line
}