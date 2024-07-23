let songs = [
  { title: 'Song 1', artist: 'Artist A', duration: 220, genre: 'R&B' },
  { title: 'Song 2', artist: 'Artist B', duration: 200, genre: 'Jazz' },
  { title: 'Song 3', artist: 'Artist C', duration: 198, genre: 'Pop' },
  { title: 'Song 4', artist: 'Artist D', duration: 100, genre: 'Country' },

];

function getByGenre(songs, genre) {
  return songs.filter(song => song.genre === genre);
}

function currentSong(song) {
  console.log(`The current song is : ${song.title} by ${song.artist}`);
}

let countrySongs = getByGenre(songs, 'Country');
console.log("Country songs:");
rockSongs.forEach(displaySongInfo);
