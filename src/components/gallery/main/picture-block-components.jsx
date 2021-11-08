// Packages && Libs
import React, { Component } from 'react';
/* Components */

const PBComponents = {
  PictureBlockImg: function(props) {
    return(
      <picture className="picture-block__picture">
        <source/>
        <source/>
        <img className="" src="" alt=""/>
      </picture>
    )
  },
  PictureBlockDescription: function(props) {
    return(
      <article className="picture-block__description">
        <h2 className=""></h2>
        <p className=""></p>
      </article>
    )
  },
  PictureBlockLike: function(props) {
    return(
      <div className="">
        <svg className="">
          <use/>
        </svg>
        <span className=""></span>
      </div>
    )
  }
}

export default PBComponents;

// <Components.ArticleType2 articleClass="" svgClass="" useClass="" h2Class="" pClass="" xlinkHref="" title="" content=""/>
// <Components.ArticleType1 articleClass="" h2Class="" spanClass="" pClass="" title="" decoEl="" content=""/>
// <Components.Button spanClass="" content=""/>


// <!DOCTYPE Liky>
