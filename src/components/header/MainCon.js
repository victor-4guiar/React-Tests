import styles from './MainCon.module.css';

function MainCon({companyIcon, companyName}){
	return(
		<div className={styles.mainCon}>
			<img src={companyIcon} />
			<h1>{companyName}</h1>
		</div>
	)
}

export default MainCon;