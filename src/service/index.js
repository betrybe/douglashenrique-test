const URL_BASE = 'https://economia.awesomeapi.com.br/json/all';

const getCurrency = async () => (
  fetch(URL_BASE)
    .then((response) => response.json())
    .then((result) => result)
);

export default getCurrency;
