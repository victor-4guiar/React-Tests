import styles from './Header.module.css'

function NavBar({headerList}){
	return(
		<nav className={styles.headerList}>
			<li><a href="#">{headerList[0]}</a></li>
			<li><a href="#">{headerList[1]}</a></li>
			<li><a href="#">{headerList[2]}</a></li>
		</nav>
	)
}

export default NavBar;