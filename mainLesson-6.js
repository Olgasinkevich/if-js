/*
const word = prompt('Enter a word');

const reverse =word.split('').reverse().join('');
alert(`Is this word palindrome? ${word === reverse ? 'Yes' : 'No'}`);
*/
const checkPalindrome = (str) => str === str.split('').reverse().join('');
alert(checkPalindrome('word'));

const getСalendarMonth = (daysInMonth, daysInWeek, dayOfWeek) => {
  const daysWithOutTail = daysInMonth + dayOfWeek;
  // общее количество дней в массиве с учетом только предыдущ месяца
  const iterations = daysWithOutTail + (daysInWeek - (daysWithOutTail % daysInWeek));
  // общее кол дней в массиве с учетом предыдущ и след месяца
  let currentDay = daysInMonth - (dayOfWeek - 1);
  // т к отсчет элементов в массиве начинается с 0
  let subArrayIndex = 0;
  const result = [[]];
  for (let i = 1; i <= iterations; i++) {
    if (currentDay > daysInMonth) {
      currentDay = 1;
    }
    if (result[subArrayIndex].length === daysInWeek) {
      subArrayIndex++;
      result[subArrayIndex] = [];
    }
    result[subArrayIndex].push(currentDay);
    currentDay++;
  }
  return result;
};

console.log(getСalendarMonth(30, 7, 4));
