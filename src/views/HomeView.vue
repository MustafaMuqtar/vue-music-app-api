<template>
  <div class="container bg-dark ">
    <div class="col">
 
        <trackList></trackList>
      
    </div>
    <div class="col mt-4 ">
      <artistList></artistList>
    </div>

  </div>
</template>


<script setup >
import trackList from '@/components/trackList.vue';
import artistList from '@/components/artistList.vue';
import { userService } from '@/store/user';



//userService.getUser();


</script>

<style scoped></style>