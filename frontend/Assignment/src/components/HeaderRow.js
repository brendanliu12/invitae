import React, { Component } from 'react';


class HeaderRow extends Component{
  render() {
    return (
     <div className={"parent"}>
         <h3 className={"small row table-header"}>Accession</h3>
         <h3 className={"small row table-header"}>Alternate Allele</h3>
         <h3 className={"small row table-header"}>Assembly</h3>
         <h3 className={"small row table-header"}>Chromosome</h3>
         <h3 className={"small row table-header"}>Gene</h3>
         <h3 className={"small row table-header"}>Gene Start</h3>
         <h3 className={"small row table-header"}>Gene Stop</h3>
         <h3 className={"large row table-header"}>Inferred Classification</h3>
         <h3 className={"small row table-header"}>Reference</h3>
         <h3 className={"small row table-header"}>Source</h3>
         <h3 className={"small row table-header"}>URL</h3>
        </div>
    )
  }
}

export default HeaderRow;