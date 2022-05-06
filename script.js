const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');
const url = 'https://itunes.apple.com/search?';


function createAudioElement(url) {
  const audio = document.createElement('audio');
  audio.src = url;
  audio.controls = true;
  searchResults.appendChild(audio);
}

searchButton.addEventListener('click', () => {
  console.log(url + `term=${searchInput.value}`);

  // createAudioElement();
});