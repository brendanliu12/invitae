import React, { Component } from 'react';
import Row from './Row.js';
import HeaderRow from './HeaderRow';
import uuid from 'uuid';
import PropTypes from 'prop-types';


class Table extends Component{
  render() {
    return (
        <div className="App">
          <HeaderRow />
          <Row key={uuid.v4()} genes={this.props.genes} />
        </div>
    );
  }
}

Table.propTypes = {
    genes: PropTypes.array
}

export default Table;