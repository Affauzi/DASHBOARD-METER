import { directive } from "@babel/types";
import React from "react";

const Logout = () => {
  return (
    <div>
      <h1>
        Welcome <span className="nama"></span>
        <button className="logout_btn">Logout</button>
      </h1>
    </div>
  );
};
