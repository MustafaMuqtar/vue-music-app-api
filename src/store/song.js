import { reactive, ref } from "vue";
import axios from "axios";

export const songPlay = reactive({
  title: "",
  id: "",
  coverImageURl: "",
  audioPlayerURL: "",
  contents: [],
  creatorName: [],
  isPlaying: false,
  isMute: false,
  loadingData: false,
  currentSongIndex: 0,
  refAudioPlayer: null,
  isLooping: false,
  isMixing: false,
  audio: null,

  getSong(artistId) {
    axios.get(`https://localhost:7040/api/Content/${artistId}`).then((res) => {
      songPlay.title = res.data.title;
      songPlay.coverImageURl = res.data.coverImageURl;
      songPlay.audioPlayerURL = res.data.audioPlayerURL;
    });
  },

  getAllSongs() {
    axios.get("https://localhost:7040/api/Content").then((res) => {
      songPlay.contents = res.data;
    });
  },
  nextSong() {
    const x = document.getElementById("audioId");
    x.autoplay = true;
    if (this.currentSongIndex < songPlay.contents.length - 1) {
      this.currentSongIndex++;
      songPlay.isPlaying = true;
    } else {
      this.currentSongIndex = 0;
      songPlay.isPlaying = true;
    }
  },

  prevSong() {
    const x = document.getElementById("audioId");
    x.autoplay = true;
    if (this.currentSongIndex != 0) {
      this.currentSongIndex--;
      songPlay.isPlaying = true;
    } else {
      this.currentSongIndex = songPlay.contents.length - 1;
      songPlay.isPlaying = true;
    }
  },

  toggleSong(index) {
    const x = document.getElementById("audioId");

    this.currentSongIndex = index;

        if (x.paused) {
      songPlay.isPlaying = true;
      x.play();
      
    } else {
      songPlay.isPlaying = false;
      x.pause();
    }
    

  
    
   
      
  
    
  },
});
