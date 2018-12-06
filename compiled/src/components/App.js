import MovieList from "./MovieList.js";
import Search from "./Search.js";
import exampleMovieData from "../data/exampleMovieData.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: exampleMovieData,
      searchVal: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(query) {
    var searchMovie = this.state.movies.filter(movie => {
      movie.title === query;
    });

    this.setState({
      movies: searchMovie
    });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "nav",
        { className: "navbar" },
        React.createElement(
          "div",
          { id: "header" },
          React.createElement(
            "h1",
            null,
            "Movie List"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "search-bar" },
        React.createElement(
          "div",
          null,
          React.createElement(Search, { handleSubmit: this.handleSubmit, searchVal: this.searchVal })
        )
      ),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-md-5" },
          React.createElement(
            "div",
            null,
            React.createElement(MovieList, { movies: this.state.movies }),
            " "
          )
        )
      )
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiU2VhcmNoIiwiZXhhbXBsZU1vdmllRGF0YSIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibW92aWVzIiwic2VhcmNoVmFsIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsInF1ZXJ5Iiwic2VhcmNoTW92aWUiLCJmaWx0ZXIiLCJtb3ZpZSIsInRpdGxlIiwic2V0U3RhdGUiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFNBQVAsTUFBc0IsZ0JBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixhQUFuQjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLDZCQUE3Qjs7QUFFQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVFQLGdCQURHO0FBRVhRLGlCQUFXO0FBRkEsS0FBYjtBQUlBLFNBQUtDLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBcEI7QUFDRDs7QUFFREQsZUFBYUUsS0FBYixFQUFvQjtBQUNsQixRQUFJQyxjQUFjLEtBQUtOLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQk0sTUFBbEIsQ0FBMEJDLEtBQUQsSUFBVztBQUNwREEsWUFBTUMsS0FBTixLQUFnQkosS0FBaEI7QUFDRCxLQUZpQixDQUFsQjs7QUFJQSxTQUFLSyxRQUFMLENBQWM7QUFDWlQsY0FBUUs7QUFESSxLQUFkO0FBR0Q7O0FBRURLLFdBQVM7QUFDUCxXQUNBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsUUFBZjtBQUNBO0FBQUE7QUFBQSxZQUFLLElBQUcsUUFBUjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQURBLE9BREY7QUFNRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUE7QUFBSyw4QkFBQyxNQUFELElBQVEsY0FBYyxLQUFLUixZQUEzQixFQUF5QyxXQUFXLEtBQUtELFNBQXpEO0FBQUw7QUFERixPQU5GO0FBU0U7QUFBQTtBQUFBLFVBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUssZ0NBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS0YsS0FBTCxDQUFXQyxNQUE5QixHQUFMO0FBQUE7QUFBQTtBQURGO0FBREY7QUFURixLQURBO0FBaUJEO0FBdEMrQjs7QUF5Q2xDO0FBQ0E7QUFDQSxlQUFlTixHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZUxpc3QgZnJvbSBcIi4vTW92aWVMaXN0LmpzXCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL1NlYXJjaC5qc1wiO1xuaW1wb3J0IGV4YW1wbGVNb3ZpZURhdGEgZnJvbSBcIi4uL2RhdGEvZXhhbXBsZU1vdmllRGF0YS5qc1wiO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW92aWVzOiBleGFtcGxlTW92aWVEYXRhLFxuICAgICAgc2VhcmNoVmFsOiAnJ1xuICAgIH1cbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQocXVlcnkpIHtcbiAgICB2YXIgc2VhcmNoTW92aWUgPSB0aGlzLnN0YXRlLm1vdmllcy5maWx0ZXIoKG1vdmllKSA9PiB7XG4gICAgICBtb3ZpZS50aXRsZSA9PT0gcXVlcnk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vdmllczogc2VhcmNoTW92aWUsXG4gICAgfSlcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICA8ZGl2IGlkPVwiaGVhZGVyXCI+XG4gICAgICAgIDxoMT5Nb3ZpZSBMaXN0PC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXJcIj5cbiAgICAgICAgPGRpdj48U2VhcmNoIGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IHNlYXJjaFZhbD17dGhpcy5zZWFyY2hWYWx9Lz48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgIDxkaXY+PE1vdmllTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUubW92aWVzfSAvPiA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0=