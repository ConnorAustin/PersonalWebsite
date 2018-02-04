import React from 'react';
import './Intro.css';

const identities = ['Programmer', 'Game Designer', 'Artist', 'Dreamer'];
export default class Intro extends React.Component {
	reveal_identity() {
		this.setState((prev_state, props) => ({
			cur_identity: (prev_state.cur_identity + 1) % identities.length,
			reveal_count: prev_state.reveal_count + 1
		}));
	}

	componentWillMount() {
		this.setState(() => ({
			cur_identity: identities.length - 1,
			reveal_count: 0
		}));

		// Begin showing indentities
		setTimeout(() => {
			this.reveal_identity();

			// Keep showing new identities
			setInterval(() => this.reveal_identity(), 2000);
		}, 900);
	}

	render() {
		let cur_identity = this.state.cur_identity;
		let reveal_count = this.state.reveal_count;
		let identities_list = [];
		if(reveal_count > 0) {
			for(let i = 0; i < identities.length; i += 1) {
				let classes = 'identity center-container';

				if(i === 0) {
					classes += ' identity-reveal-anim';
				}

				if(i === identities.length - 1 && reveal_count > 1) {
					classes += ' identity-visible';
				}

				let identity = identities[(cur_identity + i) % identities.length];
				identities_list.unshift((
					<span key={identity} className={classes}>
						<span>{identity}</span>
					</span>
				));
			}
		}

		return (
		<div id="intro-container">
			<div id="intro">
				<div style={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'flex-end'}}>
					<span id="name-container">
						<span id="name">Connor Austin</span>
						<span className="underline"></span>
					</span>
					<span id="identity-container">
						{identities_list}
						<span className="underline"></span>
					</span>
				</div>
			</div>
			<div className="center-container" id="more-info"><span className="more-info-text">Who I am</span><i className="more-info-icon fa fa-caret-down" aria-hidden="true"></i></div>
		</div>
		);
	}
}
