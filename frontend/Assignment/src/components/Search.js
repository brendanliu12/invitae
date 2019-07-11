import React, { Component } from 'react';
import './Search.css';
import axios from "axios";
import uuid from "uuid";
import PropTypes from 'prop-types';

class Search extends Component{
  state = {
      gene:'',
      suggestions:[]
  }
  //Performs http get request to get the suggestions based on value in input field
  onChange = (e) => {
      const value = e.target.value;
      let currentSuggestions = [];
      this.setState({ gene: value})
      if(value.length > 0) {
          const url = 'http://ec2-18-216-144-242.us-east-2.compute.amazonaws.com/invitae/bliu/gene?gene_prefix=' + value;
          axios.get(url)
            .then(res => {
                this.setState(() => ({suggestions : res.data, gene: value}));
             });
      }
      else {
          this.setState(() => ({suggestions : currentSuggestions, gene: value}));
      }

  }
  // Reset the list of suggestions once one has been picked
  suggestionsSelected(value) {
      this.setState(() => ({
          gene: value,
          suggestions: [],
      }))
  }
  // The list of auto-complete suggestions when user starts typing in input field
  renderSuggestions() {
      const { suggestions } = this.state;
      if (suggestions.length === 0) {
          return null;
      }
      return (
             <ul>
                 {suggestions.map((item) => <li key={uuid.v4()} onClick={() => this.suggestionsSelected(item)}>{item}</li>)}
             </ul>
      )
  }

  //Performs an http get request to find all the variants on a particular gene and then clears the gene state
  onSubmit = (e) => {
      e.preventDefault();
      this.props.search(this.state.gene);
      this.setState({gene:''})
  }
  render() {
    const { gene } = this.state
    return (
          <div className={"inputParent"}>
            <form className={"AutoCompleteText"}>
                <input type="text"
                   name="search"
                   placeholder="Please type in gene name..."
                   value={gene}
                   onChange={this.onChange}
                   autoComplete="off"
                   />


            {this.renderSuggestions()}

           </form>
           <form onSubmit={this.onSubmit}>
           <input type="submit"
                    value="Search"
                    className={"button"}
             />
           </form>
          </div>

    );
  }
}

Search.propTypes = {
    search: PropTypes.func
}


export default Search;