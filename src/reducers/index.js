import { combineReducers } from "redux";

const loadingError = (state = false, action) => {
  switch (action.type) {
    case "LOADING_ERROR":
      return action.hasErrored;
    default:
      return state;
  }
};

const loadingInProgress = (state = false, action) => {
  switch (action.type) {
    case "LOADING_IN_PROGRESS":
      return action.isLoading;
    default:
      return state;
  }
};

const articles = (state = [], action) => {
  switch (action.type) {
    case "LOADING_SUCCESS":
      return action.articles;
    default:
      return state;
  }
};

export default combineReducers({
  articles,
  loadingError,
  loadingInProgress
});
