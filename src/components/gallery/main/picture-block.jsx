// Packages && Libs
import React, { Component } from 'react';
/* Components */
import PBComponents from "./picture-block-components.jsx";


class PictureBlock extends React.Component{
  render() {
    return(
    	<div className="picture-block">
    		<PBComponents.PictureBlockImg/>
    		<PBComponents.PictureBlockDescription/>
    		<PBComponents.PictureBlockLike/>
    	</div>
    )
  }
}

export default PictureBlock;

// <!DOCTYPE Liky>
