<template>
  <div class="container bg-dark">
    <form @submit.prevent="getArtistByQuery()" ction="">
      <div class="input-group mb-3">
        <input
          placeholder="Search song  "
          v-model="query"
          type="search"
          id="form1"
          class="form-control"
        />
        <button
          class="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          <i class="bi bi-search"></i>
        </button>
      </div>
    </form>
    <div class="container">
      <div class="row">
        <div class="row gy-4">
          <h3 v-if="!isHiding" class="text-light">Sök sång titel!</h3>
          <h1 v-if="isHiding" class="text-light">Resultat</h1>
          <div
            class="col-md-3"
            v-for="(content, index) in contents"
            :key="index"
          >
            <div class="card">
              <div>
                <img
                  :src="content.coverImageURl"
                  class="card-img-top mx-auto d-block mt-4"
                  style="width: 85%"
                  width="100%"
                  height="225"
                  alt="..."
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ content.title }}</h5>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const query = ref("");
const isHiding = ref(false);
const contents = ref([]);

const getArtistByQuery = function () {
  axios
    .get(`https://localhost:7040/api/Content?SearchTerm=${query.value}`)
    .then((res) => {
      contents.value = res.data;
      isHiding.value = true;
    });
};
</script>
<style scoped>
.card {
  background-color: rgb(24, 24, 24);
  color: white;
}
</style>
