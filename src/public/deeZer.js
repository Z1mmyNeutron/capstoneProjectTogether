

window.onload = function(){
	let input = document.getElementById('search-input-dee');
	let dataTag = document.getElementById('data-holder-dee');


    function search(term){
        DZ.api('/search?q=' + term, function(response){
            console.log(response.data);
        });
    }

let dataHolder = [];
document.getElementById('search-dee').addEventListener('click', (e) => { 
    e.preventDefault();

    DZ.api('/search?q=' + input.value, function(response){
        console.log(response.data);
    });
})
}

