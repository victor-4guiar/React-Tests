import xicon from './xicon.png';
import styles from './MsgBox.module.css';
import Mud from './Mud';
import React, {useState} from 'react';

function MsgBox({title, text, confirm, limit, evento}){
	let messages = {
		title: title,
		text: text,
		confirm: confirm,
		evento: evento,
		limit: limit
	}
	
	const [ord, setCount] = useState(0);
	
	function reb(){
		if (ord < messages.limit){
			setCount(ord + 1);
		}else{
			if(messages.evento){
				window.alert('esd');
				document.getElementById('MsgBox').remove();
			}else{
				document.getElementById('MsgBox').remove();
			}
		}
	}
	
	return(
		<div id="MsgBox" className={styles.box}>
			<div className={styles.header_box}>
				<h1>{messages.title[ord]}</h1><img src={xicon} width="24px" height="24px" onClick={reb} />
			</div>
			<div className={styles.body_box}>
				<p>{messages.text[ord]}</p>
			</div>
			<div className={styles.confirm_box}>
				<div className={styles.cent}>
					<input className={styles.button_box} type="button" value={messages.confirm[ord]} onClick={reb} />
				</div>
			</div>
		</div>
	)
}

export default MsgBox;