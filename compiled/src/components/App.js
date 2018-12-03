import MovieList from "./MovieList.js";
import exampleMovieData from "../data/exampleMovieData.js";

var App = () => React.createElement(
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
  React.createElement("input", { type: "text", id: "search-value", placeholder: "Search" }),
  React.createElement("input", { type: "submit", id: "search", value: "Go!" }),
  React.createElement(
    "div",
    { className: "row" },
    React.createElement(
      "div",
      { className: "col-md-5" },
      React.createElement(
        "div",
        null,
        React.createElement(MovieList, { movies: exampleMovieData }),
        " "
      )
    )
  )
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiZXhhbXBsZU1vdmllRGF0YSIsIkFwcCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2Qiw2QkFBN0I7O0FBRUEsSUFBSUMsTUFBTSxNQUNSO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsUUFBZjtBQUNBO0FBQUE7QUFBQSxRQUFLLElBQUcsUUFBUjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQURBLEdBREY7QUFNRSxpQ0FBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxjQUF0QixFQUFxQyxhQUFZLFFBQWpELEdBTkY7QUFPRSxpQ0FBTyxNQUFLLFFBQVosRUFBcUIsSUFBRyxRQUF4QixFQUFpQyxPQUFNLEtBQXZDLEdBUEY7QUFRRTtBQUFBO0FBQUEsTUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUE7QUFBSyw0QkFBQyxTQUFELElBQVcsUUFBUUQsZ0JBQW5CLEdBQUw7QUFBQTtBQUFBO0FBREY7QUFERjtBQVJGLENBREY7O0FBaUJBO0FBQ0E7QUFDQSxlQUFlQyxHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZUxpc3QgZnJvbSBcIi4vTW92aWVMaXN0LmpzXCI7XG5pbXBvcnQgZXhhbXBsZU1vdmllRGF0YSBmcm9tIFwiLi4vZGF0YS9leGFtcGxlTW92aWVEYXRhLmpzXCI7XG5cbnZhciBBcHAgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICA8ZGl2IGlkPVwiaGVhZGVyXCI+XG4gICAgICA8aDE+TW92aWUgTGlzdDwvaDE+XG4gICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzZWFyY2gtdmFsdWVcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiPjwvaW5wdXQ+XG4gICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBpZD1cInNlYXJjaFwiIHZhbHVlPVwiR28hXCI+PC9pbnB1dD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICA8ZGl2PjxNb3ZpZUxpc3QgbW92aWVzPXtleGFtcGxlTW92aWVEYXRhfSAvPiA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0=