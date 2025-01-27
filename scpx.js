// let currentSongIndex = -1; // Track the currently playing song
// let audioElement = new Audio(Songs[0].filePath); // Default audio element
// let myProgressBar = document.querySelector(".progressBar");
// myProgressBar.value = 0;
// let masterPlay = document.querySelector(".masterPlay");
// let duration = document.querySelector(".duration");
// let songList = Array.from(document.querySelectorAll(".songList .songCard"));
// let playButtons = document.querySelectorAll(".songPlay");

// // Initialize Songs in the DOM
// if (songList.length > 0) {
//   songList.forEach((element, i) => {
//     let coverImage = element.querySelector(".cover");
//     if (coverImage) {
//       coverImage.src = Songs[i].coverPath;
//     }
//     let songName = element.querySelector(".title");
//     let artistName = element.querySelector(".artist-name");
//     if (songName) songName.textContent = Songs[i].songName;
//     if (artistName) artistName.textContent = "Arjan Dhillon";
//   });
// }
// // MasterPlay Button Logic
// // masterPlay.addEventListener("click", () => {
// //   if (currentSongIndex === -1) {
// //     If no song is selected, play the first song
// //     currentSongIndex = 0;
// //     audioElement.src = Songs[0].filePath;
// //     audioElement.play();
// //   } else if (audioElement.paused) {
// //     Resume playing the current song
// //     audioElement.play();
// //   } else {
// //     Pause the current song
// //     audioElement.pause();
// //   }
// //   syncPlayState(); // Sync play/pause buttons
// // });


// // Play/Pause Current Song
// function playSong(index) {
//   if (currentSongIndex !== index) {
//     // Switch to a new song
//     currentSongIndex = index;
//     audioElement.src = Songs[index].filePath;
//     audioElement.currentTime = 0;
//   }
//   audioElement.play();
//   syncUI();
// }

// function pauseSong() {
//   audioElement.pause();
//   syncUI();
// }

// // Reset All Buttons to 'Play' State
// function resetAllButtons() {
//   playButtons.forEach((btn) => {
//     btn.classList.remove("fa-pause");
//     btn.classList.add("fa-play");
//   });
// }

// // Sync MasterPlay and Song Buttons
// function syncUI() {
//   // Sync masterPlay button
//   if (audioElement.paused) {
//     masterPlay.classList.add("fa-circle-play");
//     masterPlay.classList.remove("fa-circle-pause");
//   } else {
//     masterPlay.classList.remove("fa-circle-play");
//     masterPlay.classList.add("fa-circle-pause");
//   }

//   // Sync song card buttons
//   resetAllButtons();
//   if (currentSongIndex !== -1 && !audioElement.paused) {
//     playButtons[currentSongIndex].classList.remove("fa-play");
//     playButtons[currentSongIndex].classList.add("fa-pause");
//   }

//   // Reset progress bar and duration display if paused
//   if (audioElement.paused) {
//     myProgressBar.value = 0;
//     duration.innerHTML = `0:00 / ${formatTime(audioElement.duration || 0)}`;
//   }
// }

// // Format Time Utility
// function formatTime(seconds) {
//   let minutes = Math.floor(seconds / 60);
//   let secs = Math.floor(seconds % 60);
//   return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
// }

// // Event Listeners

// // MasterPlay Button Logic
// masterPlay.addEventListener("click", () => {
//   if (currentSongIndex === -1) {
//     playSong(0); // Default to the first song
//   } else if (audioElement.paused) {
//     audioElement.play();
//   } else {
//     pauseSong();
//   }
// });

// // Song Card Button Logic
// playButtons.forEach((playButton, i) => {
//   playButton.addEventListener("click", () => {
//     if (currentSongIndex === i && !audioElement.paused) {
//       pauseSong();
//     } else {
//       playSong(i);
//     }
//   });
// });

// // Progress Bar Logic
// audioElement.addEventListener("timeupdate", () => {
//   if (!isNaN(audioElement.duration)) {
//     let progress = (audioElement.currentTime / audioElement.duration) * 100;
//     myProgressBar.value = progress;

//     let currentTimeDisplay = formatTime(audioElement.currentTime);
//     let durationDisplay = formatTime(audioElement.duration || 0);
//     duration.innerHTML = `${currentTimeDisplay} / ${durationDisplay}`;
//   }
// });

// myProgressBar.addEventListener("input", () => {
//   let seekTime = (myProgressBar.value / 100) * audioElement.duration;
//   audioElement.currentTime = seekTime;
// });

// audioElement.addEventListener("ended", () => {
//   pauseSong(); // Pause when the song ends
// });


// // function syncPlayState() {
// //   Update masterPlay button state
// //   if (audioElement.paused) {
// //     masterPlay.classList.add("fa-circle-play");
// //     masterPlay.classList.remove("fa-circle-pause");
// //   } else {
// //     masterPlay.classList.remove("fa-circle-play");
// //     masterPlay.classList.add("fa-circle-pause");
// //   }

// //   Sync the currently playing card button
// //   if (currentSongIndex !== -1) {
// //     resetAllButtons(); // Reset all card buttons first
// //     if (!audioElement.paused) {
//       // playButtons[currentSongIndex].classList.remove("fa-play");
//       // playButtons[currentSongIndex].classList.add("fa-pause");
// //     }
// //   }
// // }


// let index = 0;
// let audioElement = new Audio("newsongs/Custom Plates.mp3");
// let myProgressBar = document.querySelector(".progressBar");
// myProgressBar.value = 0;
// let masterPlay = document.querySelector(".masterPlay");
// let duration = document.querySelector(".duration");
// let songList = Array.from(document.querySelectorAll(".songList .songCard"));

// let Songs = [
//   {
//     songName: "Custom Plates",
//     filePath: "newsongs/Custom Plates.mp3",
//     coverPath: "covers/Arjan1.jpg",
//   },
//   {
//     songName: "Flat",
//     filePath: "newsongs/Flat.mp3",
//     coverPath: "covers/Arjan1.jpg",
//   },
//   {
//     songName: "Kalli sohni",
//     filePath: "newsongs/Kalli Sohni.mp3",
//     coverPath: "covers/Arjan1.jpg",
//   },
//   {
//     songName: "Mighty mirza",
//     filePath: "newsongs/Mighty Mirza.mp3",
//     coverPath: "covers/Arjan1.jpg",
//   },
//   {
//     songName: "My rulez",
//     filePath: "newsongs/My Rulez.mp3",
//     coverPath: "covers/Arjan1.jpg",
//   },
//   {
//     songName: "Range",
//     filePath: "newsongs/Range.mp3",
//     coverPath: "covers/Arjan1.jpg",
//   },
//   {
//     songName: "Thode vargia",
//     filePath: "newsongs/Thode Vargia.mp3",
//     coverPath: "covers/Arjan1.jpg",
//   },
//   {
//     songName: "Worldwide",
//     filePath: "newsongs/Worldwide.mp3",
//     coverPath: "covers/Arjan1.jpg",
//   },
// ];

// // songList.forEach((element, i) => {
// // console.log(element + " " + i);
// if (songList.length > 0) {
//   songList.forEach((element, i) => {
//     // console.log(element + " " + i);
//     let coverImage = element.querySelector(".cover"); // Select cover image inside each song
//     if (coverImage) {
//       coverImage.src = Songs[i].coverPath; // Update the cover image src with the correct file path
//     }
//     let songName = element.querySelector(".title");
//     let artistName = element.querySelector(".artist-name");
//     if (songName) {
//       songName.textContent = Songs[i].songName;
//     }
//     if (artistName) {
//       artistName.textContent = "Arjan Dhillon"; // Adjust as needed
//     }
//   });
// }
// // });

// // Play/Pause Handler
// masterPlay.addEventListener("click", () => {
//   if (audioElement.paused || audioElement.currentTime <= 0) {
//     audioElement.play();
//     masterPlay.classList.remove("fa-circle-play");
//     masterPlay.classList.add("fa-circle-pause");
//   } else {
//     audioElement.pause();
//     masterPlay.classList.remove("fa-circle-pause");
//     masterPlay.classList.add("fa-circle-play");
//   }
// });

// let isDragging = false; // Track if the slider is being dragged

// // Event Listener: Time Update (Progress Bar)
// audioElement.addEventListener("timeupdate", () => {
//   if (!isDragging && !isNaN(audioElement.duration)) {
//     let progress = (audioElement.currentTime / audioElement.duration) * 100;
//     myProgressBar.value = progress; // Update slider position
//     let currentTimeDisplay = formatTime(audioElement.currentTime);
//     let durationDisplay = formatTime(audioElement.duration || 0);
//     duration.innerHTML = `${currentTimeDisplay} / ${durationDisplay}`;
//   }
// });

// // Update Slider While Dragging
// myProgressBar.addEventListener("input", () => {
//   isDragging = true; // Disable automatic updates
//   let seekTime = (myProgressBar.value / 100) * audioElement.duration;
//   let currentTimeDisplay = formatTime(seekTime);
//   let durationDisplay = formatTime(audioElement.duration || 0);
//   duration.innerHTML = `${currentTimeDisplay} / ${durationDisplay}`; // Show live position while dragging
// });

// // Set Audio Time on Release
// myProgressBar.addEventListener("change", () => {
//   let seekTime = (myProgressBar.value / 100) * audioElement.duration;
//   audioElement.currentTime = seekTime; // Set new time
//   isDragging = false; // Re-enable automatic updates
// });

// // Format Time Utility
// function formatTime(seconds) {
//   let minutes = Math.floor(seconds / 60);
//   let secs = Math.floor(seconds % 60);
//   return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
// }

// // Initialize Duration on Load
// audioElement.addEventListener("loadedmetadata", () => {
//   let durationDisplay = formatTime(audioElement.duration || 0);
//   duration.innerHTML = `0:00 / ${durationDisplay}`; // Initialize with 0:00
// });

// let playButtons = document.querySelectorAll(".songPlay");

// // playButtons.forEach((playButton, i) => {
// //   playButton.addEventListener("click", () => {
// // Update the audio source
// //     audioElement.src = Songs[i].filePath;

// // Play the audio
// //     audioElement.play();

// // Update bottom player button to 'pause'
// //     masterPlay.classList.remove("fa-circle-play");
// //     masterPlay.classList.add("fa-circle-pause");

// // Reset all other card buttons to 'play'
// //     playButtons.forEach((btn) => {
// // btn.classList.remove("fa-pause");
// // btn.classList.add("fa-play");
// //     });

// // Set the clicked button to 'pause'
// //     playButton.classList.remove("fa-play");
// //     playButton.classList.add("fa-pause");
// //   });
// // });

// let currentSongIndex = -1; // Track the currently playing song

// // Card Button Logic
// playButtons.forEach((playButton, i) => {
//   playButton.addEventListener("click", () => {
//     if (currentSongIndex === i) {
//       // If the same song is clicked
//       if (audioElement.paused) {
//         audioElement.play(); // Resume playback
//       } else {
//         audioElement.pause(); // Pause playback
//       }
//       syncPlayState(); // Sync play/pause buttons
//     } else {
//       // A different song is clicked
//       currentSongIndex = i;

//       // Pause current audio and reset buttons
//       audioElement.pause();
//       audioElement.currentTime = 0;
//       resetAllButtons();

//       // Update audio source and play new song
//       audioElement.src = Songs[i].filePath;
//       audioElement.play();
//       syncPlayState(); // Sync play/pause buttons
//     }
//   });
// });

// // MasterPlay Button Logic
// masterPlay.addEventListener("click", () => {
//   if (currentSongIndex === -1) {
//     // If no song is selected, play the first song
//     currentSongIndex = 0;
//     audioElement.src = Songs[0].filePath;
//     audioElement.play();
//   } else if (audioElement.paused) {
//     // Resume playing the current song
//     audioElement.play();
//   } else {
//     // Pause the current song
//     audioElement.pause();
//   }
//   syncPlayState(); // Sync play/pause buttons
// });

// // Utility Functions

// function resetAllButtons() {
//   // Reset all card buttons to 'play'
//   playButtons.forEach((btn) => {
//     btn.classList.remove("fa-pause");
//     btn.classList.add("fa-play");
//   });
// }

// function syncPlayState() {
//   // Update masterPlay button state
//   if (audioElement.paused) {
//     masterPlay.classList.add("fa-circle-play");
//     masterPlay.classList.remove("fa-circle-pause");
//   } else {
//     masterPlay.classList.remove("fa-circle-play");
//     masterPlay.classList.add("fa-circle-pause");
//   }

//   // Sync the currently playing card button
//   if (currentSongIndex !== -1) {
//     resetAllButtons(); // Reset all card buttons first
//     if (!audioElement.paused) {
//       playButtons[currentSongIndex].classList.remove("fa-play");
//       playButtons[currentSongIndex].classList.add("fa-pause");
//     }
//   }
// }



// playButtons.forEach((playButton, i) => {
//   playButton.addEventListener("click", () => {
    // Update the audio source
//     audioElement.src = Songs[i].filePath;

    // Play the audio
//     audioElement.play();

    // Update bottom player button to 'pause'
//     masterPlay.classList.remove("fa-circle-play");
//     masterPlay.classList.add("fa-circle-pause");

    // Reset all other card buttons to 'play'
//     playButtons.forEach((btn) => {
      // btn.classList.remove("fa-pause");
      // btn.classList.add("fa-play");
//     });

// Set the clicked button to 'pause'
//     playButton.classList.remove("fa-play");
//     playButton.classList.add("fa-pause");
//   });
// });

// Play/Pause Handler
// masterPlay.addEventListener("click", () => {
//   if (audioElement.paused || audioElement.currentTime <= 0) {
//     audioElement.play();
//     masterPlay.classList.remove("fa-circle-play");
//     masterPlay.classList.add("fa-circle-pause");
//   } else {
//     audioElement.pause();
//     masterPlay.classList.remove("fa-circle-pause");
//     masterPlay.classList.add("fa-circle-play");
//   }
// });