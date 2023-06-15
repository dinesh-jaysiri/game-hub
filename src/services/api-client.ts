import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8d3ab85813f0419c934c0bf7b0749cb1",
  },
}); 