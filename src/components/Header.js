import NavBar from './NavBar';
import styles from './Header.module.css';

function Header({companyName, navList, limit}){
	return(
		<header>
			<div>
				<h1>{companyName}</h1>
			</div>
			<NavBar limit={limit} navList={navList} />
		</header>
	)
}

export default Header;