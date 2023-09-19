import { reactive, ref } from "vue";
import { trackService } from "@/store/track";

export const songPlay = reactive({
  isPlaying: false,
  isPlayingMP: false,
  isMute: false,
  loadingData: false,
  currentSongIndex: 0,
  isLooping: false,
  isMixing: false,
  audio: null,
  isSelected: null,

  nextSong() {
    songPlay.isSelected = songPlay.currentSongIndex + 1;
    const x = document.getElementById("audioId");
    x.autoplay = true;
    if (songPlay.currentSongIndex < trackService.contents.length - 1) {
      songPlay.currentSongIndex++;
      songPlay.isPlaying = true;
    } else {
      songPlay.currentSongIndex = 0;
      songPlay.isPlaying = true;
    }
  },

  prevSong() {
    songPlay.isSelected = songPlay.currentSongIndex - 1;

    const x = document.getElementById("audioId");
    x.autoplay = true;
    if (songPlay.currentSongIndex != 0) {
      songPlay.currentSongIndex--;
      songPlay.isPlaying = true;
    } else {
      songPlay.currentSongIndex = trackService.contents.length - 1;
      songPlay.isPlaying = true;
    }
  },

  toggleIcons(id) {
    const x = document.getElementById("audioId");

    songPlay.currentSongIndex = id;

    this.isSelected === id ? (this.isSelected = null) : (this.isSelected = id);

    if (this.isSelected != null) {
      x.autoplay = true;
      x.play();
      songPlay.isPlaying = true;
    } else {
      x.pause();
      songPlay.isPlaying = false;
    }
  },

  playDetailSong(id) {
   // songPlay.currentSongIndex = id;
   // this.isSelected === id ? (this.isSelected = null) : (this.isSelected = id);
   console
   .log(id)
  }
});
