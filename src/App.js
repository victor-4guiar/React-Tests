import styles from './index.css';
import Player from './components/Player';

function App(){
	for(let c=0; c<10; c++){
		console.log('ye');
	}
	return(
		<>
			<Player nick="Rozavick" gender="nb" description="Hello! I'm Rozavick." pfp="https://media.discordapp.net/attachments/918659534338269224/1026204353767424061/647dd3a090a1cb45ac368242a2d0f657.jpg"/>
			<Player nick="Zanetick" gender="masculine" description="I hate the gozão" pfp="https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2020/02/11/jim.jpg"/>
			<Player nick="Kant" gender="feminine" description="Olá meu artista" pfp="https://wallpaperaccess.com/full/421562.jpg"/>
		</>
	);
}

export default App;