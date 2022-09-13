import Header from "./components/Header";
import Input from "./components/Input";
import Button from "./components/Button";

function App(){
	return(
		<>
			<Header companyName="Company" navList={["Home", "Company", "Name"]} limit={2} />
			<section className="section">
				<form>
					<Input text="Digite seu nome:" type="text" placeholder="Meu nome é..." />
					<Input text="Digite sua idade:" type="number" placeholder="Minha idade é..." />
					<Button text="Pronto!" faz="Nada" />
				</form>
			</section>
		</>
	);
}

export default App;
