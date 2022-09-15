import styles from './Input.module.css'

function Input({text, type, placeholder, inputNick}){
	return(
		<div className={styles.input_container}>
			<label for={inputNick}>{text}</label>
			<input id={inputNick} type={type} placeholder={placeholder} />
		</div>
	)
}

export default Input;