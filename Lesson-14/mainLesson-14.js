const formEl = document.getElementById('form');
const inputEl = formEl.querySelectorAll('input');
const data = {};

formEl.addEventListener ('submit',
  async event => {
  event.preventDefault();
  const fetchOptions = {
    method:'POST';
    body: new FormData(formEl);
    type: 'multipart/form-data';
      }
})
formEl.addEventListener('submit', inputEl.forEach('input'=>{
  data[event.target.name]=event.target.value
}))

