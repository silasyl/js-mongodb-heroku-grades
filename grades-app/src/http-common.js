import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://silas-heroku-backend.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});
