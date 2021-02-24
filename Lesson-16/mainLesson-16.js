// 1
const PATH = 'https://fe-student-api.herokuapp.com/api/hotels';
const formEl = document.getElementById('form');

const search = (string, array) => {
  const re = new RegExp(string, 'i');
  const arrTrue = array.filter((item) => (
    Object.values(item)
      .some((e) => re.test(e))
  ));
  return arrTrue;
};

const createContainer = () => {
  if (!document.getElementById('search')) {
    const container = `
    <section class="section section_bg"
      <div class="container" id="search">
        <h2 class="h2 text_center"> Available hotels </h2>
      </div>
    </section>
`;
    document.querySelector('header')
      .insertAdjacentHTML('afterend', container);
  }
};

const render = (string, array) => {
  search(string, array)
    .forEach((item) => {
      const el = document.createElement('div');
      el.classList.add('row', 'hotel', 'col-3', 'col-3_one', 'col-xs-3');
      el.innerHTML = `
    <div class="col-3 col-xs-3">
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
      const searchEl = document.getElementById('search');
      searchEl.innerHTML = '';
      searchEl.appendChild(el);// добавл полученные элементы в див с id
    });
};

formEl.addEventListener('submit',
  async (event) => {
    event.preventDefault();

    const searchQuery = new FormData(formEl).get('search');

    const hotels = sessionStorage.getItem('hotels');// получ или исп полученные ранее данные
    if (hotels) {
      createContainer();
      render(searchQuery, JSON.parse(hotels));
    } else {
      fetch(PATH)
        .then((response) => response.json())
        .then((data) => {
          sessionStorage.setItem('hotels', JSON.stringify(data));
          createContainer();
          render(searchQuery, data);
        })
        .catch((error) => alert(error.message));
    }
  });

// отсортировать по поиску

/* const search = (str, arr) => {
      const strLow = str.toLowerCase();
      const arrTrue = arr.filter((item) => (
        item.country.toLowerCase()
          .includes(strLow)
        || item.city.toLowerCase()
          .includes(strLow)
        || item.hotel.toLowerCase()
          .includes(strLow)));
      arrTrue.forEach((item) => {
        document.write(
          `Country: ${item.country} City: ${item.city} Hotel: ${item.hotel}`, '<br/>',
        );
      }); */
