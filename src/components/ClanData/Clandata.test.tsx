import React from "react";
import ReactDOM from "react-dom";
import ClanData from "./ClanData";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ClanData tag={""} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
