import React from 'react';
import './Me.css';

const terminal_list = [
	['email', 'cjaustin42@gmail.com', 'mailto:cjaustin42@gmail.com'],
	['phone', '615-806-4822'],
	['github', 'https://github.com/ConnorAustin', 'https://github.com/ConnorAustin'],
	['linkedin', 'linkedin.com/in/cjaustin42', 'https://www.linkedin.com/in/cjaustin42'],
	['degree', 'B.S. in Computer Science', false],
	['fav. ice cream', 'Mint Chocolate Chip', false]];

export default class Me extends React.Component {
	render() {
		let terminal_attributes = terminal_list.map((el) => {
			return (
				<div key={el[0]}>{el[0]}</div>
			);
		});

		let terminal_values = terminal_list.map((el) => {
			if(el[2]) {
				return (
					<div key={el[1]}><b><a href={el[2]}>{el[1]}</a></b></div>
				);
			}
			return (
				<div key={el[1]}><b><a>{el[1]}</a></b></div>
			);
		});

		return (
		<div id="about-me-container">
			<div className="center-container"><h1 class="header">About Me</h1></div>
			<div className="center-container">
				<h2>Hello! I am <b>Connor Austin</b>, a developer that loves building things <i class="fas fa-rocket"></i></h2>
			</div>
			<br/>
			<div className="center-container">
				<div className="about-me-terminal">
					<span className="about-me-terminal-button"><i className="fa fa-heart" aria-hidden="true"></i></span>
					<div style={{color: 'rgb(166, 166, 166)'}}>$ more connor.austin</div>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<div style={{color: 'rgb(166, 166, 166)'}}>
							{ terminal_attributes }
						</div>
						<div style={{marginLeft: '3vw'}}>
							{ terminal_values }
						</div>
					</div>
				</div>
			</div>
			<div className="center-container">
				<a className="resume-link" href="https://connoraustin.xyz/ConnorAustin-Resume.pdf">View my resume</a>
			</div>
			
			{/*
			<div class="resume-container">
				<iframe class="resume" src="https://connoraustin.xyz/rawresume/"></iframe>
			</div>
			*/}
		</div>
		);
	}
}
