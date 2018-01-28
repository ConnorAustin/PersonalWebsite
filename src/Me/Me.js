import React from 'react';
import './Me.css';

const terminal_list = [
	['email', 'cjaustin42@gmail.com'],
	['phone', '615-806-4822'],
	['github', 'https://github.com/ConnorAustin'],
	['major', 'Computer Science'],
	['fav. ice cream', 'Mint Chocolate Chip']];

export default class Me extends React.Component {
	render() {
		let terminal_attributes = terminal_list.map((el) => {
			return (
				<div>{el[0]}</div>
			);
		});

		let terminal_values = terminal_list.map((el) => {
			return (
				<div><b>{el[1]}</b></div>
			);
		});

		return (
		<div id="about-me-container">
			<div className="center-container"><h1>Hello World!</h1></div>
			<div className="center-container">
				<h2>Hello! I am <b>Connor Austin</b> and I want to improve the world around us.</h2>
			</div>
			<div className="center-container">
				<h2>I believe everyone can use their imaginations to do fantastic things.</h2>
			</div>
			<br/>
			<div className="center-container">
				<h2><b>I am a programmer who loves solving difficult problems.</b></h2>
			</div>

			<div className="center-container">
				<div className="about-me-terminal">
					<span className="about-me-terminal-button"><i className="fa fa-heart" aria-hidden="true"></i></span>
					<div>$ cat connor.austin</div>
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
		</div>
		);
	}
}
