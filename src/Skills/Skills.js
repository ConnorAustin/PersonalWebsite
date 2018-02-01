import React from 'react';
import './Skills.css';

const skills = [
	{
		name: 'Languages',
		skills: [
			'Python',
			'Java',
			'C / C++',
			'C#',
			'Javascript',
			'PHP',
			'HTML',
			'CSS / SASS'
		]
	},
	{
		name: 'Frameworks',
		skills: [
			'React',
			'Node JS',
			'Django',
			'Joomla',
			'Android',
			'iOS',
			'Unity'
		]
	},
	{
		name: 'Tools',
		skills: [
			'Azure',
			'AWS',
			'Git / GitHub',
			'Docker',
			'SQL'
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
