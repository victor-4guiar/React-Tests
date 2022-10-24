import style from './Create.module.css';

function Create({quant, mess}){
	function criar(){
		window.alert(mess);
		document.getElementById('botao').remove();
	}
	return(
		<button id="botao" onClick={criar}>On?</button>
	)
}

export default Create;