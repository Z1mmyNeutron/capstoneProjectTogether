

window.onload = function(){
	let input = document.getElementById('search-input-dee');
	let dataTag = document.getElementById('data-holder-dee');
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4c187f9309msha2277d1a56df93fp1c9f85jsn2b8dafccf3ff',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };



let dataHolder = [];
document.getElementById('search-dee').addEventListener('click', (e) => { 
    e.preventDefault();

    let url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${input.value}`;

    DZ.api(`/search/artist/?q=${input.value}`, function(response){
        console.log("Name of user id 5", response)
    });
})
}
