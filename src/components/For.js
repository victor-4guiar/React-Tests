function For(){
	for(let c = 1; c<=10; c++){
		let msg = document.createElement('h1');
		msg.setAttribute('id', 'msg');
		msg.innerHTML = `contando ${c}`;
		document.body.appendChild(msg);
	}
}

export default For;