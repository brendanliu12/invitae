import React, { Component } from 'react';
import Cell from './Row/Cell';
import CellLink from './Row/CellLink';
import uuid from 'uuid';
import PropTypes from 'prop-types';


class Row extends Component{
  render() {
    return this.props.genes.map((gene) => (
        <div key={uuid.v4()} className={"parent"}>
           <div key={uuid.v4()} className={"small row"}>
            <Cell key={uuid.v4()} value={gene.Accession === "NaN" ? "" : gene.Accession}/>
          </div>
             <div key={uuid.v4()} className={"small row"}>
            <Cell key={uuid.v4()} value={gene.Alt === "NaN" ? "" : gene.Alt}/>
          </div>
             <div key={uuid.v4()} className={"small row"}>
            <Cell key={uuid.v4()} value={gene.Assembly === "NaN" ? "" : gene.Assembly}/>
          </div>
           <div key={uuid.v4()} className={"small row"}>
            <Cell key={uuid.v4()} value={gene.Chr === "NaN" ? "" : gene.Chr}/>
          </div>
           <div key={uuid.v4()} className={"small row"}>
            <Cell key={uuid.v4()} value={gene.Gene === "NaN" ? "" : gene.Gene}/>
          </div>
          <div key={uuid.v4()} className={"small row"}>
            <Cell key={uuid.v4()} value={gene["Genomic Start"] === "NaN" ? "" : gene["Genomic Start"]}/>
          </div>
          <div key={uuid.v4()} className={"small row"}>
            <Cell key={uuid.v4()} value={gene["Genomic Stop"] === "NaN" ? "" : gene["Genomic Stop"]}/>
          </div>
          <div key={uuid.v4()} className={"large row"}>
            <Cell key={uuid.v4()} value={gene["Inferred Classification"] === "NaN" ? "" : gene["Inferred Classification"]}/>
          </div>
          <div key={uuid.v4()} className={"small row"}>
            <Cell key={uuid.v4()} value={gene.Ref  === "NaN" ? "" : gene.Ref}/>
          </div>
          <div key={uuid.v4()} className={"small row"}>
            <Cell key={uuid.v4()} value={gene.Source  === "NaN" ? "" : gene.Source}/>
          </div>
          <div key={uuid.v4()} className={"small row"}>
            <CellLink key={uuid.v4()} value={gene.URL  === "NaN" ? "" : gene.URL}/>
          </div>
        </div>

    ));
  }
}
Row.propTypes = {
    genes: PropTypes.array
}
export default Row;