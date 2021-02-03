const hotelsEl = document.getElementById('hotels');
const render = (array) => array.forEach((item) => {
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

fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
  .then((response) => response.json())
  .then((data) => render(data))
  .catch((error) => alert(error.message));
