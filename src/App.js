import React from 'react';
import './index.css';

import Intro from './Intro/Intro.js';
import Me from './Me/Me.js';
import Skills from './Skills/Skills.js';

export default class App extends React.Component {
  render() {
    return (
        <div>
          <Intro />
          <Me />
          <Skills />
        </div>
    );
  }
}
