import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Login} />
      <Route path="/main" component={Main} />
    </BrowserRouter>
  );
};

export default App;
