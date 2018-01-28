import React from 'react';
import './Skills.css';

export default class Skills extends React.Component {
	render() {
		return (
		<div id="skills-container">
			<h1>Skills</h1>
			<div className="skills-list-container">
				<span>
					<h2>Languages</h2>
					<ul className="skills-list">
						<li>Python</li>
						<li>Java</li>
						<li>C / C++</li>
						<li>C#</li>
						<li>Javascript</li>
						<li>PHP</li>
						<li>HTML</li>
						<li>CSS / SASS</li>
					</ul>
				</span>

				<span>
					<h2>Talents</h2>
					<ul className="skills-list">
						<li>Linux</li>
						<li>Django</li>
						<li>Node JS</li>
						<li>Joomla</li>
						<li>Azure</li>
						<li>AWS</li>
						<li>Azure</li>
						<li>Android</li>
						<li>Git / GitHub</li>
						<li>SQL</li>
						<li>Docker</li>
						<li>React</li>
						<li>Unity</li>
					</ul>
				</span>
			</div>
		</div>
		);
	}
}
