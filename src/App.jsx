import React from 'react';
import './index.css';

import Intro from './Intro/Intro.jsx';
import Me from './Me/Me.jsx';
import Skills from './Skills/Skills.jsx';
import Projects from './Projects/Projects.jsx';

export default class App extends React.Component {
  render() {
    return (
        <div>
          <Intro />
          <Me />
          <Projects />
          <Skills />
        </div>
    );
  }
}
