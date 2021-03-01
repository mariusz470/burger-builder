import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-course-8ea1f.firebaseio.com/",
});

export default instance;
