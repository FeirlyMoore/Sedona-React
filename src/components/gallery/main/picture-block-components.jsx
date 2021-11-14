// Packages && Libs
import React, { Component } from 'react';
/* Components */

const PBComponents = {
  PictureBlockImg: (props) => {
    return(
      <picture className={"picture-block__picture " + props.picClass}>
        <source srcSet={props.picSource1Src}/>
        <source srcSet={props.picSource2Src}/>
        <img className={props.picImgClass} src={props.picSrc} alt={props.picAlt} width={props.imgWidth} height={props.imgHeight}/>
      </picture>
    )
  },
  PictureBlockDescription: (props) => {
    return(
      <article className={"picture-block__description " + props.descClass}>
        <h2 className={props.titleClass}>{props.title}</h2>
        <p className={props.subtitleClass}>{props.subtitle}</p>
      </article>
    )
  },
  PictureBlockLike: (props) => {
    return(
      <div className="picture-block__like">
        <svg className="icon-like" width="23" height="21">
          <use xlinkHref="img/icons/conglomerate.svg#icon-like"/>
        </svg>
        <span className="like-counter">{props.count}</span>
      </div>
    )
  }
}

export default PBComponents;

// <!DOCTYPE Liky>
