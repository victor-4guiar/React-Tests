import styles from './Block.module.css';

function Block({quant}){
	return(
		<>
			<div className={styles.block_container} />
			<div className={styles.block_container} />
			<div className={styles.block_container} />
			<div className={styles.block_container} />
		</>
	)
}

export default Block;