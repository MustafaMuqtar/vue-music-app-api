import { reactive } from "vue";
import axios from "axios";
import useRouter from "../router";

export const artistService = reactive({
  fullName: "",
  fullNameCreate: "",
  imageURL: "",
  imageURLFile: File,
  artists: [],
  contentImages: [],
  contentAudios: [],
  contentTitles: [],
  isShow: false,
  isClicked: false,
  selectedImage: null,
  formData: new FormData(),
  imagePreviews: require("/src/assets/ImagePreview.jpg"),
  singID: "",
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  template: "",
  testArray: [],

  getArtistById(artistId) {
    axios.get(`https://localhost:7040/api/Creator/${artistId}`).then((res) => {
      artistService.fullName = res.data.fullName;
      artistService.imageURL = res.data.imageURL;
      artistService.contentImages = res.data.contentImages;
      artistService.contentAudios = res.data.contentAudios;
      artistService.contentTitles = res.data.contentTitles;
    });
  },

  getAllArtist() {
    axios.get("https://localhost:7040/api/Creator").then((res) => {
      artistService.artists = res.data;
    });
  },

  artistRemove(artistId) {
    artistService.isDeleting = true;
    axios
      .delete(`https://localhost:7040/api/Creator/${artistId}`)
      .then((res) => {
        location.reload();
      });
  },

  updatePreview(e) {
    artistService.selectedImage = e.target.files[0];

    let reader = new FileReader();

    reader.onload = (e) => {
      artistService.imagePreviews = e.target.result;
    };

    reader.readAsDataURL(artistService.selectedImage);
  },

  openUpload() {
    document.getElementById("file-field").click();
  },

  upploadImage(e) {
    artistService.selectedImage = e.target.files[0];

    let reader = new FileReader();

    reader.onload = (e) => {
      artistService.imageURL = e.target.result;
    };

    reader.readAsDataURL(artistService.selectedImage);
  },
  async addArtist() {
    artistService.isAdding = true;
    this.isLoading = true;
    artistService.formData.append("fullName", artistService.fullNameCreate);
    artistService.formData.append(
      "imageURL",
      artistService.selectedImage,
      artistService.imageURLFile
    );

    await axios
      .post("https://localhost:7040/api/Creator", artistService.formData)
      .then((res) => {
        if (res.status == 200) {
          useRouter.push("/");
          //location.reload();
        }
      });
  },

  async updateArtist() {
    artistService.isUpdating = true;
    artistService.formData.append("fullName", artistService.fullName);
    artistService.formData.append(
      "imageURL",
      artistService.selectedImage,
      artistService.imageURLFile
    );

    await axios
      .put(
        `https://localhost:7040/api/Creator/${artistService.singID}`,
        artistService.formData
      )
      .then((res) => {
        if (res.status == 200) {
          useRouter.push("/");
        }
      });
  },

  artistDelete() {
    artistService.isDeleting = true;
    axios
      .delete(`https://localhost:7040/api/Creator/${artistService.singID}`)
      .then((res) => {
        if (res.status == 200) {
          useRouter.push("/");
        }
      });
  },

  newArray() {

    const arr=[];
    arr = this.contentTitles.concat(this.contentImages, this.contentAudios);

    console.log(arr ); 
    console.log(this.contentTitles ); 
    console.log("jdjdjdjdsj" ); 
    // Expected output: Array ["a", "b", "c", "d", "e", "f"]
  },
});
