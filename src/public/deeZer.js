

window.onload = function(){
	let input = document.getElementById('search-input-dee');
	let dataTag = document.getElementById('data-holder-dee');



let dataHolder = [];
document.getElementById('search-dee').addEventListener('click', (e) => { 
    e.preventDefault();

    function search(term){
        input = term;
        DZ.api('/search?q=' + input, function(response){
            then(response => response.json())
            .then(data => { dataHolder.push(data)
            let x = JSON.stringify(data, null, 4)
            dataTag.innerHTML = x  
            })
            .catch(err => console.error(err))
            console.log("DataHolder", dataHolder)
            console.log(response.data);
        });
    }
})
}
