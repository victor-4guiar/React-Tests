import styles from './Button.module.css';

function Button({text, type}){
	return(
		<div className={styles.button_container}>
			<input type={type} value={text} />
		</div>
	)
}

export default Button;