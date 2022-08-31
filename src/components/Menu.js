import style from './style.css';

function Menu({values}){
	return(
		<ul>
			<li>{values[0]}</li>
			<li>{values[1]}</li>
			<li>{values[2]}</li>
		</ul>
	)
}

export default Menu;