import React from "react";
import { Helmet } from "react-helmet";

import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Helmet>
        <title>Львів без реклами</title>
        <meta name="description" content="Позбав Львів нелегальної реклами" />
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
