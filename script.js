function setupPlayButton(buttonClass, songClass) {
    const playButton = document.querySelector(buttonClass);
    const song = document.querySelector(songClass);
    let isPaused = true;

    playButton.addEventListener('click', () => {
        if (isPaused) {
            song.play();
            playButton.innerText = 'Pause';
        } else {
            song.pause();
            playButton.innerText = 'Play Now';
        }
        isPaused = !isPaused;
    });
}

// Setup buttons
setupPlayButton('.firstButton', '.firstSong');
setupPlayButton('.secondButton', '.secondSong');
setupPlayButton('.thirdButton', '.thirdSong');
setupPlayButton('.fourthButton', '.fourthSong');
setupPlayButton('.fifthButton', '.fifthSong');
setupPlayButton ('.sixthButton', '.sixthSong');
setupPlayButton ('.seventhButton', '.seventhSong');
setupPlayButton ('.eighthButton', '.eighthSong');
setupPlayButton ('.ninthButton', '.ninthSong');
setupPlayButton('.tenthButton', '.tenthSong');
setupPlayButton('.eleventhButton', '.eleventhSong');
setupPlayButton('.twelvethButton', '.twelvethSong');
setupPlayButton('.thirteenthButton', '.thirteenthSong');
setupPlayButton('.fourteenthButton', '.fourteenthSong');
setupPlayButton('.fifteenthButton', '.fifteenthSong');
setupPlayButton('.sixteenthButton', '.sixteenthSong');
setupPlayButton('.seventeenthButton', '.seventeenthSong');
setupPlayButton('.eighteenthButton', '.eighteenthSong');
setupPlayButton('.album1Button', '.album1');



