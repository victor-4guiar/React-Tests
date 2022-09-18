import styles from './Engre.module.css';
import Block from './Block';

function Engre({quant}){
	return(
		<div className={styles.engre_container}>
			<div className={styles.giratoria}>
				<Block quant={quant} />
			</div>
		</div>
	)
}

export default Engre;