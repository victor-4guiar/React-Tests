import NavBar from './NavBar';
import styles from './Header.module.css';

function Header({navList, companyName}){
	return(
		<header className={styles.header}>
			<div className={styles.logo}>
				<h1>{companyName}</h1>
			</div>
			<NavBar navList={navList} />
		</header>
	)
}

export default Header;