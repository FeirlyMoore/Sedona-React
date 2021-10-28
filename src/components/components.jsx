const Components = {
	ArticleType1: function(props) {
		return(
			<article className={props.articleClass}>
				<h2 className={props.h2Class}>{props.title}</h2>
				<span className={props.spanClass}>{props.decoEl}</span>
				<p className={props.pClass}>{props.content}</p>
			</article>
		)
	},
	ArticleType2: function(props) {
		return(
			<article className={props.articleClass}>
				<svg className={props.svgClass} width={props.width} height={props.height} aria-lebel={props.ariaLabel}>
					<use className={props.useClass} xlinkHref={props.xlinkHref}/>
				</svg>
				<h2 className={props.h2Class}>{props.title}</h2>
				<p className={props.pClass}>{props.content}</p>
			</article>
		)
	},
	Button: function(props) {
		return(
			<span className={props.spanClass}>{props.content}</span>
		)
	}
}

export default Components;

// <Components.ArticleType2 articleClass="" svgClass="" useClass="" h2Class="" pClass="" xlinkHref="" title="" content=""/>
// <Components.ArticleType1 articleClass="" h2Class="" spanClass="" pClass="" title="" decoEl="" content=""/>
// <Components.Button spanClass="" content=""/>
