import React from "react";

/* const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
}; */

const Pet = () => {
  return (
    <div>
      <h2>Name</h2>
      <h3>Animal</h3>
      <h3>Breed</h3>
    </div>
  );
};

export default Pet;
