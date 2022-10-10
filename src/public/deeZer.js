const fs = require('fs');

window.onload = function(){
	let input = document.getElementById('search-input');
	let dataTag = document.getElementById('data-holder');
let url = `https://api.deezer.com/search?q=${input.value}`;


let dataHolder = [];
document.getElementById('search').addEventListener('click', (e) => { 
    e.preventDefault();
fetch(url)
    .then(response => response.json())
    .then(data => {
        dataHolder.push(data)
        let x = JSON.stringify(data, null, 4)
        dataTag.innerHTML = x
    })
})
}
console.log("resolve merge conflict test")