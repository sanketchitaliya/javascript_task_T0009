let playlist = [
  {
    title: "Fire (Official UEFA EURO 2024 Song)",
    artist: "Arjit Singh",
    cover: "media/1.jpg",
    file: "media/1.mp3",
  },
  {
    title: "Peace Of Your Heart",
    artist: "King",
    cover: "media/2.jpg",
    file: "media/2.mp3",
  },
  {
    title: "Pegasus",
    artist: "Badshah",
    cover: "media/3.jpg",
    file: "media/3.mp3",
  },
];

let currentSongIndex = 0;
let musicPlayer = document.getElementById("musicPlayer");
let songTitle = document.getElementById("songTitle");
let songArtist = document.getElementById("songArtist");
let songCover = document.getElementById("songCover");
let playPauseButton = document.getElementById("playPause");
let seekBar = document.getElementById("seekBar");
let playlistItems = document.getElementById("playlistItems");
let newSongTitleInput = document.getElementById("newSongTitle");
let newSongArtistInput = document.getElementById("newSongArtist");
let newCoverInput = document.getElementById("newCoverInput");
let newSongInput = document.getElementById("newSongInput");
let openPopup = document.getElementById("popup");
let closeBtn = document.getElementById("close-btn");

function initializePlayer() {
  loadSong(currentSongIndex);
  updatePlaylist();
}

function loadSong(index) {
  let song = playlist[index];
  musicPlayer.src = song.file;
  songTitle.textContent = song.title;
  songArtist.textContent = song.artist;
  songCover.src = song.cover;
}

function togglePlayPause() {
  if (musicPlayer.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

function playSong() {
  musicPlayer.play();
  playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
}

function pauseSong() {
  musicPlayer.pause();
  playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % playlist.length;
  loadSong(currentSongIndex);
  playSong();
}

function previousSong() {
  currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
  loadSong(currentSongIndex);
  playSong();
}

function updatePlaylist() {
  playlistItems.innerHTML = "";
  playlist.forEach((song, index) => {
    let li = document.createElement("li");
    li.classList.add("musiclist");
    li.textContent = `${song.title} - ${song.artist}`;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteSong(index);
    });

    li.appendChild(deleteButton);

    li.addEventListener("click", () => {
      currentSongIndex = index;
      loadSong(currentSongIndex);
      playSong();
    });

    playlistItems.appendChild(li);
  });
}

function popup() {
  openPopup.style.display = "block";
}

function addSong() {
  let title = newSongTitleInput.value.trim();
  let artist = newSongArtistInput.value.trim();
  let cover = newCoverInput.value.trim();
  let file = newSongInput.value.trim();

  if (title && artist && cover && file) {
    let newSong = {
      title: title,
      artist: artist,
      cover: "media/6.jpg",
      file: file,
    };
    playlist.push(newSong);
    openPopup.style.display = "none";
    newSongTitleInput.value = "";
    newSongArtistInput.value = "";
    newCoverInput.value = "";
    newSongInput.value = "";
    updatePlaylist();
  } else {
    alert("Please enter all fields");
  }
}

function deleteSong(index) {
  playlist.splice(index, 1);
  updatePlaylist();
  if (index === currentSongIndex) {
    pauseSong();
    currentSongIndex = 0;
    loadSong(currentSongIndex);
  } else if (index < currentSongIndex) {
    currentSongIndex--;
  }
}

seekBar.oninput = function () {
  musicPlayer.currentTime = this.value;
};

musicPlayer.ontimeupdate = function () {
  seekBar.value = musicPlayer.currentTime;
};

initializePlayer();
