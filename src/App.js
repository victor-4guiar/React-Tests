import Logo from './components/Logo';
import Menu from './components/Menu';

function App() {
	let values = ["Home", "Empresa", "Contato"];
	return (
		<div id="app">
			<header>
				<Logo logoName="Logo" />
				<Menu values={values} />
			</header>
			<main>
				<h1>Kurt Cobain xd</h1>
				<p>La verdad cubierta de seguridad
				No puedo dejar que me ahogues
				Me gustaría, pero no pudo funcionar
				Intercambiar y tomar turnos
				no me arrepiento de nada</p><br/>

				<p>Y tengo este amigo, ya ves, que me hace sentir
				Y quería más de lo que podía robar
				Me arrestaré, usaré un escudo
				Haré todo lo posible para demostrar que todavía
				Huelela en ti</p><br/>

				<p>No me digas lo que quiero escuchar
				Miedo de nunca conocer el miedo
				Experimenta todo lo que necesites
				seguiré luchando contra los celos
				Hasta que se haya ido</p><br/>

				<p>Y tengo este amigo, ya ves, que me hace sentir
				Y quería más de lo que podía robar
				Me arrestaré, usaré un escudo
				Haré todo lo posible para demostrar que todavía
				Huelela en ti</p><br/>

				<p>La verdad cubierta de seguridad
				No puedo dejar que me ahogues
				Me gustaría, pero no pudo funcionar
				Intercambiar y tomar turnos
				no me arrepiento de nada</p><br/>

				<p>Y tengo este amigo, ya ves, que me hace sentir y yo
				Quería más de lo que podía robar
				Me arrestaré, usaré un escudo
				Haré todo lo posible para hacerte un trato.</p><br/>

				<p>Hicimos un pacto para aprender de quién
				Siempre que queramos sin nuevas reglas
				Compartiremos lo que se perdió y lo que crecimos
				Harán todo lo posible para demostrar que todavía</p><br/>

				<p>Huelela en ti
				Estan aún
				Huelela en ti
				Huelela en ti</p><br/>
			</main>
		</div>
	);
}

export default App;
