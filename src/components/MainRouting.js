import React from "react";
import { Switch, Route } from "react-router-dom";
import Articles from "../containers/Articles";
import Search from "../containers/Search";

const redirectCategories = ({match})=>{
  return(<> 
  <Search user={match.params.id === undefined ? 'home': match.params.id} />
  <Articles/> 
  </>)
}

const MainRouting = () => {
    return (
      <main className="main">
        <Switch>
          <Route exact path="/" component={redirectCategories} />
          <Route path="/:id" render={redirectCategories} />
          <Route path="/:id" render={redirectCategories} />
        </Switch>
      </main>
    );
  };
  export default MainRouting;
