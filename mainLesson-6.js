/*
const word = prompt('Enter a word');
/*
const reverse =word.split('').reverse().join('');
alert(`Is this word palindrome? ${word === reverse ? 'Yes' : 'No'}`);
*/
/*
const checkPalindrome = (str) => str === str.split('').reverse().join('');
alert(checkPalindrome(word));
*/

/*
const daysInMonth = 30;
const daysInWeek = 7;
const dayOfWeek = 4;//prompt('Enter day of week')
*/
const getСalendarMonth = (daysInMonth, daysInWeek, dayOfWeek) => {
  const daysWithOutTail = daysInMonth + dayOfWeek; // общее количество дней в массиве с учетом только предыдущ месяца
  const iterations = daysWithOutTail + (daysInWeek - (daysWithOutTail % daysInWeek));
// общее кол дней в массиве с учетом предыдущ и след месяца
  let currentDay = daysInMonth - dayOfWeek;
  const result = [[]];
  for (let i = 1; i <= iterations; i++) {
    currentDay += 1;
    if (currentDay > daysInMonth) {
      startDay = 1;
      return result;
    }
    if (result[subArrayIndex].length === daysInWeek) {
      subArrayIndex += 1;
    }
    result[subArrayIndex].push(currentDay);
  }
};

console.log(getСalendarMonth(30, 7, 4));