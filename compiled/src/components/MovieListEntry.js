var MovieListEntry = ({ movie }) => React.createElement(
  "div",
  { className: "movie-list-entry media" },
  React.createElement(
    "div",
    { className: "media-body" },
    React.createElement(
      "div",
      { className: "movie-list-entry-title" },
      movie.title
    )
  )
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
MovieListEntry.propTypes = {
  movie: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default MovieListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeSIsIm1vdmllIiwidGl0bGUiLCJwcm9wVHlwZXMiLCJSZWFjdCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLGlCQUFpQixDQUFDLEVBQUNDLEtBQUQsRUFBRCxLQUNuQjtBQUFBO0FBQUEsSUFBSyxXQUFVLHdCQUFmO0FBSUU7QUFBQTtBQUFBLE1BQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSx3QkFBZjtBQUF5Q0EsWUFBTUM7QUFBL0M7QUFERjtBQUpGLENBREY7O0FBV0E7QUFDQTtBQUNBRixlQUFlRyxTQUFmLEdBQTJCO0FBQ3pCRixTQUFPRyxNQUFNQyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkM7QUFETCxDQUEzQjs7QUFJQTtBQUNBO0FBQ0EsZUFBZVAsY0FBZiIsImZpbGUiOiJNb3ZpZUxpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNb3ZpZUxpc3RFbnRyeSA9ICh7bW92aWV9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtbGlzdC1lbnRyeSBtZWRpYVwiPlxuICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWxlZnQgbWVkaWEtbWlkZGxlXCI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cIm1lZGlhLW9iamVjdFwiIHNyYz1cImh0dHBzOi8vaS55dGltZy5jb20vdmkvMXc4WjBVT1hWYVkvZGVmYXVsdC5qcGdcIiBhbHQ9XCJcIiAvPlxuICAgIDwvZGl2PiAqL31cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtbGlzdC1lbnRyeS10aXRsZVwiPnttb3ZpZS50aXRsZX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG4vLyBQcm9wVHlwZXMgdGVsbCBvdGhlciBkZXZlbG9wZXJzIHdoYXQgYHByb3BzYCBhIGNvbXBvbmVudCBleHBlY3RzXG4vLyBXYXJuaW5ncyB3aWxsIGJlIHNob3duIGluIHRoZSBjb25zb2xlIHdoZW4gdGhlIGRlZmluZWQgcnVsZXMgYXJlIHZpb2xhdGVkXG5Nb3ZpZUxpc3RFbnRyeS5wcm9wVHlwZXMgPSB7XG4gIG1vdmllOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3RFbnRyeTtcbiJdfQ==