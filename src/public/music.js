let songs = [
    {title : "call", path : "./audio/call.mp3"},
    {title : "Homework", path : "Homework.mp3"},
]


let currentSongIndex = 0;


function incrementIndex() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
}

function decrementIndex() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
}