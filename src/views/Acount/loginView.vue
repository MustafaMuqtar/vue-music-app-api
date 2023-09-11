<template>
    <login-modal></login-modal>
</template>



<script setup>

import loginModal from '@/components/loginModal.vue';

import { useRoute, useRouter } from 'vue-router';
import { userService } from '@/store/user';

import { computed, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref, watch, watchEffect } from 'vue';
const router = useRouter();

const route = useRoute();


onMounted(() => {


    if (userService.user) {

        router.push('/')


    }
})


</script>