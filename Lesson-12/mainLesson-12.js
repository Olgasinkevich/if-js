const hotelsEl = document.getElementById('hotels');
const random = (array) => Math.floor(Math.random() * array.length);

const createRandomArray = (array) => {
  const array1 = [];
  let i = 0;
  while (i < 4) {
    array1.push(random(array);
    i++;
  }
  return array1;
};
arrayResult=array.filter((e, i)=>{
  array1.includs(i)
});



const render = (array1) => array1.forEach((item) => {
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
  fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
    .then((response) => response.json())
    .then((data) => {
      sessionStorage.setItem('hotels', JSON.stringify(data));
     const = createRandomArray(data);
      render(array1);
    })
    .catch((error) => alert(error.message));
}

