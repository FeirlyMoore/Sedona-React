// Packages && Libs
import React, { Component } from 'react';
/* Components */

const ActionComponents = {
	Action: (props) => {
		return(
			<section className="action-block__action">
				<h2 className="action-title">
					Все еще сомневаетесь?
				</h2>
				<p className="action-subtitle">
					Смотрите видеопрезентацию и скорее за билетами,
					пока они не подорожали в очередной раз!
				</p>
			</section>
		)
	},
	VideoControlPanel: () => {
		return(
			<div className="action-block__control-panel">
				<svg className="icon icon-replay" width="16" height="20">
					<use xlinkHref="img/icons/video-icons-conglomerate.svg#icon-replay"/>
				</svg>
				{/*-------Input-------*/}
				<input className="" type="range"/>
				{/*-------Input-------*/}
				<svg className="icon icon-subtitles" width="32" height="20">
					<use xlinkHref="img/icons/video-icons-conglomerate.svg#icon-subtitles"/>
				</svg>
				<svg className="icon icon-scale" width="20" height="20">
					<use xlinkHref="img/icons/video-icons-conglomerate.svg#icon-scale"/>
				</svg>
			</div>
		)
	},
	Video: () => {
		return(
			<div className="video">
				<picture className="video__picture">
      	  <source srcSet="img/gallery/video--desktop.png" media="(min-width: 1200px)"/>
      	  <source srcSet="img/gallery/video--tablet.png" media="(min-width: 768px)"/>
      	  <img className="video__img" src="img/gallery/video--mobile.png" alt="Video" width="320" height="200"/>
      	</picture>
				<ActionComponents.VideoControlPanel/>
			</div>
		)
	}
}

class ActionBlock extends React.Component{
  render() {
    return(
    	<div className="action-block">
    		<ActionComponents.Action/>
    		<ActionComponents.Video/>
    	</div>
    )
  }
}

export default ActionBlock;

// <!DOCTYPE Liky>
