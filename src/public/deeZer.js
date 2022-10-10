const fs = require('fs');
let url = 'https://api.deezer.com/editorial/0/charts?limit=50';

fetch(url)
    .then(response => response.json())
    .then(data => JSON.stringify(data, null, 4))
    .then(data => fs.writeFileSync('data.json', data));