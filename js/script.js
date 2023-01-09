var video = document.getElementById("video");
var volume = document.getElementById("volume");

volume.addEventListener('click', function () {
    video.muted = !video.muted;
});

volume.addEventListener('click', function () {
  volume.classList.toggle('mute');
});
