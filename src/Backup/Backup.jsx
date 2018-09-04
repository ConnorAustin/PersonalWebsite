import React from 'react';
import './backup.css';

export default class Backup extends React.Component {
	render() {
		
		return (
		<div id="backup-container">
            <div className="center-container">
                <a href="#about-me-container"><i class="fas fa-hand-point-up"></i></a>
            </div>
            
            <div className="center-container">
                <a href="#about-me-container">Go Back up</a>
            </div>
		</div>
		);
	}
}
