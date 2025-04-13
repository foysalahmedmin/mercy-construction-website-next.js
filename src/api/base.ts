import axios from "axios";

const base = axios.create({
  baseURL: "https://admin.mercyconstructioninc.com",
});

export default base;
