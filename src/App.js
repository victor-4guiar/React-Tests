import Header from "./components/Header";

function App(){
	return(
		<Header companyName="Company" navList={["Home", "Company", "Name"]} limit={2} />
	);
}

export default App;
