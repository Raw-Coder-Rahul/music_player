let volumeSlider = document.getElementById('volumeControl');
let song = document.getElementById("song");
let volumeIcon = document.getElementById("volume");
let isMuted = false; // Track mute state

// Set initial volume
volumeSlider.value = 50; // Default to 50%
song.volume = volumeSlider.value / 100; // Set initial volume level

// Volume slider event listener
volumeSlider.addEventListener('input', () => {
    song.volume = volumeSlider.value / 100;
    document.getElementById('volumeLabel').textContent = `${volumeSlider.value}%`;
});

// Toggle mute functionality
function toggleMute() {
    if (isMuted) {
        song.volume = volumeSlider.value / 100; // Restore previous volume
        volumeIcon.classList.remove("fa-volume-xmark"); // Change to volume icon
        volumeIcon.classList.add("fa-volume-high");
        isMuted = false;
    } else {
        volumeSlider.value = 0; // Mute the song
        song.volume = 0;
        volumeIcon.classList.remove("fa-volume-high"); // Change to mute icon
        volumeIcon.classList.add("fa-volume-xmark");
        isMuted = true;
    }
}
