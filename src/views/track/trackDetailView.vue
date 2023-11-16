<template>

  <router-link v-if="userService.showButton" to="/track/create" class="btn btn-outline-success">
    create</router-link>
  <div class="texttest">

    {{ trackService.description }}




  </div>

</template>

<script setup>
import { songPlay } from "@/store/song";
import { useRoute, useRouter } from "vue-router";
import { userService } from "@/store/user";
import { trackService } from "@/store/track";


import {
  computed,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
  watch,
  watchEffect,
} from "vue";

const route = useRoute();

onMounted(() => {
  trackService.getSong(route.params.id);
});
</script>


<style>
p.big {
  line-height: 3.8;
  word-spacing: 2px;

}

.texttest {
  color: rgb(255, 255, 255);
  width: 500px;
  line-height: 70px;
  margin-left: 30%;
  word-wrap: break-word;
}
</style>