import MovieListEntry from "./MovieListEntry.js";

var MovieList = ({movies}) => (
  <div className="movie-list">
    {movies.map((movie) => (
      <MovieListEntry movie={movie} />
      )
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default MovieList;
