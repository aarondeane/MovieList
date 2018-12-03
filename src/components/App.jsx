import MovieList from "./MovieList.js";
import exampleMovieData from "../data/exampleMovieData.js";

var App = () => (
  <div>
    <nav className="navbar">
    <div id="header">
      <h1>Movie List</h1>
    </div>
    </nav>
    <input type="text" id="search-value" placeholder="Search"></input>
    <input type="submit" id="search" value="Go!"></input>
    <div className="row">
      <div className="col-md-5">
        <div><MovieList movies={exampleMovieData} /> </div>
      </div>
    </div>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
