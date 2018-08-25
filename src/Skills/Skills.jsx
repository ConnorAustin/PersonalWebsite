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
			'SQL',
			'Oracle PL/SQL'
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
			'Processing',
			'Unity',
			'Game Maker'
		]
	},
	{
		name: 'Tools',
		skills: [
			'Linux',
			'Azure',
			'AWS',
			'Git',
			'Docker',
			'PostgreSQL',
			'Azure ML',
			'Android Studio',
			'Visual Studio',
			'XCode',
			'Eclipse'
		]
	},

];
export default class Skills extends React.Component {
	render() {
		let skill_elements = skills.map((s) => {
			let list = s.skills.map((skill) => {
				return (<li className="skill" key={skill}>{skill}</li>);
			});

			return (
			<span className="skill-category"key={s.name}>
				<h2>{s.name}</h2>
				<ul className="skills-list">
					{list}
				</ul>
			</span>
			);
		});

		return (
		<div id="skills-container">
			<h1 class="header">Skills</h1>
			<div class="icon"><i class="fas fa-code"></i></div>
			<div className="skills-list-container">
				{skill_elements}
			</div>
		</div>
		);
	}
}
