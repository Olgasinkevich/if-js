const IMAGES_PER_SCREEN = 4;
const PATH = 'https://fe-student-api.herokuapp.com/api/hotels/popular';

const hotelsEl = document.getElementById('hotels');
const random = (maxIndex) => Math.floor(Math.random() * maxIndex);

const createRandomArray = (maxIndex) => {
  const array1 = [];
  let i = 0;
  while (i < IMAGES_PER_SCREEN) {
    const index = random(maxIndex);
    if (!array1.includes(index)) {
      array1.push(index);
      i++;
    }
  }
  return array1;
};

const createResultArray = (array) => {
  const indexArray = createRandomArray(array.length);
  return array.filter((e, i) => indexArray.includes(i));
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
    hotelsEl.appendChild(el);
  });
const hotels = sessionStorage.getItem('hotels');
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
