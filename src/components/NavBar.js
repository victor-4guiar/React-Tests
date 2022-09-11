import styles from './NavBar.module.css'

function NavBar({navList}){
	return(
		<nav className={styles.navLi}>
			<a href="#">{navList[0]}</a>
			<a href="#">{navList[1]}</a>
			<a href="#">{navList[2]}</a>
		</nav>
	)
}

export default NavBar;