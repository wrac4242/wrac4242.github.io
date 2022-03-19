import './App.css';
import React from 'react';

class Home extends React.Component {
	render() {
		return (
			<div>
				<div>
					<p>
						<h1>
							Who am I?
						</h1>
						Hi I am Wren (preferred name) using she/her pronouns.
						<br></br>
						I write code when I don't get too distracted. Primarily small coding projects, 
						<br></br>
						but I am willing to learn front end and back end development.
						<br></br>
						I also do some (admittedly poor) art, 
						<br></br>
						play video games, and mess around with technology, including linux, when I can.
					</p>
				</div>

				<div className="Boxed">
					<p>
						<h2>
							What do I do?
						</h2>
						I am currently still in education, but doing programming projects in my spare time
						<br></br>
						<h3>
							What programming languages do I know?
						</h3>

					</p>
				</div>

				<div>
					<p>
						<h2>
							Current System Specs
						</h2>
						Currently I run a custom built computer:
						<br></br>
						<ul>
							<li>Operating system: Fedora Linux</li>
							<li>CPU: AMD Ryzen 3 1300X</li>
							<li>GPU: NVIDIA GeForce GTX 1050 Ti</li>
							<li>RAM: 16GB</li>
						</ul>
					</p>
				</div>
			</div>
		);
	}

}

export default Home;
