import Header from './components/Header';

function App() {
	return(	
		<div>
			<Header
			logoName="Logo Name" 
			headerList={["Home", "Empresa", "Contato"]} 
			/>
		</div>
	);
}

export default App;
