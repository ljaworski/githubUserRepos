import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.github.com/"
});

export default class restClient {
  static getRepos(username) {
    return instance.get(
      `search/repositories?q=user:${username}+fork:true&sort=stars&per_page=10`
    );
  }
}
