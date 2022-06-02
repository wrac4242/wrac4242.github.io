import React from "react";
import { Link } from "react-router-dom";

class Pontifex extends React.Component {
	render() {
		return (
			<div>
				<div className="App-header">
					<h1>Pontifex</h1>
				</div>
				<main>
					<div className="Boxed">
						<p>
							<h2>What is Pontifex?</h2>
							Pontifex is a Discord confession bot I made to test the use of Cloudflare workers<br></br>
							It was aimed as a small challenge for myself to keep the code neat and tidy.<br></br>
							If you wish to invite the bot, you can do so <a href="https://discord.com/api/oauth2/authorize?client_id=838448951732338708&permissions=2684357632&scope=bot%20applications.commands">here</a><br></br>
							<br></br><br></br>
							<Link to="/pontifex/tos" className="Link" >ToS</Link> <Link to="/pontifex/privacy" className="Link" >Privacy Policy</Link>
						</p>
					</div>
				</main>
			</div>
		);
	}
}

export default Pontifex;
