// import React from "react";
import ReactDOM from "react-dom"; //Babel automatically imports React if we import ReactDOM
// import Pet from "./Pet"; //Note eslint does not know how to parse React/JSX, hence the errors
import SearchParams from "./SearchParams";

/* const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
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
}; */

/* const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name="Yuna" animal="Dog" breed="Pariah"/>
      <Pet name="Lorna" animal="Bird" breed="Cockatiel"/>
      <Pet name="Iktefish" animal="Fish" breed="Gentlefish"/>
    </div>
  );
}; */

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
