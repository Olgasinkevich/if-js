//1
const PATH = 'https://fe-student-api.herokuapp.com/api/file';
const formEl = document.getElementById('form');

formEl.addEventListener('submit',
  async (event) => {
    console.log((new FormData(formEl)).get('file'));
    event.preventDefault();
  /*
    const fetchOptions = {
      method: 'POST',
      body: new FormData(formEl),
      type: 'multipart/form-data',
    };
    await fetch(PATH, fetchOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error.message));
  });
*/
//2
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

    //3
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






//15
const IMAGES_PER_SCREEN = 4;
const PATH = 'https://fe-student-api.herokuapp.com/api/hotels/popular';
const hotelsEl = document.getElementById('hotels'); // записала элемент с указ id
const random = (maxIndex) => Math.floor(Math.random() * maxIndex);// функ кот получ рандомн знач















// Lesson-5
//seach hotels

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

const string = prompt('Введите текст для поиска');
//3
const search = (str, arr) => {
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
  });
  /*  return arrTrue.reduce((acc, item)=>{
     return acc + 'country: ' + item.country + ' city: ' + item.city + ' hotel: ' + item.hotel;
    }, '') */
};

/* console.log (search(string, data)); */
search(string, data);

