<template>
  <login-modal></login-modal>
</template>

<script setup>
import loginModal from "@/components/loginModal.vue";

import { useRouter } from "vue-router";
import { userService } from "@/store/user";

import { onMounted } from "vue";
const router = useRouter();

onMounted(() => {
  if (userService.user) {
    router.push("/");
  }
});
</script>
