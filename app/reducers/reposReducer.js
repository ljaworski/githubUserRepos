import * as actions from "../actions/reposActions";

const initialState = {
  repos: [],
  isFetching: false,
  error: null
};

export default function repos(state = initialState, action) {
  switch (action.type) {
    case actions.REPOS_REQUEST_START:
      return { ...state, isFetching: true };
    case actions.REPOS_REQUEST_SUCCESS:
      return { ...state, isFetching: false, repos: action.repos };
    case actions.REPOS_REQUEST_FAILURE:
      return { ...state, isFetching: false, error: action.error };
    case actions.REPOS_CLEAR:
      return { ...state, repos: [] };
    default:
      return state;
  }
}
