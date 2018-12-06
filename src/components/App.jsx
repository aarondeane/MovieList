import MovieList from "./MovieList.js";
import Search from "./Search.js";
import exampleMovieData from "../data/exampleMovieData.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: exampleMovieData,
      searchVal: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(query) {
    var searchMovie = this.state.movies.filter(movie =>
      movie.title === query);
    console.log(searchMovie);
  
    this.setState({
      movies: searchMovie,
    });
  }
  
  render() {
    return (
    <div>
      <nav className="navbar">
      <div id="header">
        <h1>Movie List</h1>
      </div>
      </nav>
      <div className="search-bar">
        <div><Search handleSubmit={this.handleSubmit} searchVal={this.searchVal}/></div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <div><MovieList movies={this.state.movies} /> </div>
        </div>
      </div>
    </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
