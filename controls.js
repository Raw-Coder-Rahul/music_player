let progress = document.getElementById("progress");
let volumeSlider = document.getElementById('volumeControl');
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let currentSongIndex = 0; 
let currentPlaylistName = 'anger'; // Default playlist
song.volume = 0.5; 

// Volume control
volumeSlider.addEventListener('input', () => {
    song.volume = volumeSlider.value / 100;
});

// Toggle dropdown for playlists
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Load a specific playlist
function loadPlaylist(playlistName) {
    const playlist = playlists[playlistName];
    currentPlaylistName = playlistName; 
    currentSongIndex = 0; 
    loadSong(currentSongIndex); 
}

// Load the current song
function loadSong(index) {
    const selectedSong = playlists[currentPlaylistName].songs[index];
    const randomImageIndex = Math.floor(Math.random() * playlists[currentPlaylistName].images.length);
    const randomImage = playlists[currentPlaylistName].images[randomImageIndex];

    const [title, author] = selectedSong.name.split(' - ');
    
    document.querySelector('.song-img').src = randomImage;  
    document.querySelector('h1').textContent = title;  
    document.querySelector('p').textContent = author;  
    
    song.src = selectedSong.file;  
    song.play();  
}

// Play/Pause functionality
function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

// Next/Previous song functionality
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlists[currentPlaylistName].songs.length; 
    loadSong(currentSongIndex);
}

function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + playlists[currentPlaylistName].songs.length) % playlists[currentPlaylistName].songs.length; 
    loadSong(currentSongIndex);
}

// Update time display and progress bar
song.addEventListener('timeupdate', () => {
    let progressPosition = (song.currentTime / song.duration) * 100;
    progress.value = progressPosition;
    document.getElementById('current-time').textContent = formatTime(song.currentTime);
    document.getElementById('total-time').textContent = formatTime(song.duration);
});

// Format time as mm:ss
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secondsPart = Math.floor(seconds % 60);
    return `${minutes}:${secondsPart < 10 ? '0' : ''}${secondsPart}`;
}

// Adjust progress bar and play based on it
progress.onchange = function () {
    song.currentTime = (progress.value / 100) * song.duration; // Update current time based on progress value
};

// Toggle dark/light mode
let themeToggle = document.getElementById('theme-toggle');
let body = document.body;

themeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
});

// Initial load of the anger playlist
loadPlaylist('anger');
