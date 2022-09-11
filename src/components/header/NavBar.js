import styles from './NavBar.module.css';

function NavBar({routesList}){
	return (
		<nav className={styles.navBar}>
			<ul>
				<li><a href="#">{routesList[0]}</a></li>
				<li><a href="#">{routesList[1]}</a></li>
				<li><a href="#">{routesList[2]}</a></li>
			</ul>
		</nav>
	)
}

export default NavBar;