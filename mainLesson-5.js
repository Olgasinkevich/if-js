// Lesson-5

const date = '2020-11-26';
/*
date = date.split('-');
console.log(date);
date=date.reverse();
date=date.join('.');
console.log(date);
*/
console.log('change format date', date.split('-').reverse().join('.'));

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

const search = (string, array) => {
  const re = new RegExp(string, 'i');
  const arrTrue = array.filter((item) => (
    Object.values(item)
      .some((e) => re.test(e))
  ));
  arrTrue.forEach((item) => {
    document.write(
      `Country: ${item.country} City: ${item.city} Hotel: ${item.hotel}`, '<br/>',
    );
  });
};

const input = document.getElementById('input');
const button = document.getElementById('button');
button.addEventListener('click', () => {
  search(input.value, data);
});
