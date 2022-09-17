import Header from './components/Header';
import Button from './components/Button';
import Input from './components/Input';

function App(){
	return(
		<>
			<Header companyName="Logo" navList={["Home", "Company", "Contact"]} />
			<section className="sec_container">
				<form>
					<Input inputNick="nome" text="Digite seu nome:" type="text" placeholder="Meu nome é..." />
					<Input inputNick="email" text="Digite eu email:" type="email" placeholder="Meu email é..." />
					<Input inputNick="msg" text="Digite o que queres mandar:" type="textarea" />
					<Button text="Feito" type="button" />
				</form>
			</section>
		</>
	);
}

export default App;
