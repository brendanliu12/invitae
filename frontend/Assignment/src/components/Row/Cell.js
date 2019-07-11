import React, { Component } from 'react';
import uuid from "uuid";
import PropTypes from 'prop-types';


class Cell extends Component{
  render() {
    return (
        <div key={uuid.v4()} className={"cell"} >
          <p key={uuid.v4()}>{this.props.value}</p>
        </div>
    );
  }
}

Cell.propTypes = {
    value: PropTypes.any
}
export default Cell;