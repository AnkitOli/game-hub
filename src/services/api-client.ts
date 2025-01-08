import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a84c282805574a9da699f35b0dde3525",
  },
});
