<template>
  <div class="row ">
    <div class="bg-dark ">
      <router-link to="/" class="btn d-grid gap-2 d-md-block  btn-dark text-start  m-3" type="button"><i
          class="bi bi-house-door me-4"></i>Home
      </router-link>
      <router-link to="/search" class="btn d-grid gap-2 d-md-block btn-dark text-start m-3" type="button"><i
          class="bi bi-search me-4"></i>Search</router-link>
    </div>
    <div class="col-12 bg-dark mt-3 ">
      <playlist></playlist>
    </div>
  </div>
</template>


<script>
import playlist from './playlist.vue';
export default {
  components: { playlist },
  setup() {
    
  },
}
</script>

<style scoped></style>