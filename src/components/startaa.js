import { audioDuration, refAudioPlayer, audioCurrent } from './musicPlayer.vue';

export const startaa = function () {
(audioDuration = refAudioPlayer.value.duration);
(audioCurrent = refAudioPlayer.value.currentTime);

};
