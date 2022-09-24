import styles from './index.css';
import Header from './components/header/Header';
import Engre from './components/items/Engre';
import For from './components/For';

function App(){
	return(
		<>
			<Header companyName="Logo" navList={["Home", "Company", "Contact"]}/>
			<Engre quant='4' />
			<For />
		</>
	);
}

export default App;