import React from "react";
import { itemsPerPage } from "../resources/defaulValues";


const Pagination = ({currentPage, jump, prev, next, maxPage}) => {
  return (
    <div className="pagination">
      <p>{(currentPage)  *itemsPerPage} of {maxPage*itemsPerPage} products</p>
      <button onClick={() => prev()}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
      <button>{currentPage}</button>
      <button onClick={() => next()}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
    </div>
  );
};

export default Pagination;
