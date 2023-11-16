<template>
  <router-link v-if="userService.showButton" to="/artist/create" class="btn btn-outline-success">
    create</router-link>
  <div class="container-fluid bg-dark text-white">
    <div class="mb-4">
      <div class="play-progress d-flex justify-content-between">
        <div class="col mb-4">
          <div class="d-flex align-items-start mt-3 ms-4">
            <button v-if="userService.showButton" type="button" @click="artistService.artistRemove(route.params.id)"
              class="btn btn-danger">
              Delete
            </button>
            <div class="flex-shrink-0 me-4">
              <img style="width: 100px; height: 100px" :src="artistService.imageURL" alt="..." />
            </div>
            <div class="flex-grow-1">
              <h5 class="mt-0 mb-4 text-white">{{ artistService.fullName }}</h5>
              <div class="me-4">
                <h1>
                  <span @click="songPlay.playDetailSong()" class="bg-">
                    <i v-if="songPlay.isPlaying" class="bi bi-pause-circle-fill text-success ms-1"></i>
                    <i v-if="!songPlay.isPlaying" class="bi bi-play-circle-fill text-success ms-1"></i>
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex align-items-start mt-3 ms-4">
      <h6 class="flex-shrink-0 me-4">#</h6>
      <h6 class="card-title ms-4">Title</h6>
    </div>
    <hr />

    <div class="d-flex flex-row mb-3 align-self-center" v-for="(content, index) in artistService.contentInformation"
      :key="index">
      <div class="p-2 align-self-center">{{ index }} <span class="ms-2  mt-1"
          @click="songPlay.startPlayingList(index, content.id)">
          <i v-if="songPlay.isSelected2 !== index" class="bi bi-play-circle-fill  h2 text-success"></i>
          <i v-if="songPlay.isSelected2 === index" class="bi bi-pause-circle-fill h2 text-success"></i>
        </span></div>
      <div class="p-2"><img :src="content.coverImageURl" style="width: 60px; height: 60px;" alt=""></div>
      <div class="p-2 align-self-center">
        {{ content.title }}
      </div>
    </div>

  </div>
</template>

<script setup>
import { songPlay } from "@/store/song";
import { artistService } from "@/store/artist";
import { onMounted, onUnmounted, ref, onUpdated } from "vue";
import { useRoute } from "vue-router";
import { userService } from "@/store/user";
//import musicPlayer from "@/components/musicPlayer.vue";
import searchView from "../searchView.vue";





const route = useRoute();



onMounted(() => {



  //songPlay.isShowingMusicPlayer = false;

  artistService.getArtistById(route.params.id);

});



</script>

<style scoped>
#divHover:hover {
  background-color: grey;

}
</style>