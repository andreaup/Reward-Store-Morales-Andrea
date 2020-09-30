import React from "react";
import UserProvider from '../containers/UserProvider';
import Header from './Header';
import Main from './Main';
import NavBar from './Nav';

const App = () => (
  <div>
    <UserProvider>
      <NavBar />
      <Header />
      <Main />
    </UserProvider>
  </div>
);

export default App;
