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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJzZWFyY2hWYWwiLCJxdWVyeSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsU0FBVUMsS0FBRCxJQUNYO0FBQUE7QUFBQSxJQUFLLFdBQVUsd0JBQWY7QUFDRSxpQ0FBTyxXQUFVLGNBQWpCLEVBQWdDLElBQUcsWUFBbkMsRUFBZ0QsTUFBSyxNQUFyRCxFQUE0RCxhQUFZLFFBQXhFLEVBQWlGLE9BQU9BLE1BQU1DLFNBQTlGLEdBREY7QUFFRTtBQUFBO0FBQUEsTUFBUSxXQUFVLG9CQUFsQixFQUF1QyxTQUFTLE1BQUs7QUFDbkQsWUFBSUMsUUFBUUMsU0FBU0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ0MsS0FBbEQ7QUFDQUwsY0FBTU0sWUFBTixDQUFtQkosS0FBbkI7QUFDRCxPQUhEO0FBSUUsa0NBQU0sV0FBVSw0QkFBaEI7QUFKRjtBQUZGLENBREY7O0FBWUE7QUFDQTtBQUNBLGVBQWVILE1BQWYiLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFNlYXJjaCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXIgZm9ybS1pbmxpbmVcIj5cbiAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJ1c2VyU2VhcmNoXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIHZhbHVlPXtwcm9wcy5zZWFyY2hWYWx9IC8+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gaGlkZGVuLXNtLWRvd25cIiBvbkNsaWNrPXsoKT0+IHtcbiAgICAgIHZhciBxdWVyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlclNlYXJjaFwiKS52YWx1ZTtcbiAgICAgIHByb3BzLmhhbmRsZVN1Ym1pdChxdWVyeSk7XG4gICAgfX0gPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcIj48L3NwYW4+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PiBcbik7XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG4iXX0=