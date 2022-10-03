import styles from './MsgBox.module.css';
import xicon from './xicon.png';

function Return({title, text, confirm, ordem}){
	return(
		<div id="MsgBox" className={styles.box}>
			<div className={styles.header_box}>
				<h1>{title}</h1><img src={xicon} width="32px" height="32px" />
			</div>
			<div className={styles.body_box}>
				<p>{text}</p>
			</div>
			<div className={styles.confirm_box}>
				<div className={styles.cent}>
					<input className={styles.button_box} type="button" value={confirm} />
				</div>
			</div>
		</div>
	)
}

export default Return;