import React from "react";
import ReactDOM from "react-dom";

const OptionsPage: React.FC<{}> = () => {
  return <div>Hello world</div>;
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<OptionsPage />, root);
