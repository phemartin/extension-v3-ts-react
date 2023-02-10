import React from "react";
import ReactDOM from "react-dom";

const Popup: React.FC<{}> = () => {
  return <div>Hello world</div>;
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<Popup />, root);
