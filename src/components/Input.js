import styles from './Input.module.css';

function Input({text, type, placeholder}){
	return(
		<input className={styles.input} text={text} type={type} placeholder={placeholder} />
	)
}

export default Input;