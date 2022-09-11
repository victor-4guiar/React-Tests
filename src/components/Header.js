import NavBar from './NavBar';
import styles from './Header.module.css';

function Header({companyName, navList}){
	return(
		<header>
			<div className={styles.headerCon}>
				<h1>{companyName}</h1>
			</div>
			<NavBar navList={navList}/>
		</header>
	)
}

export default Header;