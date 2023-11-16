import { reactive, ref } from "vue";
import { trackService } from "@/store/track";
import { useRoute } from "vue-router";

export const songPlay = reactive({
  isPlaying: false,
  isPlayingMP: false,
  isMute: false,
  loadingData: false,
  currentSongIndex: 0,
  currentSongIndexArtist: 0,
  isLooping: false,
  isMixing: false,
  audio: null,
  isSelected: null,
  isSelected2: null,
  isShowingMusicPlayer: true,
  route: useRoute(),
  test: false,

  nextSong() {
    songPlay.isSelected = songPlay.currentSongIndex + 1;
    songPlay.isSelected2 = songPlay.currentSongIndex + 1;

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
    songPlay.isSelected2 = songPlay.currentSongIndex - 1;

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

  toggleIcons(id, index) {
    console.log(index)

    songPlay.isSelected2 = null;

    songPlay.isShowingMusicPlayer = true;

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

  playDetailSong() {
    //songPlay.isShowingMusicPlayer = false;

    songPlay.currentSongIndex;
    const x = document.getElementById("audioId");
    if (x.paused) {
      songPlay.isPlaying = false;
      x.play();
    } else {
      songPlay.isPlaying = true;
      x.pause();
    }

    // this.isSelected === id ? (this.isSelected = null) : (this.isSelected = id);
  },

  startPlayingList(id, index) {
    console.log(index)
    songPlay.isSelected = null;

    songPlay.isShowingMusicPlayer = false;

    const x = document.getElementById("audioId");
    songPlay.currentSongIndex = id;

    this.isSelected2 === id
      ? (this.isSelected2 = null)
      : (this.isSelected2 = id);

    if (this.isSelected2 != null) {
      x.autoplay = true;
      x.play();
      songPlay.isPlaying = true;
    } else {
      x.pause();
      songPlay.isPlaying = false;
    }
  },
});
