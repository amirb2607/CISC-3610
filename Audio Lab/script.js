function playAudio(audioId) {
    var audio = document.getElementById(audioId);
    audio.volume = 0.1;
    audio.play();
}

function stopAudio() {
    var audios = document.getElementsByTagName('audio');
    for (var i = 0; i < audios.length; i++) {
        var audio = audios[i];
        audio.pause();
        audio.currentTime = 0;
    }
}