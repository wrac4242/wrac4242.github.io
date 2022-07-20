import './App.css';
import React from 'react';
import { Link } from "react-router-dom";

class Home extends React.Component {
	render() {
		return (
			<div>
				<h1>
					Who am I?
				</h1>
				<div className="Boxed">
					<p>
						Hi I am Wren (preferred name) using she/her pronouns.
						<br></br>
						You can find my pronouns page <a href="https://en.pronouns.page/@wrac4242">here</a>
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

				<div>
					<p>
						<h2>
							What do I do?
						</h2>
						I am currently still in education, but doing programming projects in my spare time
						<br></br>
						See <Link to="/programming" className="Link" >more information here on my programming</Link>

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
							<li>Operating system: Archcraft</li>
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
