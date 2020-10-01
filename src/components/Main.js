import React from "react";
import { Switch, Route } from "react-router-dom";
import Products from "./ListProduct";
import { pathData } from "../resources/defaulValues";
import Profile from "./Profile";
import ProductCard from "./ProductCard";
import SimpleProduct from "./Product";

const Main = () => {
  return (
    <Switch>
      <Route
        exact
        path="/reward-store-morales-andrea/"
        render={() => {
          return (
            <Products
              info={pathData.products}
              render={(product) => <ProductCard {...product} />}
            />
          );
        }}
      />

      <Route
        exact
        path="/reward-store-morales-andrea/profile"
        render={() => {
          return (
            <Profile
              info={pathData.history}
              render={(product) => <SimpleProduct {...product} />}
            />
          );
        }}
      />
    </Switch>
  );
};

export default Main;
