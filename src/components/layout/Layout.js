import React from "react";

import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
