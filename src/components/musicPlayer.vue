<template>
    <div v-if="song" class="container-fluid fixed-bottom bg-black text-white ">
        <audio id="audioId" :src="song.audioPlayerURL" preload="auto" ref="refAudioPlayer"></audio>
        <div class="row mt-2 mb-2">
            <div class="col-3">
                <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                        <img style="width: 64px;height: 64px;" :src="song.coverImageURl" alt="...">
                    </div>
                    <div class="flex-grow-1 ms-3">
                        <h5 class="mt-0 text-white"> {{ song.title }}
                        </h5>

                        <div v-for="(musicSong, index) in song.creatorName" :key="index">
                            <h6 class="card-title ">{{ musicSong }}</h6>
                        </div>

                    </div>


                </div>
            </div>


            <div class="col-6">
                <div class="play-icons d-flex align-items-center justify-content-center">
                    <div>
                        <h3><i v-if="songPlay.isMixing" class="bi bi-shuffle text-success"></i> </h3>
                        <h3><i v-if="!songPlay.isMixing" class="bi bi-shuffle text-light"></i> </h3>
                    </div>
                    <div>
                        <h3><i @click="songPlay.prevSong" class="bi bi-skip-start-fill ms-4"></i> </h3>
                    </div>
                    <div>
                        <h3> <span class="">
                                <i @click="pauseMusic()" v-if="songPlay.isPlaying"
                                    class="bi  bi-pause-circle-fill text-success ms-4"></i>
                                <i @click="playMusic()" v-if="!songPlay.isPlaying"
                                    class="bi  bi-play-circle-fill text-success ms-4"></i>
                            </span> </h3>
                    </div>
                    <div>
                        <h3><i @click="songPlay.nextSong" class="bi bi-skip-end-fill ms-4"></i> </h3>

                    </div>
                    <div>
                        <h3><i v-if="songPlay.isLooping" @click="unLoop()" class="bi bi-repeat text-success ms-4"></i></h3>
                        <h3><i v-if="!songPlay.isLooping" @click="loop()" class="bi bi-repeat text-light ms-4"></i></h3>

                    </div>
                </div>
                <div class="play-progress d-flex justify-content-between mt-1 ">
                    <div class="me-2"> {{ audioCurrent }} </div>
                    <div class="w-100" ref="seekerContainer"> <input v-model="range" ref="seeker" type="range"
                            class="form-range   " id="customRange1"> </div>
                    <div class="ms-2">{{ audioDuration }} </div>
                </div>
            </div>
            <div class="col-3 d-inline-flex  flex-row-reverse align-items-center mt-3">
                <div class="me-4 "> <input type="range" class="form-range  " id="customRange1" ref="volume" v-model="vol">
                </div>
                <div class="me-2 ">
                    <h3 @click="muteMusic()">
                        <i v-if="song.isMute" class="bi fa-lg bi-volume-mute"> </i>
                        <i v-if="!song.isMute" class="bi bi-volume-up"></i>
                    </h3>
                </div>


            </div>
        </div>
    </div>
</template>



  
<script setup>
import { songPlay } from '@/store/song';
import { computed, onMounted, ref, watch } from 'vue';

const refAudioPlayer = ref(null);
let seeker = ref(null);
let seekerContainer = ref(null);
let volume = ref(null);
let vol = ref(70);
let audioDuration = ref(null);
let audioCurrent = ref(null);
let range = ref(0);

let song = computed(() => {
    return songPlay.contents[songPlay.currentSongIndex];

})


const funcCurrentTime = function () {
    refAudioPlayer.value.addEventListener("timeupdate", function () {

        const minutes = Math.floor(refAudioPlayer.value.currentTime / 60);
        const seconds = Math.floor(refAudioPlayer.value.currentTime - minutes * 60);
        audioCurrent.value = minutes + ':' + seconds.toString().padStart(2, '0');
        const value = (100 / refAudioPlayer.value.duration) * refAudioPlayer.value.currentTime;
        range.value = value;
        seeker.value.value = value
    })

}


const funcduration = function () {
    refAudioPlayer.value.addEventListener("loadedmetadata", function () {
        const minutes = Math.floor(refAudioPlayer.value.duration / 60);
        const seconds = Math.floor(refAudioPlayer.value.duration - minutes * 60);
        audioDuration.value = minutes + ':' + seconds.toString().padStart(2, '0')
    })


}

onMounted(() => {



    if (refAudioPlayer.value) {
        setTimeout(() => {
            funcCurrentTime();
            funcduration();
        }, 300);

        if (songPlay.currentSongIndex) {

            funcSeeker(); 
            funcVolume();
        }

    }


   

})

const funcVolume = function() {
       volume.value.addEventListener('mousemove', function() {

        refAudioPlayer.value.volume = vol.value / 100;
    })

    volume.value.addEventListener("click", function() {

refAudioPlayer.value.volume = vol.value / 100;
})
}

const funcSeeker = function () {
    seeker.value.addEventListener("change", function () {

        const time = refAudioPlayer.value.duration * (seeker.value.value / 100)
        refAudioPlayer.value.currentTime = time;
    })

    seeker.value.addEventListener("mousedown", function () {
        refAudioPlayer.value.pause();
        songPlay.isPlaying = false;

    })

    seeker.value.addEventListener("mouseup", function () {
        refAudioPlayer.value.play();
        songPlay.isPlaying = true;

    })

    seekerContainer.value.addEventListener("click", function (e) {
        const clickPosition = (e.pageX - seekerContainer.value.offsetLeft) / seekerContainer.value.offsetWidth;
        const time = refAudioPlayer.value.duration * clickPosition;
        refAudioPlayer.value.currentTime = time;
        seeker.value.value = (100 / refAudioPlayer.value.duration) * refAudioPlayer.value.currentTime;

    })

}

watch(() => refAudioPlayer.value, () => {
    funcCurrentTime();
    funcduration()
    funcSeeker();
    funcVolume();

});
watch(() => audioCurrent.value, (time) => {
    if (time && time == audioDuration.value && songPlay.isLooping == false) {
        songPlay.nextSong()
    }
})

const playMusic = function () {
    refAudioPlayer.value.play()
    songPlay.isPlaying = true;
}

const pauseMusic = function () {
    refAudioPlayer.value.pause()
    songPlay.isPlaying = false
}


const loop = function () {
    refAudioPlayer.value.loop = true;
    songPlay.isLooping = true;

}

const unLoop = function () {
    refAudioPlayer.value.loop = false;
    songPlay.isLooping = false;
}

const muteMusic = function () {
    refAudioPlayer.value.muted = !refAudioPlayer.value.muted

    if (songPlay.isMute) {
        songPlay.isMute = false;
    }

    else if (!songPlay.isMute) {
        songPlay.isMute = true;
    }

}

</script>
  
