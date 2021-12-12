/* Hooks allow us to keep track of states. All hooks begin with `use`. */
import { useState } from "react"; // This is a `hook

/* IMPORTANT NOTE:
States can be used to make animations, but everytime a state is changed, it triggers a re-render.
This, if happenning frequently (like every milisecond or so), can clog up the main thread. */

// Lets create a list of animals that will be chosen via dropdown:
const ANIMAL = Object.freeze([
  "bird",
  "cat",
  "dog",
  "rabbit",
  "reptile",
  "dolphin",
]); // I named the var in caps just to denote that this will not be changed

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState("");
  const breeds = [];
  // const location = "Seattle, WA";
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            /* React, as the name says, is "Reactive" in nature. As such the order a series of reactions
      take is very important is frail. Messing up order can easily render a series of hooks unpredictable.
      Therefore never put hooks in `if` statements, `for` loops, etc. */
            /* React also doesn't render the entire page upon every reaction. It is very intelligent in modularizing
      a page and re-rendering only necessary segments. */
            value={location}
            placeholder="Leader"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            {ANIMAL.map((animal) => {
              return (
                <option value={animal} key={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option>n/a</option>
            {breeds.map((breed) => {
              return (
                <option value={breed} key={breed}>
                  {breed}
                </option>
              );
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
