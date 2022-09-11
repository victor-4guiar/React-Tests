import Header from './components/header/Header';
import image from './components/header/icon.jpg';

function App() {
	let url = image;
	return(	
		<div>
			<Header companyIcon={url} companyName="Tâmara" routesList={["Home", "Company", "Contact"]} />
		</div>
	);
}

export default App;
