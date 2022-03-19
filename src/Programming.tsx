import './App.css';
import React from 'react';

class Programming extends React.Component {
	render() {
		return (
			<div>
				<div className="App-header">
					<h1>Programming</h1>
				</div>
				<div>
					<p>
						<h2>What do I code?</h2>
						I code whatever I feel like doing at the time, but I usually code some small test projects.
						<br></br>
						I am looking towards developing my front end and back end skills, 
						<br></br>
						while also looking towards learning more about the game industry 
						<br></br>
						and other interesting regions of study, like AI.
					</p>
				</div>
				<div>
					<p>
						<h2>Programming languages I am somewhat competent in</h2>
						<ul>
							<li>JavaScript (to some degree)</li>
							<li>TypeScript (to some degree)</li>
							<li>Python</li>
							<li>Rust</li>
						</ul>
					</p>
				</div>
				<div>
					<div className="Boxed">
						<h2>Some of my projects</h2>
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
			</div>
		);
	}
}

export default Programming;
