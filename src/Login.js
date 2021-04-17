import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
	const signIn = () => {
		//do google login
		auth.signInWithPopup(provider).catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<div className="login__logo">
				<img
					src="https://www.mcvuk.com/wp-content/uploads/discord-logo.jpg"
					alt="discord_icon"
					className="discord__icons"
				/>
			</div>

			<Button onClick={signIn}>Sign In</Button>
		</div>
	);
}

export default Login;
