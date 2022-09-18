import styles from './index.css';
import Header from './components/Header';

function App(){
	return(
		<>
			<Header companyName="Logo" navList={["Home", "Company", "Contact"]}/>
		</>
	);
}

export default App;
