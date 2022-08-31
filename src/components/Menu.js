import style from './style.css';

function Menu({values}){
	return(
		<nav>
			<a href="#">{values[0]}</a>
			<a href="#">{values[1]}</a>
			<a href="#">{values[2]}</a>
		</nav>
	)
}

export default Menu;