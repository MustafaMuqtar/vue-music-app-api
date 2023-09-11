<template>
    <div class="container bg-dark text-white">
        <form enctype="multipart/form-data " @submit.prevent>
            <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">Artist Full Name </label>
                <input v-model="artistService.fullNameCreate" type="text" class="form-control" placeholder="Full Name">
            </div>
            <div class="mb-4 pb-4">
                <img :src="artistService.imagePreviews" @click="artistService.openUpload" style="height: 100PX;"
                    class="preview-image" alt="asdasd">
                <input @change="artistService.updatePreview" type="file" id="file-field" style="display: none;"
                    class="form-control " placeholder="Image">
            </div>

            <button type="submit" @click="artistService.addArtist()" class="btn btn-info">

             
                <span  v-if="artistService.isLoading"><span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Loading...</span>
                 <span v-else> Add Artist</span>
            </button>


        </form>
    </div>
</template>



<script setup>
import { artistService } from '@/store/artist';
import { userService } from '@/store/user';
import { useRoute, useRouter} from 'vue-router';

import { computed, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref, watch, watchEffect } from 'vue';
const route = useRoute();
const router = useRouter();



onMounted(() => {

artistService.isLoading =false;

if (!userService.user) {
    
  router.push('/')
 

}

})

</script>