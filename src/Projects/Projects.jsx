import React from 'react';
import './Projects.css';
import Slider from 'react-slick';

const PROJECTS_PER_ROW = 3;

const projects = [
	{
		name: 'MIPS Simulator',
		link: 'https://github.com/ConnorAustin/MipsSimulator',
		image: 'https://raw.githubusercontent.com/ConnorAustin/MipsSimulator/master/example.gif',
		desc: 'A graphical visualization of the MIPS CPU pipeline being executed. It reads a MIPS asm file and executes it opcode by opcode. The speed of execution can be sped up or slowed down.',
		uses: ['C++', 'SFML', 'MIPS']
	},
	{
		name: 'SNES Controller',
		link: 'https://github.com/ConnorAustin/SNESController',
		image: 'https://raw.githubusercontent.com/ConnorAustin/SNESController/master/SnesPic.jpg',
		desc: 'A project to learn about the SNES controller protocol by soldering the ports to an Arduino that tricks the controller into thinking its the SNES. The Arduino then forwards the controller inputs as keyboard presses via a USB keyboard protocol to a rPI that is emulating SNES games.',
		uses: ['Python', 'C']
	},
	{
		name: 'Physics Notes',
		link: 'https://github.com/physicsnotes/physicsnotes.github.io',
		image: 'https://github.com/physicsnotes/physicsnotes.github.io/raw/master/Examples/Website.png',
		desc: 'A website I made to keep notes for my physics class. It features LaTeX rendered equations with a built in editor and a quiz feature that turns your notes into flashcards.',
		uses: ['JavaScript', 'jQuery', 'LaTeX']
	},
	{
		name: 'Ray Tracer',
		link: 'https://github.com/ConnorAustin/RustRaytracer',
		image: 'https://raw.githubusercontent.com/ConnorAustin/RustRaytracer/master/example.gif',
		desc: ['A ray tracer made in Rust, a safe systems programming language designed to be a more modern alternative to something like C. This was a small project to learn the language and see what its strengths and weaknesses are.'],
		uses: ['Rust', 'SDL2']
	},
	{
		name: 'Roll Me Up',
		link: 'https://github.com/ConnorAustin/RollMeUp',
		image: 'https://raw.githubusercontent.com/ConnorAustin/RollMeUp/master/gameplay.gif',
		desc: 'A Katamari Damacy clone made in a week. This was a way for me to learn Blender, a 3D modeling tool, as Katamari games are make creative use of small simple 3D objects. It also has controller input which was something I have never written until this game.',
		uses: ['C#', 'Unity']
	},
	{
		name: 'Mountain Man',
		link: 'https://github.com/ConnorAustin/MountainMan',
		image: 'https://raw.githubusercontent.com/ConnorAustin/MountainMan/master/gameplay_2.png',
		desc: 'The first mobile app I wrote. It is a simple game where the player has to make a quick-reaction choice between the two lower mountains, the goal being descending farther than your friends.',
		uses: ['C#', 'Unity']
	},
	{
		name: 'Jelly Blast!',
		link: 'https://github.com/ConnorAustin/JellyBlast',
		image: 'https://raw.githubusercontent.com/ConnorAustin/JellyBlast/master/gameplay.gif',
		desc: 'A fun physics game that went through many iterations. It uses a graphical library Processing which I found useful for making quick and dirty visuals for later Java projects.',
		uses: ['Java', 'Processing', 'Box2D']
	}
];

export default class Projects extends React.Component {
	getProjectRows() {
		let rows = [];
		let row = [];
		for(let i = 0; i < projects.length; i+=1) 
		{
			if(i % PROJECTS_PER_ROW == 0) {
				if(row.length != 0) {
					rows.push(row);	
					row = [];
				}
			}
			row.push(projects[i]);
		}
		
		if(row.length != 0) {
			rows.push(row);	
		}

		return rows;
	}

	render() {
		let elements = projects.map(project => {
			let uses_elements = project.uses.map(use => {
				return <span className="project-use">{use}</span>
			});

			return (
				<div key={project.name} className="project">
					<a href={project.link}>
						<img src={project.image} />
					</a>
					<div className="project-desc">
						<h1>{project.name}</h1>
						<div>{uses_elements}</div>
						<div className="project-desc-text">{project.desc}</div>
					</div>
				</div>
			);
		});
		
		return (
			<div id="projects-container">
				<h1 class="header">Favorite Personal Projects</h1>
				<div class="github-link"><a href="https://github.com/ConnorAustin"><img src={require('../Images/GitHub.png')}></img></a></div>
				<div>{elements}</div>
			</div>
		);
	}
}
