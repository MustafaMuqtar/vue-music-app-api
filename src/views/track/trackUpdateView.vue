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
                <label for="exampleFormControlInput1" class="form-label">Cover Image</label>
                <input @change="trackService.uploadImage" type="file" id="file-field" class="form-control ">
            </div>
            <div class="mb-4 pb-4">
                <label for="exampleFormControlInput1" class="form-label">Track Audio</label>
                <input @change="trackService.uploadAudio" type="file" id="file-field" class="form-control ">
            </div>
            <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">Creator Id</label>
                <input  v-model="trackService.template"  type="text" class="form-control" placeholder="Creator Id">
                <button @click="trackService.addCreatorId()"  class="btn btn-primary">Add Creator Id </button>
        
            </div>
            <button type="submit" @click="trackService.addTrack()" class="btn btn-primary">Add Track</button>

        </form>
    </div>
</template>



<script setup>
import { trackService } from '@/store/track';
import { useRoute, useRouter} from 'vue-router';
import { userService } from '@/store/user';

import { computed, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref, watch, watchEffect } from 'vue';
const router = useRouter();

const route = useRoute();


onMounted(() => {

  
  if (!userService.user) {
    
    router.push('/')
   
  
  }
})








</script>