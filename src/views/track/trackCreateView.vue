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

                <!-- 
                <img :src="artistService.imagePreviews" @click="artistService.openUpload" style="height: 100PX;" class="preview-image" alt="asdasd">
                <input @change="artistService.updatePreview" type="file" id="file-field" style="display: none;" class="form-control " placeholder="Image"> -->


                <img :src="trackService.imagePreview" @click="trackService.openUploadIamge" style="height: 100PX;"
                    class="preview-image" alt="Image Preview">
                <input @change="trackService.updatePreviewImage" type="file" id="file-field-image" style="display: none;"
                    class="form-control ">
            </div>
            <div class="mb-4 pb-4">

                <img :src="trackService.audioImagePreview" @click="trackService.openUploadAudio" style="height: 100PX;"
                    alt="Audio Image Preview">
                <audio controls :src="trackService.audioPreview" type="audio/mpeg"> Your browser does not support the audio
                    element.</audio>
                <input @change="trackService.updatePreviewAudio" type="file" id="file-field-audio" style="display: none;"
                    class="form-control ">
            </div>
            <div class="mb-4">
                <div class="dropdown">
                    <button @click="trackService.addArtist()" class="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Created by
                    </button>
                    <ul class="dropdown-menu">
                        <li class="dropdown-item" v-for="(artist, index) in artistService.artists" :key="index">{{
                            artist.fullName }}</li>

                    </ul>
                </div>
                <input v-model="trackService.template" type="text" class="form-control" placeholder="Creator Id">
                <button @click="trackService.addCreatorId()" class="btn btn-primary">Add Creator Id </button>

                <!-- Example single danger button -->


            </div>
            <button type="submit" @click="trackService.addTrack()" class="btn btn-primary">Add Track</button>

        </form>
    </div>
</template>



<script setup>
import { trackService } from '@/store/track';
import { useRoute, useRouter } from 'vue-router';
import { userService } from '@/store/user';
import { artistService } from '@/store/artist';


import { computed, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref, watch, watchEffect } from 'vue';
const route = useRoute();
const router = useRouter();



onMounted(() => {
    artistService.getAllArtist();

    if (!userService.user) {

        router.push('/')


    }
})





</script>