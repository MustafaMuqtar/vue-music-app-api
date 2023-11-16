<template>
  <div class="container bg-dark">
    <div class="col">
      <trackList></trackList>
    </div>
    <div class="col mt-4">
      <artistList></artistList>
    </div>
  </div>
</template>

<script setup>
import trackList from "@/components/trackList.vue";
import artistList from "@/components/artistList.vue";
import { userService } from "@/store/user";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();

const route = useRoute();
/*
onMounted(() => {
  if (localStorage.getItem("reloaded")) {
    // The page was just reloaded. Clear the value from local storage
    // so that it will reload the next time this page is visited.
    localStorage.removeItem("reloaded");
  } else {
    // Set a flag so that we know not to reload the page twice.
    localStorage.setItem("reloaded", "1");
    location.reload();
  }
});*/
</script>

<style scoped></style>
