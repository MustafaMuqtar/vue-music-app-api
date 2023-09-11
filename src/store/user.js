import { reactive } from "vue";
import axios from "axios";
import useRouter from "../router";

export const userService = reactive({
  username: "",
  email: "",
  password: "",
  isLogged: false,
  showButton: false,
  user: localStorage.getItem("token"),


  async registerUser() {
    const data = {
      username: userService.username,
      email: userService.email,
      password: userService.password,
    };

    await axios
      .post("https://localhost:7040/api/Acount/Register", data)

      .then((res) => {
        if (res.status == 201) {
          useRouter.push("/");
          userService.showButton=true;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  async loginUser() {
    const data = {
      email: userService.email,
      password: userService.password,
    };

    await axios
      .post("https://localhost:7040/api/Acount/Login", data)

      .then((res) => {
        if (res.status == 200) {
          localStorage.setItem("token", res.data.token);
          useRouter.push("/");
          userService.showButton=true;
          userService.isLogged = true;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

 logoutUser() {
  localStorage.removeItem("token");


  useRouter.push("/");
  userService.isLogged =false;
  userService.showButton=false;
    
  },

  async getUser() {
    const token = localStorage.getItem("token");
    const result = await axios.get(
      "https://localhost:7040/api/Acount/currentUser",
      {
        headers: {
          Authorization: "Bearer " + token ,
          'x-access-token': token 

        },
      }
    );

    console.log(token);
  },



});
