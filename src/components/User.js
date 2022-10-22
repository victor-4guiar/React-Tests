import style from './User.module.css';
import {ImageBackground} from 'react';

function User({nick, pfp, back}){
	const picture = {back};
	return(
		<div className={style.user_container}>
			<div className={style.user_header}>
				<img src={back} className={style.user_background}/>
				<div className={style.nickpfp}>
					<img src={pfp} className={style.user_pfp} />
					<h1 className={style.nick}>{nick}</h1>
				</div>
			</div>
		</div>
	)
};

export default User;