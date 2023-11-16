import { reactive } from "vue";
import axios from "axios";
import useRouter from "../router";

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
  artistName: null,
  click: false,
  isUpdating: false,
  isDeleting: false,
  isAdding: false,

  async updateTrack() {
    trackService.formData.append("title", trackService.title);
    trackService.formData.append("gengre", trackService.gengre);
    trackService.formData.append("description", trackService.description);

    trackService.formData.append(
      "coverImageURl",
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
      .put(
        `https://localhost:7040/api/Content/${trackService.trackId}`,
        trackService.formData
      )
      .then((res) => {
        if (res.status == 200) {
          useRouter.push("/");
          console.log("det gick");
        }
      });
  },

  removeArtist() {
    trackService.creatorIds.splice(trackService.artistName, 1);
  },
  dropdownCh(e) {
    trackService.artistName = e.value;
    trackService.creatorIds.push(e);
  },

 async getSong(artistId) {
  await  axios.get(`https://localhost:7040/api/Content/${artistId}`).then((res) => {
      trackService.title = res.data.title;
      trackService.gengre = res.data.gengre;
      trackService.description = res.data.description;
      trackService.coverImageURL = res.data.coverImageURl;
      trackService.audioPlayerURL = res.data.audioPlayerURL;
      trackService.creatorIds = res.data.creatorName;
    });
  },

 async getAllSongs() {
 await   axios.get("https://localhost:7040/api/Content").then((res) => {
      trackService.contents = res.data;
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
  upploadAudio(e) {
    trackService.selectedAudio = e.target.files[0];

    let reader = new FileReader();

    reader.onload = (e) => {
      trackService.audioPlayerURL = e.target.result;
    };

    reader.readAsDataURL(trackService.selectedAudio);
  },

  upploadImage(e) {
    trackService.selectedImage = e.target.files[0];

    let reader = new FileReader();

    reader.onload = (e) => {
      trackService.coverImageURL = e.target.result;
    };

    reader.readAsDataURL(trackService.selectedImage);
  },

  openUploadIamge() {
    document.getElementById("file-field-image").click();
  },
  openUploadAudio() {
    document.getElementById("file-field-audio").click();
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
        }
      });
  },

  artistRemove(e) {
    axios.delete(`https://localhost:7040/api/Content/${e}`).then((res) => {
      trackService.isRemoved = true;
      location.reload();
    });
  },
  artistDelete() {
    axios
      .delete(`https://localhost:7040/api/Content/${trackService.trackId}`)
      .then((res) => {
        this.isDeleting = true;
        if (res.status == 200) {
          useRouter.push("/");
        }
      });
  },
});
