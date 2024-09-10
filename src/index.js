const video = document.getElementById('background-video').playbackRate = 0.5; ;

video.addEventListener('timeupdate', () => {
    if (video.currentTime >= video.duration - 0.5) {
        video.currentTime = 0;
        video.play();
    }
});

