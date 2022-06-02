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
						<p>
						What data we collect: <br></br>
						Currently the only information we store is the logging and confession channel IDs and the server IDs even after the bot has been removed, <br></br> 
						this information is viewable with the /serverdump command as we need this data to properly log and send confession messages<br></br>
						No one besides the developers of the bot have access to the data and access will not be provided to people who are unauthorized to see it<br></br>
						<br></br>
						If you have any concerns or want to remove your information from the bot, please join the support server linked <a href="https://discord.gg/eNRsbGv8y2">here</a>, and DM a support member<br></br>
						Support can also be offered via email at <a href="mailto:pontifex@wrac4242.com">pontifex@wrac4242.com</a>, however response times may vary<br></br>
						Confession data (confession itself and sender) is logged into the relevant server and it is up to the server how that logged info is used, <br></br>
						the bot does not store this confession or its information and so it cannot be used by the developer or anyone with access
						</p>
					</div>
				</main>
			</div>
		);
	}
}

export default PontifexPrivacy;
