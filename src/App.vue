<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <navbar></navbar>
      </div>
      <div class="col-7">
        <div class="d-grid gap-2 d-md-flex justify-content-md-end bg-dark">

          <router-link to="/register" class="btn btn-dark me-md-2" type="button"  v-if="!userService.isLogged">
            Sign Up</router-link>



          <button @click="userService.logoutUser()" class="btn btn-light me-md-2" type="submit"  v-if="userService.isLogged"> Logga ut</button>
          <router-link to="/login" class="btn btn-light me-md-2" type="button" v-if="!userService.isLogged">
            Login</router-link>

          <!--    <div class="dropdown">
            <button class="btn btn-dark dropdown-toggle" type="button" data-bs- toggle="dropdown" aria- expanded="false">
              <i class="bi bi-person-circle"></i> </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#"> Action </a></li>
              <li><a class="dropdown-item" href="#"> Another action </a></li>
              <li><a class="dropdown-item" href="#"> Something else here </a></li>
            </ul>
          </div>-->
        </div>

        <div class="col " id="b">
          <router-view></router-view>
        </div>
      </div>

      <div class="col-3 bg-dark">
        <cardPlay></cardPlay>
      </div>
    </div>
  </div>
  <div>
    <musicPlayer></musicPlayer>
  </div>
</template>


<script setup >
import navbar from './components/navbar.vue'
import cardPlay from './components/cardPlay.vue'
import musicPlayer from './components/musicPlayer.vue'
import { onMounted } from 'vue';
import { songPlay } from '@/store/song';
import { userService } from './store/user';





onMounted(() => {

  songPlay.getAllSongs();
if (userService.user) {

  userService.isLogged =true;
  userService.showButton =true;
}

})



</script>
<style>
.h1 {
  color: white;
}

.router-link {
  text-decoration: none;
  color: white;
}
</style>
