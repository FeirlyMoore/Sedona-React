const Components = {
	ArticleType1: (props) => {
		return(
			<article className={props.articleClass}>
				<h2 className={props.h2Class}>{props.title}</h2>
				<span className={props.spanClass}>{props.decoEl}</span>
				<p className={props.pClass}>{props.content}</p>
			</article>
		)
	},
	ArticleType2: (props) => {
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
	Button: (props) => {
		return(
			<span className={props.spanClass}>{props.content}</span>
		)
	},
	MainTitleBlock: (props) => {
		return(
			<section className="title-block">
				<h1 className="title-block__title">{props.title}</h1>
				<p className="title-block__subtitle">{props.subtitle}</p>
			</section>
		)
	},
	UndefinedBlock: (props) => {
		return(
			<div className="block-undefined">
				<h1 className="block-undefined__title">404</h1>
				<p className="block-undefined__subtitle">Кажись, это совсем не Седона !</p>
			</div>
		)
	}
}

export default Components;

// <Components.ArticleType2 articleClass="" svgClass="" useClass="" h2Class="" pClass="" xlinkHref="" title="" content=""/>
// <Components.ArticleType1 articleClass="" h2Class="" spanClass="" pClass="" title="" decoEl="" content=""/>
// <Components.Button spanClass="" content=""/>

{/*<Router>
	<Switch>
		<Route exact path="" component={}/>
	</Switch>
</Router>*/}
