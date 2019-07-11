import React, { Component } from 'react';
import uuid from "uuid";
import PropTypes from 'prop-types';


class CellLink extends Component{
  render() {
    return (
        <div key={uuid.v4()} className={"cell"} >
          <a key={uuid.v4()}  target="_blank" className={"links"} href={this.props.value}>Link</a>
        </div>
    );
  }
}

CellLink.propTypes = {
    value: PropTypes.any
}
export default CellLink;