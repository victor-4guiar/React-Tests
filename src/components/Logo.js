import style from './style.css';

function Logo({logoName}){
	return(
		<div className="logo">
			<h1>{logoName}</h1>
		</div>
	)
}

export default Logo;