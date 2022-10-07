// import SpotifyWebApi from 'spotify-web-api-node'
// import express from 'express'
// //Linked to Music.html page


// //let userAccessToken = ;
// //let beats = ;



// //stringify the data and print it to html

// const scopes = [
//     'ugc-image-upload',
//     'user-read-playback-state',
//     'user-modify-playback-state',
//     'user-read-currently-playing',
//     'streaming',
//     'app-remote-control',
//     'user-read-email',
//     'user-read-private',
//     'playlist-read-collaborative',
//     'playlist-modify-public',
//     'playlist-read-private',
//     'playlist-modify-private',
//     'user-library-modify',
//     'user-library-read',
//     'user-top-read',
//     'user-read-playback-position',
//     'user-read-recently-played',
//     'user-follow-read',
//     'user-follow-modify'
//   ];
  
// // credentials are optional
// var spotifyApi = new SpotifyWebApi({
//     clientId: 'b2ae2437bd3e43adabca147c7d4c4863',
//     clientSecret: '5a828fc07af749a0a49c2555253a94ce',
//     redirectUri: 'http://localhost:5000/callback'
//   });
  
//   const app = express();
  
//   app.get('/login', (req, res) => {
//     res.redirect(spotifyApi.createAuthorizeURL(scopes));
//   });
  
//   app.get('/callback', (req, res) => {
//     const error = req.query.error;
//     const code = req.query.code;
//     const state = req.query.state;
  
//     if (error) {
//       console.error('Callback Error:', error);
//       res.send(`Callback Error: ${error}`);
//       return;
//     }
  
//     spotifyApi
//       .authorizationCodeGrant(code)
//       .then(data => {
//         const access_token = data.body['access_token'];
//         const refresh_token = data.body['refresh_token'];
//         const expires_in = data.body['expires_in'];
  
//         spotifyApi.setAccessToken(access_token);
//         spotifyApi.setRefreshToken(refresh_token);
  
//         console.log('access_token:', access_token);
//         console.log('refresh_token:', refresh_token);
  
//         console.log(
//           `Sucessfully retreived access token. Expires in ${expires_in} s.`
//         );
//         res.send('Success! You can now close the window.');
  
//         setInterval(async () => {
//           const data = await spotifyApi.refreshAccessToken();
//           const access_token = data.body['access_token'];
  
//           console.log('The access token has been refreshed!');
//           console.log('access_token:', access_token);
//           spotifyApi.setAccessToken(access_token);
//         }, expires_in / 2 * 1000);
//       })
//       .catch(error => {
//         console.error('Error getting Tokens:', error);
//         res.send(`Error getting Tokens: ${error}`);
//       });
//   });
  
//   app.listen(5000, () =>
//     console.log(
//       'HTTP Server up. Now go to http://localhost:5000/login in your browser.'
//     )
//   );


window.onload = function(){
	let input = document.getElementById('search-input-adb');
	let dataTag = document.getElementById('data-holder-adb');

	const options = {
		method: 'GET',
		headers: {
      'X-RapidAPI-Key': '239c4d125dmsh5d5c600b7fcd8d5p19b8afjsnfe440b038826',
      'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
    }
		
	};
	let dataHolder = [];
	document.getElementById('search-adb').addEventListener('click', (e) => { 
		e.preventDefault();
		let endpoint = `https://theaudiodb.p.rapidapi.com/track-top10.php?s=${input.value}`;

		fetch(endpoint, options)
			.then(response => response.json())
			.then(data => {
				console.log(data.artists)	
				dataHolder.push(data)
				let s = JSON.stringify(dataHolder, null, "\t")
				dataTag.innerHTML = s
				
			})
			
	//.then(response => console.log(response))
		.catch(err => console.error(err));
		})

		
			
	console.log("dataHolder", dataHolder)

}

