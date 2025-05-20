import React from "react";
import ReactDOM from "react-dom";
import Stats from "./Stats";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Stats />, div);
  ReactDOM.unmountComponentAtNode(div);
});
