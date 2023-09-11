<template>
    <div class="container bg-dark text-white">
        <form enctype="multipart/form-data " @submit.prevent>
            <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">Artist Full Name
                </label>
                <input v-model="artistService.fullName" type="text" class="form-control" placeholder="Snoop Dog" />
            </div>
            <div class="mb-4 pb-4">
                <img :src="artistService.imageURL" @click="artistService.openUpload" class="mb-3"
                    style="width: 200px; height: 300px" alt="" />
                <input @change="artistService.upploadImage" type="file" id="file-field" style="display: none"
                    class="form-control" placeholder="Image" />
            </div>
            <button type="submit" @click="artistService.updateArtist()" class="btn btn-info me-5">
                <span  v-if="artistService.isLoading"><span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Loading...</span>
                 <span v-else> Update</span>
            </button>

            <button type="button" @click="artistService.artistDelete()" class="btn btn-danger"> <span  v-if="artistService.isLoading2"><span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Loading...</span>
                 <span v-else> Delete</span></button>

        </form>
    </div>
</template>

<script setup>
import { artistService } from "@/store/artist";
import { useRoute, useRouter} from 'vue-router';
import { userService } from '@/store/user';

import { computed, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref, watch, watchEffect } from 'vue';
const router = useRouter();

const route = useRoute();



onMounted(() => {
    artistService.singID = route.params.id;

    artistService.getArtistById(route.params.id);
    artistService.isLoading =false;
    artistService.isLoading2 =false;

    if (!userService.user) {
    
    router.push('/')
   
  
  }

});
</script>
