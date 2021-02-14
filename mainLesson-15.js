const IMAGES_PER_SCREEN = 4;
const PATH = 'https://fe-student-api.herokuapp.com/api/hotels/popular';

const hotelsEl = document.getElementById('hotels'); // записала элемент с указ id
const random = (maxIndex) => Math.floor(Math.random() * maxIndex);// функ кот получ рандомн знач

const createRandomArray = (maxIndex) => { // создаю рандомн array
  const array1 = [];
  let i = 0;
  while (i < IMAGES_PER_SCREEN) {
    const index = random(maxIndex);
    if (!array1.includes(index)) { // проверка чтобы не было повторов
      array1.push(index);
      i++;
    }
  }
  return array1;
};
const bubbleSort = (filterResultArray) => {
  for (let i = 0; i < filterResultArray.length - 1; i++) {
    for (let j = 0; j < filterResultArray.length - 1 - i; j++) {
      if (filterResultArray[j].name > filterResultArray[j + 1].name) {
        const swap = filterResultArray[j];
        filterResultArray[j] = filterResultArray[j + 1];
        filterResultArray[j + 1] = swap;
      }
    }
  }
  return filterResultArray;
};
const createResultArray = (array) => {
  const indexArray = createRandomArray(array.length);// вызываю функ со знач maxIndex = длина array
  const filterResultArray = array.filter((e, i) => indexArray.includes(i));
  // добавл пузырьковую сортировку
  return bubbleSort(filterResultArray);

  // фильтр array на совпад индексов с индексами, получен в функ рандом и формир новый массив
};

const render = (array) => createResultArray(array)
  .forEach((item) => {
    const el = document.createElement('div');
    el.classList.add('hotel', 'col-3', 'col-3_one', 'col-xs-3');
    el.innerHTML = `
    <div class="col-3 col-3_one col-xs-3">
  <div class="image image_first">
    <img class=image__size_156 src="${item.imageUrl}" alt="${item.name}">
  </div>
  <div class="text_primary text_l text__box">
    ${item.name}
  </div>
  <div class="text_secondary text_l text__box">
   ${item.city}, ${item.country}
  </div>
</div>
`;
    hotelsEl.appendChild(el);// добавл полученные элементы в див с id
  });
const hotels = sessionStorage.getItem('hotels');// получ или исп полученные ранее данные
if (hotels) {
  render(JSON.parse(hotels));
} else {
  fetch(PATH)
    .then((response) => response.json())
    .then((data) => {
      sessionStorage.setItem('hotels', JSON.stringify(data));
      render(data);
    })
    .catch((error) => alert(error.message));
}

const dataSort = arr.map;
