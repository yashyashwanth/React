import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-urger-885d3.firebaseio.com/"
});

export default instance;
