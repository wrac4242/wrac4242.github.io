import './App.css';
import React from 'react';

class Links extends React.Component {

	render() {
		return (
			<div>
				<div className="App-header">
					<h1>Links</h1>
				</div>
				<main>
					<h2>Some of my main links</h2>
					<div>
						<p>
							<a href="https://github.com/wrac4242">My github can be found here</a>
						</p>
						<p>
							<a href="https://en.pronouns.page/@wrac4242">My pronoun page can be found here</a>
						</p>
						<p>
							<a href="https://wrac4242.itch.io/">My itch.io page can be found here</a>
						</p>
					</div>
					<h2>Some of my main projects</h2>
					<div>
						<p>todo</p>
					</div>
				</main>
			</div>
		);
	}
}



export default Links;
