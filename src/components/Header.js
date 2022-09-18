import NavBar from './NavBar';
import styles from './Header.module.css';

function Header({companyName, navList}){
	return(
		<header className={styles.header_container}>
			<div className={styles.logo_container}>
				<h1>{companyName}</h1>
			</div>
			<NavBar navList={navList}/>
		</header>
	)
}

export default Header;