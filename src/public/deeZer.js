

window.onload = function(){
	let input = document.getElementById('search-input-dee');
	let dataTag = document.getElementById('data-holder-dee');



let dataHolder = [];
document.getElementById('search-dee').addEventListener('click', (e) => { 
    e.preventDefault();

        DZ.api('/search?q=' + input.value, function(response){
            then(data => { dataHolder.push(data)
                let x = JSON.stringify(data, null, 4)
                dataTag.innerHTML = x
            console.log("DataHolder", response.data);

        });
    })
})
}

