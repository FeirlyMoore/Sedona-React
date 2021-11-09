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
      <div className={"picture-block__like " + props.likeClass}>
        <svg className={"icon-like " + props.iconLikeClass} width={props.svgWidth} height={props.svgHeight}>
          <use xlinkHref={props.xlinkHref}/>
        </svg>
        <span className={"like-counter " + props.likeCountClass}>{props.count}</span>
      </div>
    )
  }
}

export default PBComponents;

// <!DOCTYPE Liky>
