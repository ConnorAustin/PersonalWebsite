import React from 'react';
import './Skills.css';

const skills = [
	{
		name: 'Languages',
		skills: [
			'Java',
			'C#',
			'Javascript',
			'Python',
			'C / C++',
			'PHP',
			'HTML',
			'CSS / SASS',
			'SQL'
		]
	},
	{
		name: 'Frameworks',
		skills: [
			'React',
			'Node JS',
			'Django',
			'Joomla',
			'Android / Studio',
			'iOS / Xcode',
			'Processing',
			'Game Maker',
			'Unity'
		]
	},
	{
		name: 'Tools',
		skills: [
			'Azure',
			'Azure ML',
			'AWS',
			'Git',
			'Docker',
			'PostgreSQL',
			'Linux'
		]
	},

];
export default class Skills extends React.Component {
	render() {
		let skill_elements = skills.map((s) => {
			let list = s.skills.map((skill) => {
				return (<li key={skill}>{skill}</li>);
			});

			return (
			<span key={s.name}>
				<h2>{s.name}</h2>
				<ul className="skills-list">
					{list}
				</ul>
			</span>
			);
		});

		return (
		<div id="skills-container">
			<h1>Skills</h1>
			<div className="skills-list-container">
				{skill_elements}
			</div>
		</div>
		);
	}
}
