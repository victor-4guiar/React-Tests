import styles from './Header.module.css';
import MainCon from './MainCon';
import NavBar from './NavBar';

function Header({companyIcon, companyName, routesList}){
	return(
		<header className={styles.header}>
			<MainCon companyIcon={companyIcon} companyName={companyName} />
			<NavBar routesList={routesList}/>
		</header>
	)
}

export default Header;