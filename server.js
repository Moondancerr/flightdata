const PORT = 8000
const axios = require("axios").default
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
app.use(cors())

app.get('/flights',(req,res) => {
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/future.json',
    params: {q: 'London', dt: '2022-12-25'},
    headers: {
      'X-RapidAPI-Key': 'bbf7d1b8dbmshaba2dc4d3fa735ep10a6c2jsnfd1a698e56ba',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
})





app.listen(PORT, () => console.log('running on PORT' + PORT) )