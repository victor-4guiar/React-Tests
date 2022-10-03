import xicon from './xicon.png';
import styles from './MsgBox.module.css';

function MsgBox(){
	let messages = {
		title: ["Victor Says", "Zanes Says", "You Says"],
		text: ["Olá", "Olá crl", "Toma no cu viu"],
		confirm: ["Ok", "Ok²", "XD"],
		ordem: 0
	}
	
	function cond(){
		if(messages.ordem < messages.title.length()){
			messages.ordem+=1;
		}else{
			document.getElementById('MsgBox').remove();
		}
	}
	
	return(
		<div id="MsgBox" className={styles.box}>
			<div className={styles.header_box}>
				<h1>{messages.title[messages.ordem]}</h1><img src={xicon} width="32px" height="32px" />
			</div>
			<div className={styles.body_box}>
				<p>{messages.text[messages.ordem]}</p>
			</div>
			<div className={styles.confirm_box}>
				<div className={styles.cent}>
					<input className={styles.button_box} type="button" value={messages.confirm[messages.ordem]} onClick={cond} />
				</div>
			</div>
		</div>
	)
}

export default MsgBox;