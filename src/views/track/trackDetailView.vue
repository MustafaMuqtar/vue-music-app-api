<template>
  <router-link to="/track/create" class="btn btn-outline-success">
    create</router-link>
  <div class="text-light">
    <p class="big">
      I'm tryna put you in the worst mood, ah
      P1 cleaner than your church shoes, ah
      Milli point two just to hurt you, ah
      All red Lamb' just to tease you, ah
      None of these toys on lease too, ah
      Made your whole year in a week too, yeah
      Main bitch outta your league too, ah
      Side bitch out of your league too, ah


      House so empty, need a centerpiece
      Twenty racks a table cut from ebony
      Cut that ivory into skinny pieces
      Then she clean it with her face, man, I love my baby, ah
      You talkin' money, need a hearing aid
      You talkin' 'bout me, I don't see the shade
      Switch up my style, I take any lane
      I switch up my cup, I kill any pain

      Look what you've done
      I'm a motherfuckin' starboy
      Look what you've done
      I'm a motherfuckin' starboy

      Every day a nigga try to test me, ah
      Every day a nigga try to end me, ah
      Pull off in that Roadster SV, ah
      Pockets overweight, gettin' hefty, ah
      Coming for the king, that's a far cry, ah
      I come alive in the fall time, I
      The competition, I don't really listen
      I'm in the blue Mulsanne bumping New Edition



    </p>
  </div>
</template>

<script setup>
import { songPlay } from "@/store/song";
import { useRoute, useRouter } from "vue-router";
import { userService } from "@/store/user";

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
  // songPlay.getSong(route.params.id);
});
</script>


<style>
p.big {
  line-height: 3.8;
  word-spacing: 2px;
 
}
</style>