const songs = [
    {
      title: "Die with a Smile",
      artist: "Lady Gaga, Bruno Mars",
      img: "img/dis-poster/Die-With-A-Smile-English.jpg",
      src: "songs/Die With A Smile - PagalHits.mp3",
    },
    {
      title: "Zaroor",
      artist: "Aparshakti Khurana, Savi Kahlon",
      img: "img/dis-poster/Zaroor-Punjabi.jpg",
      src: "songs/Zaroor Aparshakti Khurana 128 Kbps.mp3",
    },
    {
      title: "Espresso",
      artist: "Sabrina Carpenter",
      img: "img/dis-poster/Espresso-English.jpg",
      src: "songs/Espresso - PagalHits.mp3",
    },
    {
      title: "Ratiyaan",
      artist: "Soham Majumdar, Hansika Pareek, Sagnik Kolay",
      img: "img/dis-poster/Ratiyaan-Hindi.jpg",
      src: "songs/Ratiyaan - PagalMass.mp3",
    },
    {
      title: "Ishq Hai",
      artist: "Anurag Saikia ft. Raj Shekhar",
      img: "img/dis-poster/Mismatched-Season-3.jpg",
      src: "songs/128-Ishq Hai - Mismatched Season 3 128 Kbps.mp3",
    },
    {
      title: "Jhol",
      artist: "Maanu, Annural Khalid",
      img: "img/dis-poster/Jhol-Punjabi.jpg",
      src: "songs/Jhol_Maanu_Annural_Khalid.mp3",
    },
    {
      title: "Ishq",
      artist: "Amir Ameer, Faheem Abdullah, Rauhan Malik",
      img: "img/dis-poster/ishq-lost&found.jpg",
      src: "songs/Ishq - Lost Found - Faheem Abdullah 128KBPS .mp3",
    },
    {
      title: "Finding Her",
      artist: "Kushagra, Saaheal, Bharath",
      img: "img/dis-poster/Finding-Her-Hindi.jpg",
      src: "songs/128-Finding Her - Kushagra 128 Kbps.mp3",
    },
    {
      title: "Selfish",
      artist: "Atif Aslam, Iulia Vantur ft. Arijit Singh",
      img: "img/dis-poster/Selfish-Race-3.jpg",
      src: "songs/Selfish Race 3 128 Kbps.mp3",
    },
    {
      title: "Ranjheya Ve",
      artist: "Zain Zohaib",
      img: "img/dis-poster/Ranjheya-Ve-Punjabi.jpg",
      src: "songs/Ranjheya Ve (PenduJatt.Com.Se).mp3",
    },
  ];
 
  
const displayedSong = document.querySelectorAll(".img-cont");  // it fetch homesc's data-- poster,names..

// for audio buttons:
const poster = document.getElementById("poster");
const titleEl = document.getElementById("songTitle");
const artistEl = document.getElementById("songArtist");
const previousBtn = document.getElementById("prevBtn");
const playPauseBtn = document.getElementById("playPauseBtn");
const nextBtn = document.getElementById("nextBtn");
const audioEl = document.getElementById("audio");
const player = document.querySelectorAll(".playSong")

let currentSong = 0;
let isplaying = false;

// loop for songs
displayedSong.forEach((cont,index) => {
    cont.addEventListener('click', ()=>{
      playsong(index);
    });
});

function playsong(index){
  currentSong = index;

    poster.src = songs[index].img;
    titleEl.innerHTML = songs[index].title;
    artistEl.innerHTML = songs[index].artist;
    audioEl.src = songs[index].src;
    
    if(!isplaying){
      isplaying = true;
      audioEl.play()
      playPauseBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    }

}


playPauseBtn.addEventListener('click',()=>{
  if(isplaying){
    audioEl.pause();
    isplaying = false;
    playPauseBtn.innerHTML = `<i class="fa-solid fa-play"></li>`;
  }
  else{
    audioEl.play()
    isplaying = true;
    playPauseBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  }
})

previousBtn.addEventListener('click',()=>{
  currentSong--;
  if(currentSong<0){
    currentSong = songs.length-1;
  }
  playsong(currentSong);
})

nextBtn.addEventListener('click',()=>{
  currentSong++;
  if(currentSong>= songs.length){
    currentSong = 0;
  }
  playsong(currentSong);
})

audioEl.addEventListener("timeupdate", () => {
  seekBar.value = audioEl.currentTime;
});

seekBar.addEventListener("input", () => {
  audioEl.currentTime = seekBar.value;
});

seekBar.addEventListener("input", () => {
  const percent = seekBar.value;
  percent.style.transform = `translateX(-${percent}%)`;
});


