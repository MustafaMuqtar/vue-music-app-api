<template>
  <router-link to="/track/create" class="btn btn-outline-success">
    create</router-link>
</template>

<script setup>
import { songPlay } from '@/store/song';
import { useRoute, useRouter} from 'vue-router';
import { userService } from '@/store/user';

import { computed, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref, watch, watchEffect } from 'vue';

const route = useRoute();


onMounted(() => {

  songPlay.getSong(route.params.id);
})



</script>