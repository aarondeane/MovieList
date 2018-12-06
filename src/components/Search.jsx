var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" id="userSearch" type="text" placeholder="Search" value={props.searchVal} />
    <button className="btn hidden-sm-down" onClick={()=> {
      var query = document.getElementById("userSearch").value;
      props.handleSubmit(query);
    }} >
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
