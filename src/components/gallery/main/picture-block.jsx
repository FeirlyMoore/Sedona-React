// Packages && Libs
import React, { Component } from 'react';
/* Components */
import PBComponents from "./picture-block-components.jsx";


class PictureBlock extends React.Component{
  render() {
    return(
    	<div className={"picture-block " + this.props.PicBlockClass}>
    		<PBComponents.PictureBlockImg
    		 picClass={this.props.picClass} picSource1Src={this.props.source1Src}
    		 picSource2Src={this.props.source2Src} picImgClass={this.props.imgClass}
    		 picSrc={this.props.imgSrc} picAlt={this.props.imgAlt}
    		 imgWidth={this.props.imgWidth} imgHeight={this.props.imgHeight}
    		/>
    		<PBComponents.PictureBlockDescription	descClass={this.props.descClass}
    			titleClass={this.props.titleClass} title={this.props.title}
    			subtitleClass={this.props.subtitleClass} subtitle={this.props.subtitle}
    		/>
    		<PBComponents.PictureBlockLike likeClass={this.props.likeClass}
    			iconLikeClass={this.props.iconLikeClass} svgWidth={this.props.svgWidth}
    			svgHeight={this.props.svgHeight} xlinkHref={this.props.xlinkHref}
    			likeCountClass={this.props.likeCountClass} count={this.props.count}
    		/>
    	</div>
    )
  }
}

export default PictureBlock;

{/*<PictureBlock PicBlockClass="picture-block-4"
	PicClass="picture-block__picture-4" Source1Src=""
	Source2Src="" ImgClass="" ImgSrc="" ImgAlt=""
	imgWidth="" imgHeight="" DescClass="" TitleClass="" title=""
	SubtitleClass="" subtitle="" LikeClass=""
	IconLikeClass="" svgWidth="" svgHeight=""
	svgAriaLabel="" xlinkHref="" LikeCountClass=""
	count=""
/>*/}

// <!DOCTYPE Liky>
