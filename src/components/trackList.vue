<template>
    <div class="container bg-dark ">
        <div class="row ">
            <div class="row gy-4">
                <h1 class="text-light">
                    Låtar <router-link v-if="userService.showButton"  to="/track/create" class="btn btn-outline-success">
                        create</router-link>
                </h1>
                <div class="col-md-3 " v-for="(content, index) in songPlay.contents" :key="index">
                    <div class="container">
                        <button v-if="userService.showButton" type="button" @click="trackService.artistRemove(content.id)"
                            class="btn btn-danger me-3">Delete</button>

                        <router-link v-if="userService.showButton" :to="'/track/update/' + content.id" class="btn btn-info">
                            Update </router-link>
                    </div>
                    <div class="card">
                        <div>

                            <router-link :to="'/track/' + content.id" class="router-link">
                                <img :src="content.coverImageURl" class="card-img-top  mx-auto d-block mt-4"
                                    style="width: 85%;" width="100%" height="225" alt="..."></router-link>

                            <h3 class="ms-2 mt-1"> <span @click="songPlay.toggleSong(index)" class="">
                                    <i v-if="songPlay.isPlaying" class="bi  bi-pause-circle-fill text-success "></i>
                                    <i v-if="!songPlay.isPlaying" class="bi  bi-play-circle-fill text-success "></i>
                                </span> </h3>

                
                        </div>
                        <div class="card-body">
                            <router-link :to="'/track/' + content.id" class="router-link">
                                <h5 class="card-title">{{ content.title }}</h5>
                            </router-link>

                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script setup>
import { songPlay } from '@/store/song';
import { trackService } from '@/store/track';
import { onMounted } from 'vue';
import { userService } from '@/store/user';



onMounted(() => {



})





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