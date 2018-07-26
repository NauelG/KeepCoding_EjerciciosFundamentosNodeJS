'use strict';

const axios = require('axios');

const url = 'http://swapi.co/pi/planets/1/';

(async() => {

    const response = await axios.get(url);
    console.log(response.data);

})().catch(err => console.error(err));