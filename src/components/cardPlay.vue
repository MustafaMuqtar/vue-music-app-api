<template>
  <div v-if="songPlay.isShowingMusicPlayer" class="row ms-2 sticky-top">
    <div class="row gy-3">
      <div class="col-12">
        <div v-if="song" class="card bg-dark text-white" id="card">
          <h6 class="card-title">Låt spelas</h6>
          <img :src="song.coverImageURl" class="card-img-top rounded" width="100%" height="400" alt="..." />
          <div class="card-body">
            <h3 class="card-title">{{ song.title }}</h3>

            <div v-for="(musicSong, index) in song.creatorName" :key="index">
              <h6 class="card-title">{{ musicSong }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="row ms-2 sticky-top">
    <div class="row gy-3">
      <div class="col-12">
        <div v-if="songInfo" class="card bg-dark text-white" id="card">
          <h6 class="card-title">Låt spelas</h6>
          <img :src="songInfo.coverImageURl" class="card-img-top rounded" width="100%" height="400" alt="..." />
          <div class="card-body">
            <h3 class="card-title">{{ songInfo.title }}</h3>

            <!--  <div v-for="(musicSong, index) in songInfo.creatorName" :key="index">
              <h6 class="card-title">{{ musicSong }}</h6>
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { songPlay } from "@/store/song";
import { computed } from "vue";
import { trackService } from "@/store/track";
import { artistService } from "@/store/artist";


let song = computed(() => {
  return trackService.contents[songPlay.currentSongIndex];
});

let songInfo = computed(() => {
  return artistService.contentInformation[songPlay.currentSongIndex];
});
</script>

<style scoped>
#card {
  border: none;
}
</style>
