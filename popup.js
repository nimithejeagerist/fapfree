// Handles all popup related

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('color-mode').addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        const icon = document.getElementById('mode-icon');
        if (document.body.classList.contains('light-mode')) {
            icon.src = 'brightness-alt-high-fill.svg';
        } else {
            icon.src = 'moon-stars-fill.svg';
        }
    });
});

// Controls
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('main-video');
    var playPauseButton = document.getElementById('play-pause');
    var muteButton = document.getElementById('mute');
    var fullScreenButton = document.getElementById('full-screen');
    var seekBar = document.getElementById('seek-bar');
    var volumeBar = document.getElementById('volume-bar');

    // Play/Pause functionality
    playPauseButton.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playPauseButton.textContent = 'Pause';
        } else {
            video.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    // Mute/Unmute functionality
    muteButton.addEventListener('click', function() {
        video.muted = !video.muted;
        muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
    });

    // Full Screen functionality
    fullScreenButton.addEventListener('click', function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { 
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { 
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { 
            video.msRequestFullscreen();
        }
    });

    // Seek bar functionality
    seekBar.addEventListener('input', function() {
        var time = video.duration * (seekBar.value / 100);
        video.currentTime = time;
    });

    // Update seek bar as video plays
    video.addEventListener('timeupdate', function() {
        var value = (100 / video.duration) * video.currentTime;
        seekBar.value = value;
    });

    // Volume bar functionality
    volumeBar.addEventListener('input', function() {
        video.volume = volumeBar.value;
    });
});

