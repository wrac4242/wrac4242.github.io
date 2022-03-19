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
						<p>
							<a href="https://twitter.com/WRAC4242">My twitter where I usually post art</a>
						</p>
					</div>
					<h2>Some of my projects</h2>
					<div>
						<div className="Boxed">
							<h2>Programming</h2>
							<div>
								<h3>Game Jam Games</h3>
								<p>
									<h4>The games below were for "My First Game Jam"</h4>
									<a href="https://wrac4242.itch.io/free-card">Summer 2021 game: Free Card</a>
									<br></br>
									<a href="https://wrac4242.itch.io/gravi-tea">Winter 2022 game: GraviTea</a>
									<br></br>
									Both of these games were made entirely by me, but due to the time limit of the game jam
									<br></br>
									they may be a little rough around the edges.
								</p>
								<h3>General projects</h3>
								<p>
									<h4>These are general coding projects I have taken, they may be unfinished</h4>
									<a href="https://github.com/wrac4242/polish-calculator">A small polish calculator</a>
									<br></br>
									<a href="https://github.com/wrac4242/password_breach_checker">A password breach checker</a>
									<br></br>
									<a href="https://github.com/wrac4242/wrac4242.github.io">My personal website source</a>
								</p>
							</div>
						</div>
					</div>
				</main>
			</div>
		);
	}
}



export default Links;
