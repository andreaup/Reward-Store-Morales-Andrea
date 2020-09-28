import React from "react";
import PropTypes from "prop-types";
import moment from 'moment';
import imgNotAvailable from '../images/No_Img_Avail.jpg'

const RepoList = ({ articles, hasError, isLoading }) => {
  if (hasError) {
    return (
      <div className="container">
        <h6>Sorry! There was an error loading the news.</h6>
      </div>
    );
  }


  if (isLoading) {
    return (
      <div className="container">
        <h6>Loading…</h6>
      </div>
    );
  }
  return (
    <div className="container">
      {articles.map((article) => (
        <div className="Card">
          <div className="images">
            <img src={article.img_url || imgNotAvailable} alt ="Article"/>
          </div>
          <div className="description">
            <a href={article.url}>
             <h3> {article.title}</h3>
            </a>
            <p>
              {article.source_name} | {moment(new Date(article.date)).locale('es').format('hh:mm')}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

RepoList.propTypes = {
  articles: PropTypes.array,
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default RepoList;
