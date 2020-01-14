import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../ui";

const Controls = () => {
  return (
    <>
      <Link to="/profile">
        <Button margin="1rem 0 0 0">
          <span>Профіль</span>
        </Button>
      </Link>
      <Link to="/settings">
        <Button margin="1rem 0 0 0">
          <span>Налаштування</span>
        </Button>
      </Link>
    </>
  );
};

export default Controls;
