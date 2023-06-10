var currentAudio = null;

function playSong(audioId, songName) {
    var audioPlayer = document.getElementById(audioId);
    var statusMessage = document.getElementById("statusMessage");
    var button = document.getElementById(audioId + "-button");

    if (currentAudio && currentAudio !== audioPlayer) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        var currentButton = document.getElementById(currentAudio.id + "-button");
        currentButton.style.backgroundColor = "";
    }

    if (audioPlayer.paused) {
        audioPlayer.play();
        currentAudio = audioPlayer;
        statusMessage.innerText = "Now playing: " + songName;
        button.style.backgroundColor = "red";
    } else {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        currentAudio = null;
        statusMessage.innerText = "Paused";
        button.style.backgroundColor = "";
    }

    audioPlayer.addEventListener("ended", function () {
        statusMessage.innerText = "Done playing: " + songName;
        button.style.backgroundColor = "";
    });
}


document.addEventListener("keydown", function (event) {
    var key = event.key.toLowerCase();

    switch (key) {
        case "q":
            playSong("audio1", "Main 1");
            break;
        case "w":
            playSong("audio2", "Main 2");
            break;
        case "e":
            playSong("audio3", "Main 3");
            break;
        case "a":
            playSong("audio4", "Main 4");
            break;
        case "s":
            playSong("audio5", "Offense Cepat");
            break;
        // case "d":
        //     playSong("audio6", "Offense Cepat 2");
        //     break;
        case "z":
            playSong("audio7", "Menit Terakhir");
            break;
        case "x":
            playSong("audio8", "Point Sound");
            break;
        case "i":
            playSong("audio9", "Panggilan Pemain");
            break;
        case "o":
            playSong("audio10", "Before Jump ball");
            break;
        case "p":
            playSong("audio11", "3 Point");
            break;
        case "k":
            playSong("audio12", "Free throw");
            break;
        case "l":
            playSong("audio13", "15 Quarter");
            break;
        case "b":
            playSong("audio14", "Indonesia Raya");
            break;
        case " ":
            if (currentAudio) {
                event.preventDefault();
                playSong(currentAudio.id, "Song " + currentAudio.id.slice(-1));
            }
            break;
    }
});