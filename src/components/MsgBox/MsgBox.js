import xicon from './xicon.png';
import styles from './MsgBox.module.css';
import Return from './Return.js';
import React, {useState} from 'react';

function MsgBox({title, text, confirm, limit}){
	let messages = {
		title: title,
		text: text,
		confirm: confirm,
		limit: limit
	}
	
	const [ord, setCount] = useState(0);
	
	function reb(){
		if (ord < messages.limit){
			setCount(ord + 1);
		}else{
			document.getElementById('MsgBox').remove();
		}
	}
	
	return(
		<div id="MsgBox" className={styles.box}>
			<div className={styles.header_box}>
				<h1>{messages.title[ord]}</h1><img src={xicon} width="32px" height="32px" />
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