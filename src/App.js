import styles from './index.css';
import MsgBox from './components/MsgBox/MsgBox';

function App(){
	return(
		<>
<MsgBox title={["Victor Message", "Zanes Message"]} text={["Olá, tudo bem?", "Bua haha"]} confirm={["Sí", "XD"]} limit={1} evento="<Mud/>"/>
		</>
	);
}

export default App;