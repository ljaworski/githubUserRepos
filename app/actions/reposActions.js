import restClient from "../utils/restClient";

export const REPOS_REQUEST_START = "REPOS_REQUEST_START";
export const REPOS_REQUEST_SUCCESS = "REPOS_REQUEST_SUCCESS";
export const REPOS_REQUEST_FAILURE = "REPOS_REQUEST_FAILURE";
export const REPOS_CLEAR = "REPOS_CLEAR";

function reposRequestStart() {
  return {
    type: REPOS_REQUEST_START
  };
}

function reposRequestSuccess(repos) {
  return {
    type: REPOS_REQUEST_SUCCESS,
    repos
  };
}

function reposRequestFailure(error) {
  return {
    type: REPOS_REQUEST_FAILURE,
    error
  };
}

function reposClear() {
  return {
    type: REPOS_CLEAR
  };
}

export function fetchRepos(username) {
  return dispatch => {
    dispatch(reposClear());
    dispatch(reposRequestStart());
    return restClient
      .getRepos(username)
      .then(
        res => dispatch(reposRequestSuccess(mapGithubRepos(res.data.items))),
        error => dispatch(reposRequestFailure(error.message))
      );
  };
}

const mapGithubRepos = repos =>
  repos.map(item => ({
    id: item.id,
    name: item.name,
    description: item.description,
    stargazers_count: item.stargazers_count
  }));
