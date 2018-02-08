import React from 'react';
import './Projects.css';
import Slider from 'react-slick';

const projects = [
	{
		name: 'Physics Notes',
		link: 'https://github.com/physicsnotes/physicsnotes.github.io',
		image: 'https://github.com/physicsnotes/physicsnotes.github.io/raw/master/Examples/Website.png'
	},
	{
		name: 'MIPS Simulator',
		link: 'https://github.com/ConnorAustin/MipsSimulator',
		image: 'https://raw.githubusercontent.com/ConnorAustin/MipsSimulator/master/example.gif'
	},
	{
		name: 'Rust Ray Tracer',
		link: 'https://github.com/ConnorAustin/RustRaytracer',
		image: 'https://raw.githubusercontent.com/ConnorAustin/RustRaytracer/master/example.gif'
	},
	{
		name: 'Better Board',
		link: 'https://github.com/ConnorAustin/BetterBoard',
		image: 'https://raw.githubusercontent.com/ConnorAustin/BetterBoard/master/Examples/kewl.png'
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
		image: 'https://raw.githubusercontent.com/ConnorAustin/BobToss/master/bob.gif'},
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
	render() {
		let project_elements = projects.map((p) => {
			var picture;

			if(p.image) {
				picture = (
					<span style={{width: '15vw', height: '15vw', borderRadius: '0.2vw', overflow: 'hidden'}}>
						<img src={p.image} />
					</span>
				);
			} else {
				picture = (
					<div className="picture-missing">{'</>'}</div>
				);
			}

			return (
				<span key={p.name} className="project">
					<a href={p.link}>
						<h1>{p.name}</h1>
						{picture}
					</a>
				</span>
			);
		});

		return (
		<div id="projects-container">
			<h1 class="header">Projects</h1>
			<div class="github-link"><a href="https://github.com/ConnorAustin"><img src={require('../Images/GitHub.png')}></img></a></div>
			<Slider lazyLoad={true} dots={true} infinite={true} speed={500} slidesToShow={4} slidesToScroll={4}>
				{project_elements}
			</Slider>
		</div>
		);
	}
}
