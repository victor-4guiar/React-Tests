import styles from './Button.module.css';

function Button({text, faz}){
	return(
		<input type="button" className={styles.button} value={text} />
	)
}

export default Button;