import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "lviv-bez-reklamy-server.netlify.com"
      : // "https://lviv-bez-reklamy-server.herokuapp.com/"
        "http://localhost:5000/"
});

export default instance;
