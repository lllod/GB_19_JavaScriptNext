const containerEl = document.querySelector('.containerVideo');
const videoEl = document.createElement('video');
videoEl.setAttribute('src', './media/JurassicParkbutwithaCat.mp4');
containerEl.appendChild(videoEl);

const playEl = document.createElement('div');
const pauseEl = document.createElement('div');
const stopEl = document.createElement('div');
const fullscreenEl = document.createElement('div');
playEl.classList.add('play');
pauseEl.classList.add('pause');
stopEl.classList.add('stop');
fullscreenEl.classList.add('fullscreen');

playEl.addEventListener('click', function (e) {
    videoEl.play();
});

pauseEl.addEventListener('click', function (e) {
    videoEl.pause();
});

stopEl.addEventListener('click', function (e) {
    videoEl.pause();
    videoEl.currentTime = 0;
    playRange.value = Math.round((videoEl.currentTime / videoEl.duration) * 100);
});

fullscreenEl.addEventListener('click', function (e) {
    if (!document.fullscreenElement) {
        containerEl.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

const playRange = document.createElement('input');
playRange.setAttribute('type', 'range');
playRange.setAttribute('min', '0');
playRange.setAttribute('max', '100');
playRange.setAttribute('value', '0');
playRange.addEventListener('change', function (e) {
    videoEl.currentTime = (e.target.value / 100) * videoEl.duration;
    playRange.value = Math.round((videoEl.currentTime / videoEl.duration) * 100);
});

videoEl.addEventListener('timeupdate', (e) => {
    playRange.setAttribute('value', Math.round((videoEl.currentTime / videoEl.duration) * 100));
});

const volumeRange = document.createElement('input');
volumeRange.setAttribute('type', 'range');
volumeRange.setAttribute('min', '0');
volumeRange.setAttribute('max', '100');
volumeRange.setAttribute('value', '0');
volumeRange.classList.add('volumeRange');
videoEl.addEventListener('loadeddata', (e) => {
    volumeRange.setAttribute('value', videoEl.volume * 100);
});

volumeRange.addEventListener('change', function (e) {
    videoEl.volume = e.target.value / 100;
});

const controlsEl = document.createElement('div');
controlsEl.classList.add('controls');
const playPause = document.createElement('div');
playPause.classList.add('playPause');

containerEl.appendChild(controlsEl);
controlsEl.appendChild(volumeRange);
controlsEl.appendChild(playRange);
controlsEl.appendChild(playPause);
controlsEl.appendChild(fullscreenEl);
playPause.appendChild(playEl);
playPause.appendChild(pauseEl);
playPause.appendChild(stopEl);
