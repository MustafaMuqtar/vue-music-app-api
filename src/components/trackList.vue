<template>
  <div class="container bg-dark">
    <div class="row">
      <div class="row gy-4">
        <h1 class="text-light">
          Låtar
          <router-link
            v-if="userService.showButton"
            to="/track/create"
            class="btn btn-outline-success"
          >
            create</router-link
          >
        </h1>
        <div
          class="col-md-3"
          v-for="(content, index) in trackService.contents"
          :key="index"
        >
          <div class="container">
            <button
              v-if="userService.showButton"
              type="button"
              @click="trackService.artistRemove(content.id)"
              class="btn btn-danger me-3"
            >
              Delete
            </button>

            <router-link
              v-if="userService.showButton"
              :to="'/track/update/' + content.id"
              class="btn btn-info"
            >
              Update
            </router-link>
          </div>
          <div class="card">
            <div>
              <router-link :to="'/track/' + content.id" class="router-link">
                <img
                  :src="content.coverImageURl"
                  class="card-img-top mx-auto d-block mt-4"
                  style="width: 85%"
                  width="100%"
                  height="225"
                  alt="..."
              /></router-link>

              <span class="ms-2  mt-1" @click="songPlay.toggleIcons(index)">
                <i
                  v-if="songPlay.isSelected !== index"
                  class="bi bi-play-circle-fill  h2 text-success"
                ></i>
                <i
                  v-if="songPlay.isSelected === index"
                  class="bi bi-pause-circle-fill h2 text-success"
                ></i>
              </span>
            </div>
            <div class="card-body">
              <router-link :to="'/track/' + content.id" class="router-link">
                <h6 class="card-title">{{ content.title }}</h6>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { songPlay } from "@/store/song";
import { trackService } from "@/store/track";
import { userService } from "@/store/user";
</script>

<style scoped>
.container {
  background-color: rgb(24, 24, 24);
}

.card {
  background-color: rgb(24, 24, 24);
  color: white;
}
</style>
