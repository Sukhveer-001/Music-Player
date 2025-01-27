let index = 0;
let audioElement = new Audio("newsongs/Custom Plates.mp3");
let myProgressBar = document.querySelector(".progressBar");
myProgressBar.value = 0;
let masterPlay = document.querySelector(".masterPlay");
let duration = document.querySelector(".duration");
let songList = Array.from(document.querySelectorAll(".songList .songCard"));
let forwardButton = document.querySelector(".forward");
let backwardButton = document.querySelector(".backward");

let Songs = [
  {
    songName: "Custom Plates",
    filePath: "newsongs/Custom Plates.mp3",
    coverPath: "covers/Arjan1.jpg",
  },
  {
    songName: "Flat",
    filePath: "newsongs/Flat.mp3",
    coverPath: "covers/Arjan1.jpg",
  },
  {
    songName: "Kalli sohni",
    filePath: "newsongs/Kalli Sohni.mp3",
    coverPath: "covers/Arjan1.jpg",
  },
  {
    songName: "Mighty mirza",
    filePath: "newsongs/Mighty Mirza.mp3",
    coverPath: "covers/Arjan1.jpg",
  },
  {
    songName: "My rulez",
    filePath: "newsongs/My Rulez.mp3",
    coverPath: "covers/Arjan1.jpg",
  },
  {
    songName: "Range",
    filePath: "newsongs/Range.mp3",
    coverPath: "covers/Arjan1.jpg",
  },
  {
    songName: "Thode vargia",
    filePath: "newsongs/Thode Vargia.mp3",
    coverPath: "covers/Arjan1.jpg",
  },
  {
    songName: "Worldwide",
    filePath: "newsongs/Worldwide.mp3",
    coverPath: "covers/Arjan1.jpg",
  },
];

// songList.forEach((element, i) => {
// console.log(element + " " + i);
if (songList.length > 0) {
  songList.forEach((element, i) => {
    // console.log(element + " " + i);
    let coverImage = element.querySelector(".cover"); // Select cover image inside each song
    if (coverImage) {
      coverImage.src = Songs[i].coverPath; // Update the cover image src with the correct file path
    }
    let songName = element.querySelector(".title");
    let artistName = element.querySelector(".artist-name");
    if (songName) {
      songName.textContent = Songs[i].songName;
    }
    if (artistName) {
      artistName.textContent = "Arjan Dhillon"; // Adjust as needed
    }
  });
}
// });

masterPlay.replaceWith(masterPlay.cloneNode(true));
masterPlay = document.querySelector(".masterPlay"); // Re-select the new element

let isPlaying = false; // Track the audio playing state
let isDragging = false; // Track if the slider is being dragged

// MasterPlay Button Logic
masterPlay.addEventListener("click", () => {
  if (currentSongIndex === -1) {
    // If no song is selected, play the first song
    currentSongIndex = 0;
    audioElement.src = Songs[0].filePath;
    audioElement.play().then(() => {
      isPlaying = true;
      syncPlayState();
    });
  } else {
    if (audioElement.paused) {
      audioElement.play().then(() => {
        isPlaying = true;
        syncPlayState();
      });
    } else {
      audioElement.pause();
      isPlaying = false;
      syncPlayState();
    }
  }
});

// Event Listener: Time Update (Progress Bar)
audioElement.addEventListener("timeupdate", () => {
  if (!isDragging && !isNaN(audioElement.duration)) {
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = progress; // Update slider position
    let currentTimeDisplay = formatTime(audioElement.currentTime);
    let durationDisplay = formatTime(audioElement.duration || 0);
    duration.innerHTML = `${currentTimeDisplay} / ${durationDisplay}`;
  }
});

// Update Slider While Dragging
myProgressBar.addEventListener("input", () => {
  isDragging = true; // Disable automatic updates
  let seekTime = (myProgressBar.value / 100) * audioElement.duration;
  let currentTimeDisplay = formatTime(seekTime);
  let durationDisplay = formatTime(audioElement.duration || 0);
  duration.innerHTML = `${currentTimeDisplay} / ${durationDisplay}`; // Show live position while dragging
});

// Set Audio Time on Release
myProgressBar.addEventListener("change", () => {
  let seekTime = (myProgressBar.value / 100) * audioElement.duration;
  audioElement.currentTime = seekTime; // Set new time
  isDragging = false; // Re-enable automatic updates
});

// Format Time Utility
function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

// Initialize Duration on Load
audioElement.addEventListener("loadedmetadata", () => {
  let durationDisplay = formatTime(audioElement.duration || 0);
  duration.innerHTML = `0:00 / ${durationDisplay}`; // Initialize with 0:00
});

let playButtons = document.querySelectorAll(".songPlay");

let currentSongIndex = -1; // Track the currently playing song

// Card Button Logic
playButtons.forEach((playButton, i) => {
  playButton.addEventListener("click", () => {
    if (currentSongIndex === i) {
      // If the same song is clicked
      if (audioElement.paused) {
        audioElement.play(); // Resume playback
      } else {
        audioElement.pause(); // Pause playback
      }
      syncPlayState(); // Sync play/pause buttons
    } else {
      // A different song is clicked
      currentSongIndex = i;

      // Pause current audio and reset buttons
      audioElement.pause();
      audioElement.currentTime = 0;
      resetAllButtons();

      // Update audio source and play new song
      audioElement.src = Songs[i].filePath;
      audioElement.play();
      syncPlayState(); // Sync play/pause buttons
    }
  });
});

// Utility Functions

function resetAllButtons() {
  //   Reset all card buttons to 'play'
  playButtons.forEach((btn) => {
    btn.classList.remove("fa-pause");
    btn.classList.add("fa-play");
  });
}

// Update syncPlayState function
function syncPlayState() {
  if (audioElement.paused) {
    masterPlay.classList.add("fa-circle-play");
    masterPlay.classList.remove("fa-circle-pause");
  } else {
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  }

  // Sync card buttons
  resetAllButtons();
  if (!audioElement.paused && currentSongIndex !== -1) {
    playButtons[currentSongIndex].classList.remove("fa-play");
    playButtons[currentSongIndex].classList.add("fa-pause");
  }
}

// Add audio event listeners
audioElement.addEventListener("play", () => {
  isPlaying = true;
  syncPlayState();
});

audioElement.addEventListener("pause", () => {
  isPlaying = false;
  syncPlayState();
});

songList.forEach((element, i) => {
  const audioTemp = new Audio(Songs[i].filePath); // Create a temporary Audio object
  const durationElement = element.querySelector(".songDuration"); // Select the duration span in the song card

  // Load the audio file to get metadata
  audioTemp.addEventListener("loadedmetadata", () => {
    const totalDuration = formatTime(audioTemp.duration); // Format the duration
    if (durationElement) {
      durationElement.textContent = totalDuration; // Update the duration in the song card
    }
  });
});

// Event Listener: Next Button
forwardButton.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % Songs.length; // Loop back to the first song if at the end
  playSongAtIndex(currentSongIndex);
});

// Event Listener: Previous Button
backwardButton.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + Songs.length) % Songs.length; // Loop back to the last song if at the beginning
  playSongAtIndex(currentSongIndex);
});

// Play Song at Specific Index
function playSongAtIndex(index) {
  // Pause current audio and reset buttons
  audioElement.pause();
  audioElement.currentTime = 0;
  resetAllButtons();

  // Update the audio source to the new song
  audioElement.src = Songs[index].filePath;
  audioElement.play();

  // Update play state and sync buttons
  syncPlayState();
}
