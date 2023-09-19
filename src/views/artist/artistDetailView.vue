<template>
  <router-link to="/artist/create" class="btn btn-outline-success">
    create</router-link>
  <div class="container-fluid bg-dark text-white">
    <div class="mb-4">
      <div class="play-progress d-flex justify-content-between">
        <div class="col mb-4">
          <div class="d-flex align-items-start mt-3 ms-4">
            <button type="button" @click="artistService.artistRemove(route.params.id)" class="btn btn-danger">
              Delete
            </button>

            <div class="flex-shrink-0 me-4">
              <img style="width: 100px; height: 100px" :src="artistService.imageURL" alt="..." />
            </div>
            <div class="flex-grow-1">
              <h5 class="mt-0 mb-4 text-white">{{ artistService.fullName }}</h5>
              <div class="me-4">
                <h3>
                  <span @click="songPlay.toggleSong(index)" class="bg-">
                    <i v-if="songPlay.isPlaying" class="bi bi-pause-circle-fill text-success ms-1"></i>
                    <i v-if="!songPlay.isPlaying" class="bi bi-play-circle-fill text-success ms-1"></i>
                  </span>
                </h3>
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

    <div class="d-flex align-items-start">
      <div class="d-flex align-items-start">
        <div class="col-sm">
          <div style="background-color: rgb(29, 185, 133)" class="d-flex flex-column">
            <div class="d-flex align-items-center" v-for="(musicSong, index) in artistService.contentAudios" :key="index">
              <div class="fs-1 m-2">{{ index }}</div>

              <div class="d-flex align-items-start"
                :key="index">
             <span>  <img :src="artistService.contentImages" style="height: 50px; width: 50px;" alt=""></span>
              </div>

              <div class="d-flex align-items-start" v-for="(musicSong, index) in artistService.contentTitles"
                :key="index">
             <span>   {{ musicSong }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { songPlay } from "@/store/song";
import { artistService } from "@/store/artist";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

onMounted(() => {
  artistService.getAllArtist();
  artistService.getArtistById(route.params.id);
});
</script>
