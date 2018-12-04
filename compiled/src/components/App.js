import MovieList from "./MovieList.js";
import Search from "./Search.js";
import exampleMovieData from "../data/exampleMovieData.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: exampleMovieData
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.setState({});
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
        { "class": "search-bar" },
        React.createElement(
          "div",
          null,
          React.createElement(Search, { handleSubmit: this.handleSubmit })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiU2VhcmNoIiwiZXhhbXBsZU1vdmllRGF0YSIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibW92aWVzIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsImUiLCJzZXRTdGF0ZSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLGFBQW5CO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsNkJBQTdCOztBQUVBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUVA7QUFERyxLQUFiO0FBR0EsU0FBS1EsWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNEOztBQUVERCxlQUFhRSxDQUFiLEVBQWdCO0FBQ2QsU0FBS0MsUUFBTCxDQUFjLEVBQWQ7QUFHRDs7QUFFREMsV0FBUztBQUNQLFdBQ0E7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxRQUFmO0FBQ0E7QUFBQTtBQUFBLFlBQUssSUFBRyxRQUFSO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBREEsT0FERjtBQU1FO0FBQUE7QUFBQSxVQUFLLFNBQU0sWUFBWDtBQUNFO0FBQUE7QUFBQTtBQUFLLDhCQUFDLE1BQUQsSUFBUSxjQUFjLEtBQUtKLFlBQTNCO0FBQUw7QUFERixPQU5GO0FBU0U7QUFBQTtBQUFBLFVBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUssZ0NBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS0YsS0FBTCxDQUFXQyxNQUE5QixHQUFMO0FBQUE7QUFBQTtBQURGO0FBREY7QUFURixLQURBO0FBaUJEO0FBakMrQjs7QUFvQ2xDO0FBQ0E7QUFDQSxlQUFlTixHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZUxpc3QgZnJvbSBcIi4vTW92aWVMaXN0LmpzXCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL1NlYXJjaC5qc1wiO1xuaW1wb3J0IGV4YW1wbGVNb3ZpZURhdGEgZnJvbSBcIi4uL2RhdGEvZXhhbXBsZU1vdmllRGF0YS5qc1wiO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW92aWVzOiBleGFtcGxlTW92aWVEYXRhLFxuICAgIH1cbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgXG4gICAgfSlcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICA8ZGl2IGlkPVwiaGVhZGVyXCI+XG4gICAgICAgIDxoMT5Nb3ZpZSBMaXN0PC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWJhclwiPlxuICAgICAgICA8ZGl2PjxTZWFyY2ggaGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0vPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgPGRpdj48TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9IC8+IDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ==