<template>
    <div class="container bg-dark">
        
        <div class="row ">
            <div class="row gy-4">
                <h1 class="text-light">
                    Artister       <router-link v-if="userService.showButton"  to="/artist/create" class="btn btn-outline-success">
    create</router-link>
                </h1>
                <div class="col-md-3" v-for="(artist, index) in artistService.artists" :key="index">
                    <div class="container">
                        <button v-if="userService.showButton" type="button" @click="artistService.artistRemove(artist.id)"
                            class="btn btn-danger me-3">Delete</button>

                        <router-link v-if="userService.showButton" :to="'/artist/update/' + artist.id" class="btn btn-info">
                            Update </router-link>
                    </div>

                    <router-link :to="'/artist/' + artist.id" class="router-link">
                        <div class="card ">
                            <img class="rounded-circle mx-auto d-block mt-4" style="max-width: 70%;" alt="avatar1"
                                :src="artist.imageURL" />
                            <div class="card-body m-3">
                                <h6 class="card-title">{{ artist.fullName }}</h6>
                                <p class="card-title">Artist</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
  

<script setup>
import { artistService } from '@/store/artist';
import { onMounted } from 'vue';
import { userService } from '@/store/user';



onMounted(() => {

    artistService.getAllArtist();
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