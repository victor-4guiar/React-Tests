import styles from './index.css';
import MsgBox from './components/MsgBox/MsgBox';

function App(){
	return(
		<>
			<MsgBox title={["a", "b"]} text={["a", "b"]} confirm={["a", "b"]} limit={1}/>
		</>
	);
}

export default App;