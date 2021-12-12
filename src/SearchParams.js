import { useState } from "react"; // This is a `hook

/* Hooks allow us to keep track of states. All hooks begin with `use`. */

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
