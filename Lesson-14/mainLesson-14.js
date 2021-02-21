const PATH = 'https://fe-student-api.herokuapp.com/api/file';
const formEl = document.getElementById('form');

formEl.addEventListener('submit',
  async (event) => {
    console.log((new FormData(formEl)).get('file'));
    event.preventDefault();
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
