  import React from 'react';
  import './SearchBar.css';

  class SearchBar extends React.Component{
    constructor(props){
      super(props);
      this.state={
        term: ''
      }
      this.search=this.search.bind(this);
      this.handleTermChange = this.handleTermChange.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    search(){
      this.props.onSearch(this.state.term)
    }

    handleTermChange(event){
      this.setState({ term: event.target.value });
    }
    handleKeyPress(e){
      if(e.key=== 'Enter'){
        this.props.onSearch(this.state.term)
      }
    }

    render (){
     return(
       <div className="SearchBar">
         <input placeholder="Enter A Song, Album, or Artist"
                onChange={this.handleTermChange}
                onKeyPress={this.handleKeyPress} />
         <a onClick={this.search}
            >SEARCH</a>
       </div>
     );
    }
  }

  export default SearchBar;
