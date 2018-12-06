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
    var searchMovie = this.state.movies.filter(movie => movie.title === query);
    console.log(searchMovie);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiU2VhcmNoIiwiZXhhbXBsZU1vdmllRGF0YSIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibW92aWVzIiwic2VhcmNoVmFsIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsInF1ZXJ5Iiwic2VhcmNoTW92aWUiLCJmaWx0ZXIiLCJtb3ZpZSIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxTQUFQLE1BQXNCLGdCQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsYUFBbkI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2Qiw2QkFBN0I7O0FBRUEsTUFBTUMsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDaENDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRUCxnQkFERztBQUVYUSxpQkFBVztBQUZBLEtBQWI7QUFJQSxTQUFLQyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0Q7O0FBRURELGVBQWFFLEtBQWIsRUFBb0I7QUFDbEIsUUFBSUMsY0FBYyxLQUFLTixLQUFMLENBQVdDLE1BQVgsQ0FBa0JNLE1BQWxCLENBQXlCQyxTQUN6Q0EsTUFBTUMsS0FBTixLQUFnQkosS0FEQSxDQUFsQjtBQUVBSyxZQUFRQyxHQUFSLENBQVlMLFdBQVo7O0FBRUEsU0FBS00sUUFBTCxDQUFjO0FBQ1pYLGNBQVFLO0FBREksS0FBZDtBQUdEOztBQUVETyxXQUFTO0FBQ1AsV0FDQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFFBQWY7QUFDQTtBQUFBO0FBQUEsWUFBSyxJQUFHLFFBQVI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFEQSxPQURGO0FBTUU7QUFBQTtBQUFBLFVBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUssOEJBQUMsTUFBRCxJQUFRLGNBQWMsS0FBS1YsWUFBM0IsRUFBeUMsV0FBVyxLQUFLRCxTQUF6RDtBQUFMO0FBREYsT0FORjtBQVNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFLLGdDQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUtGLEtBQUwsQ0FBV0MsTUFBOUIsR0FBTDtBQUFBO0FBQUE7QUFERjtBQURGO0FBVEYsS0FEQTtBQWlCRDtBQXRDK0I7O0FBeUNsQztBQUNBO0FBQ0EsZUFBZU4sR0FBZiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aWVMaXN0IGZyb20gXCIuL01vdmllTGlzdC5qc1wiO1xuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9TZWFyY2guanNcIjtcbmltcG9ydCBleGFtcGxlTW92aWVEYXRhIGZyb20gXCIuLi9kYXRhL2V4YW1wbGVNb3ZpZURhdGEuanNcIjtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vdmllczogZXhhbXBsZU1vdmllRGF0YSxcbiAgICAgIHNlYXJjaFZhbDogJydcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KHF1ZXJ5KSB7XG4gICAgdmFyIHNlYXJjaE1vdmllID0gdGhpcy5zdGF0ZS5tb3ZpZXMuZmlsdGVyKG1vdmllID0+XG4gICAgICBtb3ZpZS50aXRsZSA9PT0gcXVlcnkpO1xuICAgIGNvbnNvbGUubG9nKHNlYXJjaE1vdmllKTtcbiAgXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtb3ZpZXM6IHNlYXJjaE1vdmllLFxuICAgIH0pO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgIDxkaXYgaWQ9XCJoZWFkZXJcIj5cbiAgICAgICAgPGgxPk1vdmllIExpc3Q8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhclwiPlxuICAgICAgICA8ZGl2PjxTZWFyY2ggaGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gc2VhcmNoVmFsPXt0aGlzLnNlYXJjaFZhbH0vPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgPGRpdj48TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9IC8+IDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ==