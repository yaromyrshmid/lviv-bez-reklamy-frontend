import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "wss://lviv-bez-reklamy-server.herokuapp.com/"
      : "http://localhost:5000/"
});

export default instance;
