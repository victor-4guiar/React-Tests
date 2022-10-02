import styles from './Player.module.css';

function Player({nick, description, gender, pfp}){	
	function gen(){
		if (gender == 'masculine'){
			return <p id={nick} className={styles.gender, styles.m}>♂</p>;
		}else if(gender == 'feminine'){
			return <p id={nick} className={styles.gender, styles.f}>♀</p>;
		}else{
			return <p id={nick} className={styles.gender, styles.o}>⚨</p>;
		}
	}
	
	return(
		<div className={styles.player_header}>
			<div className={styles.pfp_content}>
				<img src={pfp} alt="Player Pfp" />
			</div>
			<div className={styles.nicktion_content}>
				<h1 className={styles.nick}>{nick}{gen()}</h1>
				<p className={styles.description}>{description}</p>
			</div>
		</div>
	)
}

export default Player;