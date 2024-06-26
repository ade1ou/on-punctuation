let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : 'commute/aha.jpeg',
        name : 'Take On Me',
        artist : 'a-ha',
        music : 'Take On Me.mp3'
    },
    {
        img : 'commute/despecha.png',
        name : 'Despechá',
        artist : 'Rosalía',
        music : 'DESPECHÁ.mp3'
    },
    {
        img : 'commute/frankie.jpeg',
        name : 'Cant Take My Eyes off You',
        artist : 'Frankie Valli',
        music : 'Frankie Valli.mp3'
    },
    {
        img : 'commute/lala.png',
        name : 'La La La',
        artist : 'Naughty Boy',
        music : 'Naughty Boy.mp3'
    },
    {
        img : 'commute/saveyourtears.jpeg',
        name : 'Save Your Tears',
        artist : 'The Weeknd',
        music : 'The Weeknd.mp3'
    },
    {
        img : 'commute/sucker.jpeg',
        name : 'Sucker',
        artist : 'Jonas Brothers',
        music : 'Sucker.mp3'
    },
    {
        img : 'commute/unforgettable.jpeg',
        name : 'Unforgettable',
        artist : 'French Montana',
        music : 'Unforgettable.mp3'
    },
    {
        img : 'commute/worries.jpeg',
        name : 'Aint Worried',
        artist : 'OneRepublic',
        music : 'Worried .mp3'
    },
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;

    curr_track.addEventListener('loadedmetadata', function() {
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    });

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
}


function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
    updateTimer = setInterval(setUpdate, 1000);
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}

function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}


// Set the duration in seconds
const durationInSeconds = 1630;

// Calculate the width of the progress bar in percentage
const progressBarWidth = 100;

// Get the progress bar and countdown timer elements
const progressBar = document.getElementById('progress-bar');
const countdownTimer = document.getElementById('countdown-timer');


// Update the width of the progress bar and countdown timer based on the current time
function updateProgressBarAndTimer(currentTime) {
  const percentage = (currentTime / durationInSeconds) * progressBarWidth;
  progressBar.style.width = percentage + '%';

  const remainingSeconds = durationInSeconds - currentTime;
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  countdownTimer.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}


let currentTime = 0;
const interval = setInterval(() => {
  updateProgressBarAndTimer(currentTime);
  currentTime++;
  if (currentTime > durationInSeconds) {
    clearInterval(interval);
  }
}, 1000); 
