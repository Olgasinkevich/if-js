const getСalendarMonth = (daysInMonth, daysInWeek, dayOfWeek, checkInDate) => {
  if (dayOfWeek >= daysInWeek) {
    throw new Error('Invalid data');// lesson-7
  }
  const daysWithOutTail = daysInMonth + dayOfWeek;
  // общее количество дней в массиве с учетом только предыдущ месяца
  const iterations = daysWithOutTail + (daysInWeek - (daysWithOutTail % daysInWeek));
  // общее кол дней в массиве с учетом предыдущ и след месяца
  let currentDay = daysInMonth - (dayOfWeek - 1);
  // т к отсчет элементов в массиве начинается с 0
  let subArrayIndex = 0;
  const result = [[]];
  let object = { notCurrentMonth: true };
  for (let i = 1; i <= iterations; i++) {
    if (currentDay > daysInMonth) {
      currentDay = 1;
      object = { notCurrentMonth: !object.notCurrentMonth };
    }
    if (result[subArrayIndex].length === daysInWeek) {
      subArrayIndex++;
      result[subArrayIndex] = [];
    }
    result[subArrayIndex].push({
      dayOfMonth: currentDay,
      selectedDate: currentDay === checkInDate,
      ...object,
    });
    currentDay++;
  }
  return result;
};

console.log(getСalendarMonth(30, 7, 4, 5));
