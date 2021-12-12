import React from 'react';
import ReactDOM from 'react-dom';
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adope Me"),
    ...[1, 2, 3, 4].map((i) => React.createElement("h1", {}, i)),
    React.createElement(Pet, { name: "Yuna", animal: "Dog", breed: "Pariah" }),
    React.createElement(Pet, {
      name: "Lorna",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Iktefish",
      animal: "Fish",
      breed: "Gentlefish",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
