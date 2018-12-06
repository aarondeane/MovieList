var Search = props => React.createElement(
  "div",
  { className: "search-bar form-inline" },
  React.createElement("input", { className: "form-control", id: "userSearch", type: "text", placeholder: "Search", value: props.searchVal }),
  React.createElement(
    "button",
    { className: "btn hidden-sm-down", onClick: () => {
        var query = document.getElementById("userSearch").value;
        props.handleSubmit(query);
      } },
    React.createElement("span", { className: "glyphicon glyphicon-search" })
  )
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJzZWFyY2hWYWwiLCJxdWVyeSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsU0FBVUMsS0FBRCxJQUNYO0FBQUE7QUFBQSxJQUFLLFdBQVUsd0JBQWY7QUFDRSxpQ0FBTyxXQUFVLGNBQWpCLEVBQWdDLElBQUcsWUFBbkMsRUFBZ0QsTUFBSyxNQUFyRCxFQUE0RCxhQUFZLFFBQXhFLEVBQWlGLE9BQU9BLE1BQU1DLFNBQTlGLEdBREY7QUFFRTtBQUFBO0FBQUEsTUFBUSxXQUFVLG9CQUFsQixFQUF1QyxTQUFTLE1BQUs7QUFDbkQsWUFBSUMsUUFBUUMsU0FBU0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ0MsS0FBbEQ7QUFDQUwsY0FBTU0sWUFBTixDQUFtQkosS0FBbkI7QUFDQyxPQUhIO0FBSUUsa0NBQU0sV0FBVSw0QkFBaEI7QUFKRjtBQUZGLENBREY7O0FBWUE7QUFDQTtBQUNBLGVBQWVILE1BQWYiLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFNlYXJjaCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXIgZm9ybS1pbmxpbmVcIj5cbiAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJ1c2VyU2VhcmNoXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIHZhbHVlPXtwcm9wcy5zZWFyY2hWYWx9IC8+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gaGlkZGVuLXNtLWRvd25cIiBvbkNsaWNrPXsoKT0+IHtcbiAgICAgIHZhciBxdWVyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlclNlYXJjaFwiKS52YWx1ZTtcbiAgICAgIHByb3BzLmhhbmRsZVN1Ym1pdChxdWVyeSk7XG4gICAgICB9fT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj4gXG4pO1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuIl19