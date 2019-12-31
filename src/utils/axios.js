const axios = require("axios");

axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://lviv-bez-reklamy-server.herokuapp.com/"
      : "http://localhost:5000/"
});

module.exports = axios;
