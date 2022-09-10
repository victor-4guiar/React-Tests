import styles from './Header.module.css';
import NavBar from './NavBar';

function Header({logoName, headerList}){
	return(
		<header className={styles.header}>
			<div className={styles.logo}>{logoName}</div>
			<NavBar headerList={headerList} />
		</header>
	)
}
export default Header;