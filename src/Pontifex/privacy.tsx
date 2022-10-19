import React from "react";

class PontifexPrivacy extends React.Component {
	render() {
		return (
			<div>
				<div className="App-header">
					<h1>Pontifex Privacy Policy</h1>
				</div>
				<main>
					<div className="Boxed">
					<h2>What data we collect:</h2>
					<br></br>
					<h3>What the bot can access live:</h3>
					<p>
						In the bots database we store the Logging Channel ID, Confession Channel ID, and Guild ID <br></br>
						This information is only accessible to admins of the bot and the owner of the guild (available through the /server dump command)<br></br>
						This data may be retained after the bot has been removed from a guild.
					</p>
					<br></br>
					<h3>Long term storage:</h3>
					<p>
						The basics of all interactions are logged in order to improve the quality of the bot and help prevent misuse. <br></br>
						This data may include Guild and User IDs, Bot request errors and successes. This does not include the contents of the confessions.<br></br>
						Only bot admins have access to these logging items. <br></br>
						These are retained for the lifetime of the bot.<br></br>
					</p>
					<br></br>
					<h3>Data Request</h3>
					<p>
						If you wish to request a copy of or delete data stored by the bot or need to contact the bot admins in any way <br></br> 
						please join the support server <a href="https://discord.gg/eNRsbGv8y2">here</a> and ask to contact a bot support member or via email at <a href="mailto:pontifex@wrac4242.com">pontifex@wrac4242.com</a>.
					</p>
					</div>
				</main>
			</div>
		);
	}
}

export default PontifexPrivacy;
