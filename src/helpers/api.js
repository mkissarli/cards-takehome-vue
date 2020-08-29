import axios from "axios";

export default class Api {
  static call() {
    return axios.create({
      baseURL: "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json", 
      withCredentials: false,
      headers: Api.headers,
    });
  }
  static headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  };
}