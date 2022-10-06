//Linked to Music.html page


//let userAccessToken = ;
//let beats = ;
fetch("https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${userAccessToken}`
  }
})
.then(response => response.json())
.then(({beats}) => {
  
    beats.forEach((beat, index) => {
    console.log(`Beat ${index} starts at ${beat.start}`);
  })
})



//stringify the data and print it to html