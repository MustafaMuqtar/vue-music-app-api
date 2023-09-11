import { reactive } from "vue";
import axios from "axios";
import useRouter from "../router";
import { artistService } from '@/store/artist';

export const trackService = reactive({
  title: "",
  gengre: "",
  description: "",
  coverImageURL: "",
  audioPlayerURL: "",
  coverImageURlFile: File,
  audioPlayerURLFile: File,
  selectedImage: null,
  selectedAudio: null,
  creatorIds: [],
  formData: new FormData(),
  contents: [],
  creatorName: [],
  trackId: "",
  isRemoved: false,
  imagePreview: require("/src/assets/ImagePreview.jpg"),
  audioImagePreview: require("/src/assets/AudioPreview.png"),
  audioPreview: null,



addArtist() {
  console.log("dssdfs")
},

























  getSong(artistId) {
    axios.get(`https://localhost:7040/api/Content/${artistId}`).then((res) => {
      songPlay.title = res.data.title;
      songPlay.coverImageURl = res.data.coverImageURl;
      songPlay.audioPlayerURL = res.data.audioPlayerURL;
    });
  },

  getAllSongs() {
    axios.get("https://localhost:7040/api/Content").then((res) => {
      songPlay.contents = res.data;
    });
  },
  updatePreviewImage(e) {
    trackService.selectedImage = e.target.files[0];

    let reader = new FileReader();

    reader.onload = (e) => {
      trackService.imagePreview = e.target.result;
    };

    reader.readAsDataURL(trackService.selectedImage);
  },
  updatePreviewAudio(e) {
    trackService.selectedAudio = e.target.files[0];

    let reader = new FileReader();

    reader.onload = (e) => {
      trackService.audioPreview = e.target.result;
    };

    reader.readAsDataURL(trackService.selectedAudio);
  },

  openUploadIamge() {
    document.getElementById("file-field-image").click();
    console.log("fdsfssfd");
  },
  openUploadAudio() {
    document.getElementById("file-field-audio").click();
    console.log("fdsfssfd");
  },

  addCreatorId() {
    trackService.creatorIds.push(trackService.template);
  },
  async addTrack() {
    trackService.formData.append("title", trackService.title);
    trackService.formData.append("gengre", trackService.gengre);
    trackService.formData.append("description", trackService.description);
    trackService.formData.append(
      "coverImageURL",
      trackService.selectedImage,
      trackService.coverImageURlFile
    );
    trackService.formData.append(
      "audioPlayerURL",
      trackService.selectedAudio,
      trackService.audioPlayerURLFile
    );

    trackService.creatorIds.forEach(function (value) {
      trackService.formData.append("creatorIds", value);
    });

    await axios
      .post("https://localhost:7040/api/Content", trackService.formData)
      .then((res) => {
        if (res.status == 200) {
          useRouter.push("/");
          //location.reload();

        }
      });
  },

  artistRemove(e) {
    axios.delete(`https://localhost:7040/api/Content/${e}`).then((res) => {
      trackService.isRemoved = true;
      location.reload();
      console.log("dfssssssssssssssssss")
    });
  },
});
