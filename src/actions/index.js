import moment from 'moment';

export const loadingError = (bool) => ({
  type: "LOADING_ERROR",
  hasErrored: bool,
});

export const loadingInProgress = (bool) => ({
  type: "LOADING_IN_PROGRESS",
  isLoading: bool,
});

export const loadingSuccess = (articles) => ({
  type: "LOADING_SUCCESS",
  articles,
});

export const getArticles = (id) => {
  return (dispatch) => {
    dispatch(loadingError(false));
    dispatch(loadingInProgress(true));
    const date = moment().locale("es").format("YYYY-MM-DD");
    let url = '';
    if (id === 0) //home
      url = `https://api.canillitapp.com/latest/${date}`
    else
      url = `https://api.canillitapp.com/news/category/${id}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(loadingInProgress(false));
        return response;
      })
      .then((response) => response.json())
      .then((articles) => 
      {dispatch(loadingSuccess(articles.slice(0,10)))})
      .catch(() => dispatch(loadingError(true)));
  };
};

// .then((articles) => dispatch(loadingSuccess(articles.slice(0,10))))
