import React from 'react';
import './Projects.css';
import Slider from 'react-slick';

const PROJECTS_PER_ROW = 3;

const projects = [
	{
		name: 'MIPS Simulator',
		link: 'https://github.com/ConnorAustin/MipsSimulator',
		image: 'https://raw.githubusercontent.com/ConnorAustin/MipsSimulator/master/example.gif'
	},
	{
		name: 'Physics Notes',
		link: 'https://github.com/physicsnotes/physicsnotes.github.io',
		image: 'https://github.com/physicsnotes/physicsnotes.github.io/raw/master/Examples/Website.png'
	},
	{
		name: 'Rust Ray Tracer',
		link: 'https://github.com/ConnorAustin/RustRaytracer',
		image: 'https://raw.githubusercontent.com/ConnorAustin/RustRaytracer/master/example.gif'
	},
	{
		name: 'SNES Controller',
		link: 'https://github.com/ConnorAustin/SNESController',
		image: 'https://raw.githubusercontent.com/ConnorAustin/SNESController/master/SnesPic.jpg'
	},
	{
		name: 'Compiler',
		link: 'https://github.com/ConnorAustin/Compiler'
	},
	{
		name: 'Better Board',
		link: 'https://github.com/ConnorAustin/BetterBoard',
		image: 'https://raw.githubusercontent.com/ConnorAustin/BetterBoard/master/Examples/kewl.png'
	},
	{
		name: 'BST Visualization',
		link: 'https://github.com/ConnorAustin/TreeVisual',
		image: 'https://raw.githubusercontent.com/ConnorAustin/TreeVisual/master/example.gif'
	},
	{
		name: 'Booyer Moore',
		link: 'https://github.com/ConnorAustin/BoyerMoore',
		image: 'https://raw.githubusercontent.com/ConnorAustin/BoyerMoore/master/example.gif'
	},
	{
		name: 'Roll Me Up',
		link: 'https://github.com/ConnorAustin/RollMeUp',
		image: 'https://raw.githubusercontent.com/ConnorAustin/RollMeUp/master/gameplay.gif'
	},
	{
		name: 'Bartok',
		link: 'https://github.com/ConnorAustin/Bartok',
		image: 'https://raw.githubusercontent.com/ConnorAustin/Bartok/master/gameplay.gif'
	},
	{
		name: 'Space Shooter',
		link: 'https://github.com/ConnorAustin/SpaceShooter',
		image: 'https://raw.githubusercontent.com/ConnorAustin/SpaceShooter/master/gameplay.gif'
	},
	{
		name: 'Bob Toss',
		link: 'https://github.com/ConnorAustin/BobToss',
		image: 'https://raw.githubusercontent.com/ConnorAustin/BobToss/master/bob.gif'
	},
	{
		name: 'Apple Picker',
		link: 'https://github.com/ConnorAustin/ApplePicker',
		image: 'https://raw.githubusercontent.com/ConnorAustin/ApplePicker/master/gameplay.gif'
	},
	{
		name: 'Solar System',
		link: 'https://github.com/ConnorAustin/SolarSystem',
		image: 'https://raw.githubusercontent.com/ConnorAustin/SolarSystem/master/gameplay.gif'
	},
	{
		name: 'I See Dead Spikes',
		link: 'https://github.com/ConnorAustin/ISeeDeadSpikes',
		image: 'https://raw.githubusercontent.com/ConnorAustin/ISeeDeadSpikes/master/Gameplay.png'
	},
	{
		name: 'Mountain Man',
		link: 'https://github.com/ConnorAustin/MountainMan',
		image: 'https://raw.githubusercontent.com/ConnorAustin/MountainMan/master/gameplay_2.png'
	},
	{
		name: 'Suitcase Hero',
		link: 'https://github.com/ConnorAustin/SuitcaseHero',
		image: 'https://raw.githubusercontent.com/ConnorAustin/SuitcaseHero/master/gameplay.gif'
	},
	{
		name: 'Web Dev 1',
		link: 'https://github.com/ConnorAustin/WebDev1',
		image: 'https://raw.githubusercontent.com/ConnorAustin/WebDev1/master/Picture.png'
	},
	{
		name: 'Jelly Blast!',
		link: 'https://github.com/ConnorAustin/JellyBlast',
		image: 'https://raw.githubusercontent.com/ConnorAustin/JellyBlast/master/gameplay.gif'
	},
	{
		name: 'Mario Hand',
		link: 'https://github.com/ConnorAustin/MarioHand',
		image: 'https://raw.githubusercontent.com/ConnorAustin/MarioHand/master/example.gif'
	},
	{
		name: 'TV Costume',
		link: 'https://github.com/ConnorAustin/TV-Costume',
		image: 'https://raw.githubusercontent.com/ConnorAustin/TV-Costume/master/example.gif'
	},
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
		let rows = this.getProjectRows();
		let row = [];
		let rows_elements = rows.map(row => {
			let row_elements = row.map(project => {
				var picture;

				if(project.image) {
					picture = (
						<div>
							<img src={project.image} />
						</div>
					);
				} else {
					picture = (
						<div className="picture-missing">{'</>'}</div>
					);
				}
				
				return (
					<div key={project.name} className="project">
						<a href={project.link}>
							{/*<h1>{project.name}</h1>*/}
							{picture}
						</a>
					</div>
				);
			});

			return (
				<div className="row">{row_elements}</div>
			);
		});

		return (
			<div id="projects-container">
				<h1 class="header">Projects</h1>
				<div class="github-link"><a href="https://github.com/ConnorAustin"><img src={require('../Images/GitHub.png')}></img></a></div>
				<div>{rows_elements}</div>
			</div>
		);
	}
}
