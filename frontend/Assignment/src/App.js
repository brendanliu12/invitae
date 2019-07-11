import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';
import Search from './components/Search';
import axios from 'axios';
import uuid from "uuid";

class App extends Component {
  state = {
    genes: []
  }


  // Performs an http get request to get all the variants of a particular gene
  search(geneName) {
      const url = 'http://ec2-18-216-144-242.us-east-2.compute.amazonaws.com/invitae/bliu/variant?gene=' + geneName;
      axios.get(url)
        .then(res => {
            if(res.data.length > 0) {
                const data = res.data.replace(/NaN/g, '"NaN"');
                const a = JSON.parse(data);
                this.setState({genes: a});
            }
        });
  }


  render() {
    return (
        <div id={uuid.v4()} className="App">
          <h1 className={"Header"}>Variant Search Coding Assignment</h1>
          <Search search={this.search.bind(this)}/>
          <Table genes={this.state.genes}/>
        </div>
    );
  }
}



export default App;
