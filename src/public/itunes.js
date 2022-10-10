window.onload =function(){
    const url = 'https://itunes.apple.com/search?term=summer&country=us&entity=song&limit=25';
    const url2 = 'https://itunes.apple.com/search?country=us&entity=song&limit=25';

    let input = document.getElementById('search-input-itunes');
    let dataTag = document.getElementById('data-holder-itunes');


    document.getElementById('search-itunes-button').addEventListener('click', (e) => { 
        fetch(url)
        .then((res) => {
            console.log(res.status)
            return res.json()
        })
        .then((data) => {
            console.log(data.results);
            const ameriSongs = data.results;
            dataHolder.push(ameriSongs)
            let s = JSON.stringify(dataHolder, null, "\t")
            dataTag.innerHTML = s

        })
        .catch(err => console.error(err));
    })
}