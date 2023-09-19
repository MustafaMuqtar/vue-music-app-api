<template>
    <div class="container bg-dark text-white">
        <form enctype="multipart/form-data " @submit.prevent>
            <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">Track Title</label>
                <input v-model="trackService.title" type="text" class="form-control" placeholder="Full Name">
            </div>
            <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">Genre</label>
                <input v-model="trackService.gengre" type="text" class="form-control" placeholder="Genre">
            </div>
            <div class="mb-4">
                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <textarea v-model="trackService.description" class="form-control" id="exampleFormControlTextarea1"
                    rows="3"></textarea>
            </div>
            <div class="mb-4 pb-4">
                <img :src="trackService.coverImageURL" @click="trackService.openUploadIamge" style="height: 100PX;"
                    class="preview-image" alt="Image Preview">
                <input @change="trackService.upploadImage" type="file" id="file-field-image" style="display: none;"
                    class="form-control ">
            </div>
            <div class="mb-4 pb-4">

                <img :src="trackService.audioImagePreview" @click="trackService.openUploadAudio" style="height: 100PX;"
                    alt="Audio Image Preview">
                <audio controls :src="trackService.audioPlayerURL" type="audio/mpeg"> Your browser does not support the
                    audio
                    element.</audio>
                <input @change="trackService.upploadAudio" type="file" id="file-field-audio" style="display: none;"
                    class="form-control ">
            </div>
            <div class="mb-4">
                <div class="dropdown">
                    <button class="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Created by
                    </button>
                    <ul class="dropdown-menu">
                        <li class="dropdown-item" id="dropdown" @click="trackService.dropdownCh(artist.id)"
                            v-for="(artist, index) in artistService.artists" :key="index"><span>{{ index + 1 }}</span>. {{
                                artist.fullName }}</li>

                    </ul>
                </div>
                <i @click="trackService.removeArtist()" class="bi bi-x-square-fill"> Remove added artist by first added</i>

                <h3>{{ trackService.creatorIds }}</h3>


            </div>
            <button type="submit" @click="trackService.updateTrack()" class="btn btn-primary">
                <span v-if="trackService.isUpdating"><span class="spinner-grow spinner-grow-sm" role="status"
                        aria-hidden="true"></span> Updating...</span>
                <span v-else> Update</span>
            </button>

            <button type="button" @click="trackService.artistDelete()" class="btn btn-danger"> <span
                    v-if="trackService.isDeleting"><span class="spinner-grow spinner-grow-sm" role="status"
                        aria-hidden="true"></span> Deleting...</span>
                <span v-else> Delete</span></button>

        </form>
    </div>
</template>




<script setup>
import { trackService } from '@/store/track';
import { useRoute, useRouter } from 'vue-router';
import { userService } from '@/store/user';
import { artistService } from "@/store/artist";


import { computed, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref, watch, watchEffect } from 'vue';
const router = useRouter();

const route = useRoute();


onMounted(() => {


    trackService.trackId = route.params.id;

    trackService.getSong(route.params.id);


    if (!userService.user) {

        router.push('/')


    }
})








</script>