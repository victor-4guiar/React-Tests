import styles from './index.css';
import Header from './components/header/Header';
import Engre from './components/items/Engre';

function App(){
	return(
		<>
			<Header companyName="Logo" navList={["Home", "Company", "Contact"]}/>
			<Engre quant='4'/>
		</>
	);
}

export default App;
